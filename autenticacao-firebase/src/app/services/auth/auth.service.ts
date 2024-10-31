import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly fireApp: FirebaseApp
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
}
