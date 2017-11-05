import 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { DogApiService } from '../services/dogApi.service'
import { FETCH_RANDOM_DOG, fetchRandomDogSuccess, fetchRandomDogError } from '../actions/dogs'

@Injectable()
export class DogsEffects {
    // Inject required services
    constructor(private actions$: Actions, private _dogApiService: DogApiService) { }

    /*
     * The return action is automatically dispatch to the store by ngrx/effects
     */
    @Effect()
    fetchRandomDog$: Observable<Action> = this.actions$
        // Send the request when FETCH_RANDOM_DOG is dispatched
        .ofType(FETCH_RANDOM_DOG)
        // Send the request to the API
        .switchMap(() => this._dogApiService.findRandomDog())
        // Request succeeed, we dispatch fetchRandomDogSuccess action with the retrieved imgUrl
        .map(imgUrl => new fetchRandomDogSuccess(imgUrl))
        // Something went wrong with the request
        .catch(err => Observable.of(new fetchRandomDogError(err)))
}