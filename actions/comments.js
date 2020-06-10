export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function receiveComment(comment) {
    return {
        type: RECEIVE_COMMENT,
        comment
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