import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router'; 
import firebase from 'firebase/app';
import {googAuthUser} from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    public afs: AngularFirestore,   // BASE DE DATOS EN Firestore
    public afAuth: AngularFireAuth, // SERVICIO DE AUTH en Firebase
    public router: Router) {  // Enrutado, redirigir al usuario a otra URL

    }

    googleAuth() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.afAuth.signInWithPopup(provider).then((result) => {
        console.log(result);
        let perfilUsuarioLogueado:any;
        perfilUsuarioLogueado = result.additionalUserInfo.profile;
        //const perfilUsuarioLogueado = result.additionalUserInfo.profile;
        const {email="", family_name: apellidos = "", given_name: nombre = "", picture: foto = "" }=  perfilUsuarioLogueado || {};
        
        let consulta:any = (this.afs.collection('users'), ref => ref.where('email','==',this.afAuth.currentUser));
        if(consulta!=undefined && consulta!=null && consulta.lenght>0 && perfilUsuarioLogueado.email == consulta.email){
          this.afs.collection('users').add(perfilUsuarioLogueado);
        }
        

      }).catch((error) => {
        window.alert(error)
      });
    }



    
}
