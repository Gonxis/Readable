import {
    RECEIVE_COMMENT,
    VOTE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actions/comments'

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENT:
            return {
                ...state,
                ...action.comment
            }
        default:
            return state
    }
}