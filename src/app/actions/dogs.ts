import { Action } from '@ngrx/store';

/* 
 * Every Action has a type
 * It's a good practice to keep type constant
 * We're using enum from typescript to list every actions type
 * These types will be later used in reducers to match an action and its handlers
 */
enum ActionTypes {
    FIND_ANOTHER_DOG = "FIND_ANOTHER_DOG"
}

/*
 * Every actions are basically data type with 2 properties : 
 * - type : This is the type of the action ( see above )
 * - payload : It can be anything, payload are parameters to pass with action to reducers
 * We're using class here in order for typescript to be more efficient ( for typechecking ) 
 * The Action interface only forces action to have a "type" properties
 */
// For the findAnotherDog action, there is no payload
export class findAnotherDog implements Action {
    readonly type = ActionTypes.FIND_ANOTHER_DOG;
    constructor(payload?: any) { }
}

/* 
 * Type Action contains every possible action of an action file
 * This will be useful with typechecking later on ( in reducers ). 
 */
export type Action = findAnotherDog;