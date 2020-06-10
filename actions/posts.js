export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const RECEIVE_COMMENTS_OF_POST = 'RECEIVE_COMMENTS_OF_POST'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function receivePost(posts, id) {
    return {
        type: RECEIVE_POSTS,
        ...posts[id]
    }
}

/* 
export function addAnswerToUser({ authedUser, qid, answer }) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestionToUser({ id, author }) {
    return {
        type: ADD_QUESTION_TO_USER,
        id,
        author
    }
} 
*/