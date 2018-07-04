import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';

export const firebaseConfig = {
  apiKey: 'AIzaSyBJ2JsZAb2fo0m0HrDVrLa8oJcepcb2pBw',
  authDomain: 'chatapp-da381.firebaseapp.com',
  databaseURL: 'https://chatapp-da381.firebaseio.com',
  projectId: 'chatapp-da381',
  storageBucket: 'chatapp-da381.appspot.com',
  messagingSenderId: '566943539642'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
