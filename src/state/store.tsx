import React, { createContext, useContext, useReducer } from 'react';
import { addToWishlist, deleteFromWishlist } from './reducer';


interface IState {
    wishlist: any;
}

interface IAction {
    type: string;
    id?: string;
    wishlist?: any;
}

interface IContextProps {
    state: IState;
    dispatch: (action: any) => void;
}

const StoreContext = createContext({} as IContextProps);
const initialState: IState = { wishlist: {} };

const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'addWishlist':
            return addToWishlist(state, action);
        case 'deleteWishlist':
            return deleteFromWishlist(state, action);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const StoreProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (<StoreContext.Provider value={{ state, dispatch }}>{children} </StoreContext.Provider>)
};

export const useStore = () => useContext(StoreContext);