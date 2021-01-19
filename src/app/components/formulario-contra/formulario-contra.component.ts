import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';

@Component({
  selector: 'app-formulario-contra',
  templateUrl: './formulario-contra.component.html',
  styleUrls: ['./formulario-contra.component.css']
})
export class FormularioContraComponent implements OnInit {

  contrasenya:String;
  repetida:String;

  constructor(public afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  settearContra(){
    if(this.contrasenya == this.repetida){
      this.afs.collection('users').doc(firebase.auth().currentUser.uid).update({contrasenya: this.contrasenya});
      //firebase.auth().currentUser.updateProfile({password:this.contrasenya}).then(console.log('')));
    }
  }

}
