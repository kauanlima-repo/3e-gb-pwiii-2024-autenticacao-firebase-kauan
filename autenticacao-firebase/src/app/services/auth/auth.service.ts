import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly localData: Storage = window.localStorage;

  constructor(
    private readonly fireApp: FirebaseApp,
  ) { }

  createUser(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(
      getAuth(this.fireApp),
      email,
      password
    )
  }

  emailPasswordLogin(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(
      getAuth(this.fireApp),
      email,
      password
    )
  }

  setLoggedUser(email: string, uid: string): void {
    this.localData.setItem(
      'data',
      JSON.stringify({email, uid})
    );
  } 

  getLoggedUser(): string | null {
    return this.localData.getItem('data');
  }

  removeLoggedUser(): string {
    if(this.localData.length === 0) {
      return 'Não há usuários logados';
    }
    this.localData.removeItem('data');
    return 'Usuário deslogado';
  }
}
