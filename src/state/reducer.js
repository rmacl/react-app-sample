export function addToWishlist(initialState, action) {
    const wishlist = { ...initialState.wishlist, ...action.wishlist };
    return { ...initialState, wishlist }
};

export function deleteFromWishlist(initialState, action) {
    const id = action.bookId;
    const { [id]: _, ...rest } = initialState.wishlist;
    return { ...initialState, wishlist: { ...rest } }
}