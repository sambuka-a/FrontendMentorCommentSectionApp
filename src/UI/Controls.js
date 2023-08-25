import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectAllUsers } from '../features/users/usersSlice'

import styles from './controls.module.scss'

import Button from './Button'
import Modal from './Modal/Modal'

import { ReactComponent as Reply } from '../assets/icon-reply.svg'
import { removePost } from '../features/posts/postsSlice'

const Controls = ({userId, postId, handleShowReplyForm}) => {

  const [modalOpen, setModalOpen] = useState(false)

  const users = useSelector(selectAllUsers)
  const dispatch = useDispatch()
  const author = users.find(user => user.id === userId)

  const handleRemovePost = () => {
    setModalOpen(false)
    dispatch(removePost({postId}))
  }

  return (
    <>
      {author.currentUser ? (
        <div className={styles.controls}>
          <span className={styles.editButton}>
            <Button 
              type='Edit'
              onEdit={() => handleShowReplyForm(postId, 'edit')}
            />
          </span>
          <span className={styles.deleteButton}>
            <Button 
              type='Delete'
              onDelete={() => {setModalOpen(true)}} 
            />
          </span>
        </div>
        ) : (
          <div className={styles.controls}>
            <span
              onClick={() => handleShowReplyForm(postId, 'reply')}
            >
              <Reply/> Reply
            </span>
          </div>
        )
      }
      <Modal
        handleClose={() => setModalOpen(false)}
        handleConfirm={handleRemovePost}
        modalOpen={modalOpen}
      />
    </>
  )
}

export default Controls