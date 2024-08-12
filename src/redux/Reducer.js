

const storage = JSON.parse(localStorage.getItem("Wishlist"))
const INITIAL_VALUE = storage ? storage : []
console.log("wishlist", INITIAL_VALUE);

export default function WishListReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case "ADD_WISHLIST":
            var items = [...state, action.payload]
            localStorage.setItem("Wishlist", JSON.stringify(items))
            return items
        case "REMOVE_WISHLIST":
            var remove = state.filter((item) => item.id !== action.payload)
            localStorage.setItem("Wishlist", JSON.stringify(remove))
            return remove
        case "REMOVE_ALL_WISHLIST":
            localStorage.removeItem("Wishlist")
            return []
        default:
            return state
    }
}