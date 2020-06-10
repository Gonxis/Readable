import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS_OF_CATEGORY,
} from '../actions/categories'

export default function categories(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                ...action.categories
            }
        case RECEIVE_POSTS_OF_CATEGORY:
            const { categoryId, postId } = action;

            return {
                ...state,
                [postId]: {
                    ...state[categoryId]
                }
            }
        default:
            return state
    }
}