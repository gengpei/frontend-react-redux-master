export const ADD_FAVORITE = 'ADD_Favorite';
export const DEL_FAVORITE = 'DEL_Favorite';
export const ADD_LISTENED = 'ADD_Listened';
export const DEL_LISTENED = 'DEL_Listened';

export const addFavorite = (item) => ({
    type: ADD_FAVORITE,
    item
})
export const delFavorite = (item) => ({
    type: DEL_FAVORITE,
    item
})

export const addListened = (item) => ({
    type: ADD_LISTENED,
    item
})

export const delListened = (item) => ({
    type: DEL_LISTENED,
    item
})
