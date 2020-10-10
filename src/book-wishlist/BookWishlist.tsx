import React from 'react';
import { useStore } from '../state/store';

export const BookWishlist: React.FC<any> = () => {
    const { state, dispatch } = useStore();
    const count = state ? Object.keys(state.wishlist).length : 0;

    return (<>
        <div className="wishlist-title">
            <h3> My Reading WishList ({count})</h3>
        </div>
        {state &&
            <div className="whishlist-content">
                {Object.keys(state.wishlist).map((id: string) => (<div className="wishlist-row" key={id}>{state.wishlist[id]} <div onClick={() => { dispatch({ type: 'deleteWishlist', bookId: id }) }}> <img src={require('../resources/images/delete.png')} /></div> </div>))}
            </div>}
    </>)
}
