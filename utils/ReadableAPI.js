const api = process.env.NODE_ENV === 'development' ?
    "http://localhost:3001" :
    'https://readable-udacity-api.herokuapp.com'

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
    .then(data => data.categories)

export const getCategoryPosts = (category) =>
    fetch(`${api}/${category.id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.category)

export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

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

export const getPost = (post) =>
    fetch(`${api}/posts/${post.id}`, { headers })
    .then(res => res.json())
    .then(data => data.post)

export const votePost = (post, option) =>
    fetch(`${api}/posts/${post.id}`, {
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
    .then(data => data.post)

export const deletePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
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

export const getCommentsPost = (post) =>
    fetch(`${api}/posts/${post.id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.post)

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

export const getComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, { headers })
    .then(res => res.json())
    .then(data => data.comment)

export const voteComment = (comment, option) =>
    fetch(`${api}/comments/${comment.id}`, {
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
    .then(data => data.comment)

export const deleteComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            deleted: true
        })
    }).then(res => res.json())