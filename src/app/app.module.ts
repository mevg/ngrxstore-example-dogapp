import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HomePage, DogApp } from './containers';
import { DogPicture } from './components';
import { DogApiService } from './services';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    DogApp,
    HomePage,
    DogPicture
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(DogApp),

    // Initialize the store with our reducers
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DogApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DogApiService
  ]
})
export class AppModule { }
