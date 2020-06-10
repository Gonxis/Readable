import React, { Component } from 'react'
import './App.css'
import * as ReadableAPI from './ReadableAPI'


class App extends Component {

  state = {
    categories: [],
    posts: [],
    postsOfReact: [],
    post1: {},
    /* post2: {},
    post3: {} */
    post4: {},
    commentsPost: [],
    newComment: {},
    oneComment: {}
  }

  async componentDidMount() {
    /* const newPost = {
      title: "New post from App Component in React",
      body: "The body of the new post",
      author: "Gonxis",
      category: 'react'
    }

    const updatePost = {
      id: "nncvg80c",
      title: "Updated post from App Component in React",
      body: "The body of the updated post"
    }

    const newComment = {
      body: "Body of the new comment",
      author: "Gonxis",
      parentId: "8xf0y6ziyjabvozdd253nd"
    } */

    const updateComment = {
      id: "ztq2jsv4",
      body: "Body of the updated comment"
    }

    // WORKING
    const categories = await ReadableAPI.getCategories()
    const posts = await ReadableAPI.getPosts()
    const postsOfReact = await ReadableAPI.getCategoryPosts('react')
    const postsOfRedux = await ReadableAPI.getCategoryPosts('redux')
    //posts.push(await ReadableAPI.addPost(newPost))
    const post1 = await ReadableAPI.getPost("6ni6ok3ym7mf1p33lnez")
    
    //NOT WORKING
    //await ReadableAPI.votePost("8xf0y6ziyjabvozdd253nd", "upVote")
    //const post2 = await ReadableAPI.getPost("8xf0y6ziyjabvozdd253nd")
    /* await ReadableAPI.votePost("sm0nz7ye", "downVote")
    const post3 = await ReadableAPI.getPost("sm0nz7ye") */
    /* await ReadableAPI.voteComment("ztq2jsv4", "upVote")
    await ReadableAPI.voteComment("ztq2jsv4", "downVote")
    await ReadableAPI.voteComment("ztq2jsv4", "downVote") */

    //WOKING
    /* await ReadableAPI.updatePost(updatePost)
    const post4 = await ReadableAPI.getPost("nncvg80c") */
    await ReadableAPI.deletePost("nncvg80c")
    const commentsPost = await ReadableAPI.getCommentsPost("8xf0y6ziyjabvozdd253nd")
    // const comment = await ReadableAPI.addComment(newComment)
    let oneComment = await ReadableAPI.getComment("8tu4bsun805n8un48ve89")
    await ReadableAPI.updateComment(updateComment)
    oneComment = await ReadableAPI.getComment("ztq2jsv4")
    await ReadableAPI.deleteComment("gh14s7j9")
    this.setState({ categories, posts, postsOfReact, postsOfRedux, post1, /* post2, post3, post4, */ commentsPost, /* newComment: comment, */ oneComment  })
  }

  render() {

    const { categories, posts, postsOfReact, postsOfRedux, post1, /* post2, post3, post4,  */ commentsPost, /* newComment, */ oneComment } = this.state

    return (
      <div className="App">
        <h1>Readable App</h1>
        {console.log("Categories: ", categories)}
        {console.log("Posts: ", posts)}
        {console.log("PostsOfReact: ", postsOfReact)}
        {console.log("PostsOfRedux: ", postsOfRedux)}
        {console.log("Post: ", post1)}
        {/* {console.log("Post: ", post2)} */}
        {/* {console.log("Post: ", post3)} */}
        {/* {console.log("Post: ", post4)} */}
        {console.log("Comments Post: ", commentsPost)}
        {/* {console.log("New Comment: ", newComment)} */}
        {console.log("One Comment: ", oneComment)}
      </div>
    )
  }
}

export default App
