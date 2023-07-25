import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

//shouldListen -> if DOM must entirely be re-rendered after favourite selection
export const useStore = (shouldListen = true) => {
    //considering only current( [1] ) state, and not the previous ( [0] ) one
    //renders component with apropriate custom hook
    const setState = useState(globalState)[1];

    //sending the action to be taken, as well as any data attached to it (payload) 
    const dispatch = (actionIdentifier, payload) => {
        //creating action to be taken by using generic calls (methodName == actions[actionIdentifier] | params == globalState, payload)
        const newState = actions[actionIdentifier](globalState, payload);

        //merging new given state to old one
        globalState = { ...globalState, ...newState };

        //going through listeners and setting the current state to every iteration inside of it
        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        //re-rendering DOM only when asked to
        if (shouldListen) {
            //adding listener when component is mounted (first render)
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                //removing listeners that're not currently being used from array
                listeners = listeners.filter(li =>
                    li !== setState
                );
            }
        }
    }, [setState, shouldListen]); //makes sure it only runs once, IF desired

    return [globalState, dispatch];

}

//setting custom action based on the one sent, together with the state described
export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, initialState };
    }

    actions = { ...actions, ...userActions };
}