import { Action } from '@ngrx/store';

/* 
 * Every Action has a type
 * It's a good practice to keep type constant
 * We re using one constant for each actions type
 * These types will be later used in reducers to match an action and its handlers
 */
export const FETCH_RANDOM_DOG = "FETCH_RANDOM_DOG";
export const FETCH_RANDOM_DOG_SUCCESS = "FETCH_RANDOM_DOG_SUCCESS";
export const FETCH_RANDOM_DOG_ERROR = "FETCH_RANDOM_DOG_ERROR";

/*
 * Every actions are basically data type with 2 properties : 
 * - type : This is the type of the action ( see above )
 * - payload : It can be anything, payload are parameters to pass with action to reducers
 * We're using class here in order for typescript to be more efficient ( for typechecking ) 
 * The Action interface only forces action to have a "type" properties
 */
export class fetchRandomDog implements Action {
    readonly type = FETCH_RANDOM_DOG;
    constructor(public payload?: any) { }
}

/*
 * By convention, the payload property contains every parameter sent with actions
 */
export class fetchRandomDogSuccess implements Action {

    // We define the payload property
    payload: { dogImgUrl: string };

    readonly type = FETCH_RANDOM_DOG_SUCCESS;
    constructor(dogImgUrl: string) {
        //  We take a dog image url as parameter and put it in the payload
        this.payload = { dogImgUrl };
    }
}

export class fetchRandomDogError implements Action {

    payload: { error: any }
    
    readonly type = FETCH_RANDOM_DOG_ERROR;
    constructor(error: any) {
        this.payload = { error }
    }
}

/* 
 * Type Action contains every possible action of an action file
 * This will be useful with typechecking later on ( in reducers ). 
 */
export type Action = fetchRandomDog | fetchRandomDogError | fetchRandomDogSuccess;