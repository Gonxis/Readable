import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    VOTE_POST,
    EDIT_POST,
    DELETE_POST,
    RECEIVE_COMMENTS_OF_POST,
    ADD_POST,
    ADD_COMMENT_TO_POST
} from '../actions/posts'

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case RECEIVE_POST:
            const { posts, id } = action;

            return {
                ...state,
                ...posts[id]
            }
        default:
            return state
    }
}