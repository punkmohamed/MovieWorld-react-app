import { createSlice } from "@reduxjs/toolkit"


const storage = JSON.parse(localStorage.getItem("Wishlist"))
const INITIAL_STATE = storage ? storage : []


const wishListSlice = createSlice({
    name: 'wishListSlice',
    initialState: INITIAL_STATE,
    reducers: {
        addWishList(state, action) {
            var items = [...state, action.payload]
            localStorage.setItem("Wishlist", JSON.stringify(items))
            return items
        },
        removeWishlist(state, action) {
            var remove = state.filter((item) => item.id !== action.payload)
            localStorage.setItem("Wishlist", JSON.stringify(remove))
            return remove
        },
        removeAllWishList() {
            localStorage.removeItem("Wishlist")
            return []
        }
    }
})
export const { addWishList, removeAllWishList, removeWishlist } = wishListSlice.actions

export default wishListSlice.reducer