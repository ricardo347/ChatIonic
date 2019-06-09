import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

var firebaseConfig = {
  apiKey: "AIzaSyBggtXA0nnLpaEK74zXUxhjENMqCHaw_W0",
  authDomain: "chats-2f941.firebaseapp.com",
  databaseURL: "https://chats-2f941.firebaseio.com",
  projectId: "chats-2f941",
  storageBucket: "",
  messagingSenderId: "1080009937073",
  appId: "1:1080009937073:web:fb83fb882941ce09"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
             IonicModule.forRoot(),
              AppRoutingModule,
              IonicModule.forRoot(MyApp),
              AngularFireModule.initializeApp(firebaseConfig),
              AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
