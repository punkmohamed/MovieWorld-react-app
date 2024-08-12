




export const addWishlist = (payload) => {
    console.log(payload);

    return {
        type: "ADD_WISHLIST",
        payload
    }
}
export const removeWishList = (payload) => {
    console.log(payload)
    return {
        type: "REMOVE_WISHLIST",
        payload
    }
}
export const removeAllWishList = (payload) => {
    console.log(payload)
    return {
        type: "REMOVE_ALL_WISHLIST",
        payload
    }
}
