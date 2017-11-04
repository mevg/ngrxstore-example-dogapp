import { Component } from '@angular/core';
import { State } from '../../reducers'
import { Store } from '@ngrx/store';
import * as fromDogs from '../../actions/dogs';

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePage {
  /*
   * The store is injected in the constructor by angular
   * The store will then be used to retrieve data from the store and pass then to components
   * The store will also be used to dispatch action to the store on certain event
   * The State is the global state of the application. It is used by typescript help the developper
   */ 
  constructor(private _store: Store<State>) { }

  /*
   * Callback function called when the button is clicked
   */
  onFindAnotherDogClicked() {
    // Dispatch the "findAnotherDog" action using the _store injected in the constructor
    this._store.dispatch(new fromDogs.findAnotherDog())
  }
}
