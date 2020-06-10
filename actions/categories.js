export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS_OF_CATEGORY = 'RECEIVE_POSTS_OF_CATEGORY'

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function receivePostsOfCategory({ categoryId, postId }) {
    return {
        type: RECEIVE_POSTS_OF_CATEGORY,
        categoryId,
        postId
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