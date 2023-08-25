import { createSlice, nanoid } from "@reduxjs/toolkit";

import { comments } from "../../mock/data";

const initialState = comments

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
      state.push(action.payload)
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            content,
            createdAt: new Date().toISOString(),
            userId,
            score: 0,
            replies:[],
          }
        }
      }
    },
    editPost (state, action) {
      const {itemId, comment} = action.payload
      const updatedPosts = state.map(post => {
          if(post.id === itemId) {
            return {...post, content: comment}
          } else if(post.replies && post.replies.length > 0) {
            const updatedReplies = post.replies.map(reply => {
              if(reply.id === itemId) {
                return {...reply, content: comment}
              }
              return reply
            })
          return {...post, replies: updatedReplies}
        }
        return post
      })
      return updatedPosts
    },
    addReply: {
      reducer(state, action) {
        const {itemId} = action.payload
        const existingPost = state.find(post => post.id === itemId)

        if(existingPost) {
          existingPost.replies.push(action.payload)
        }
      },
      prepare(comment, parentPostId, activeUserId, postAuthor) {
        return {
          payload: {
            itemId: parentPostId,
            id: nanoid(),
            userId: activeUserId,
            content: comment,
            createdAt: new Date().toISOString(),
            score: 0,
            replyingTo: postAuthor,
          }
        }
      }
    },
    removePost(state, action) {
      const {postId} = action.payload
      const updatedState = state.map(item => {
        if(item.replies.some(reply => reply.id === postId)) {
          return {
            ...item,
            replies: item.replies.filter(reply => reply.id !== postId)
          }
        }
        return item
      })
      return updatedState.filter(post => post.id !== postId)
    },
    addScore(state, action) {
      const {itemId, rate} = action.payload
      const updatedPosts = state.map(post => {
        if(post.id === itemId) {
          return {
            ...post,
            score: rate === 'up' ? post.score + 1 : post.score - 1
          }
        } else if(post.replies && post.replies.length > 0) {
          const updatedReplies = post.replies.map(reply => {
            if(reply.id === itemId) {
              return {
                ...reply, 
                score: rate === 'up' ? reply.score + 1 : reply.score - 1}
              }
            return reply
          })
        return {...post, replies: updatedReplies}
      }
      return post
    })
      return updatedPosts
    }
  }
})

export const {addPost, editPost, addScore, addReply, removePost} = postsSlice.actions

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer