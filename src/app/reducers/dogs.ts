// Import Actions types from actions/dogs
import * as fromDogsActions from '../actions/dogs'

// This const is only used to avoid making a http request
// This url will be used to change the current dog imgUrl
const OTHER_DOG_URL = "https://dog.ceo/api/img/retriever-golden/n02099601_3869.jpg";

/*
 *  Defining our state datatype
 *  For now, we only need an imgUrl from the current dog
 */
export interface State {
    currentDog: {
        imgUrl: string
    }
}

/*
 * Defining our initialState
 * This state will be load by default when the application starts
 */
export const initialState: State = {
    currentDog: {
        imgUrl: "https://dog.ceo/api/img/pembroke/n02113023_3945.jpg"
    }
}

/*
 * This is our reducer. There is 2 parameter :
 * - state : The current state to be updated
 * - action : The action sent to the reducer ( with a type and a payload )
 * The reducer will use the action.type to make difference between actions
 * Notice : The reducer should be immutable. ( We should never do "state.prop = ..." ).
 * Instead we creating and returning a new state each time
 */
export function reducer(state: State = initialState, action: fromDogsActions.Action) {

    /*
     * Every action has an action.type property
     */ 
    switch (action.type) {

        case fromDogsActions.FIND_ANOTHER_DOG: {
            // As stated above we're creating a new state
            // We're putting the new URL in the imgUrl props
            return {
                currentDog: {
                    imgUrl: OTHER_DOG_URL
                }
            }
        }

        /*
         * By default, if we don't recognize the action
         * the next state is the same as the current state
         * So, we're just returning the state here.
         */
        default:
            return state;
    }

}