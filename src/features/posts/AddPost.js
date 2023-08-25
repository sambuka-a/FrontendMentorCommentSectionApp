import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addPost, editPost, addReply } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { selectAllPosts } from './postsSlice'

import styles from './addPost.module.scss'
import PostAuthor from '../../UI/PostAuthor'

const AddPost = ({itemId, itemAuthorId, isEdit, showReplyForm, handleShowReplyForm}) => {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)
  const posts = useSelector(selectAllPosts)

  let activeUserId = users.find(user => user.currentUser)?.id
  let postAuthor = users.find(user => user.id === itemAuthorId)?.username
  let activePost
  let parentPostId
  
  const parentPost = posts.find(post => post.replies.some(reply => reply.id === itemId))
  if(parentPost) {
    activePost = parentPost.replies.find(reply => reply.id === itemId)
    parentPostId = parentPost?.id
  } else {
    activePost = posts.find(post => post.id === itemId)
    parentPostId = activePost?.id
  }

  const onAddComment = e => setComment(prevState => e.target.value)
  const canSave = Boolean(activeUserId)

  const onAddPost = () => {
    if(canSave) {
        dispatch(addPost(comment, activeUserId))
        setComment('')
      } 
    }

  const onEdit = () => {
    if(canSave) {
      dispatch(editPost({comment, itemId}))
      handleShowReplyForm(itemId, 'edit');
    } 
  }

  const onReply = () => {
    if(canSave) {
      dispatch(addReply(comment, parentPostId, activeUserId, postAuthor))
      handleShowReplyForm(itemId, 'reply');
    }
  }

    useEffect(() => {
      if (isEdit && activePost) {
        setComment(activePost.content);
      }
    }, [isEdit, activePost]);

  return (
    <div className={styles.commentBody}>
      <form>
        <textarea
          type='text'
          id='postContent'
          name='postContent'
          value={comment}
          onChange={onAddComment}
        />
      </form>
        <div className={styles.commentFooter}>
          {showReplyForm && itemId &&
          <section>
            <PostAuthor 
              isReply={showReplyForm}
              userId={activeUserId}
            />
          </section>
          }
          <button 
            type='submit'
            onClick={isEdit ? onEdit : showReplyForm ? onReply : onAddPost}
            disabled={!canSave}
          >
            {isEdit ? 'Submit' : 'Send'}
          </button>
        </div>
    </div>
  )
}

export default AddPost