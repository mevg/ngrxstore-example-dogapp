import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HomePage, DogApp } from './containers';
import { DogPicture } from './components';
import { DogApiService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { DogsEffects } from './effects/dogs';

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
    HttpModule,
    IonicModule.forRoot(DogApp),
    EffectsModule.forRoot([DogsEffects]),

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
