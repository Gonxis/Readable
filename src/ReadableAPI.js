// const api = process.env.NODE_ENV === 'development' ?
//     "http://localhost:3001" :
//     'https://readable-udacity-api.herokuapp.com'

const api = 'https://readable-udacity-api.herokuapp.com'

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategoryPosts = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            title: post.title,
            body: post.body,
            author: post.author,
            category: post.category
        })
    }).then(res => res.json())

export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const votePost = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vote: option
        })
    }).then(res => res.json())

export const updatePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: post.title,
            body: post.body
        })
    }).then(res => res.json())

export const deletePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            deleted: true,
            parentDeleted: true
        })
    }).then(res => res.json())

export const getCommentsPost = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: Math.random().toString(36).substr(-8),
            timestamp: Date.now(),
            body: comment.body,
            author: comment.author,
            parentId: comment.parentId
        })
    }).then(res => res.json())

export const getComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteComment = (commentId, option) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            vote: option
        })
    }).then(res => res.json())

export const updateComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: Date.now(),
            body: comment.body
        })
    }).then(res => res.json())

export const deleteComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            deleted: true
        })
    }).then(res => res.json())