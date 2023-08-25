import { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './postsList.module.scss'

import { selectAllPosts } from './postsSlice'
import PostThread from './PostThread'
import AddPost from './AddPost'

const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts.slice().sort((a,b) => b.score - a.score)

  const [showReplyForm, setShowReplyForm] = useState(null)
  const [edit, setEdit] = useState(null)

  const handleShowReplyForm = (commentId, param) => {
    if(param ==='reply') {
    setShowReplyForm((prevId) => (prevId === commentId ? null : commentId))
    setEdit(prevState => null)
    } else {
      setShowReplyForm(prevId => null)
      setEdit((prevState) => (prevState === commentId ? null : commentId))
    }
  }

  return (
    <div className={styles.postsList}>
      <PostThread 
        comments={orderedPosts}
        handleShowReplyForm={handleShowReplyForm}
        showReplyForm={showReplyForm}
        edit={edit}
      />
        <AddPost />
    </div>
  )
}

export default PostsList