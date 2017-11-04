import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage, DogApp } from './containers';

@NgModule({
  declarations: [
    DogApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DogApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DogApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
