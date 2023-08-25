import styles from './postAuthor.module.scss'

import {useSelector} from 'react-redux'
import { selectAllUsers } from '../features/users/usersSlice'

const PostAuthor = ({userId, isReply}) => {

  const users = useSelector(selectAllUsers)
  let author
  if(userId) {
    author = users.find(user => user.id === userId)
  }

  return (
    <>
      {userId && !isReply? 
        <section className={styles.postAuthor}>
          <img 
            src={author.image.png}
            alt={author.username}
          />
          <span>{author ? author.username : "Unknown Author"}</span>
          {author.currentUser && (
            <section className={styles.activeUserBadge}>
              <p>you</p>
            </section>
          )}
        </section>
          : 
        isReply && userId? 
          <section className={styles.postAuthor}>
            <img 
              src={author.image.png}
              alt={author.username}
            />
          </section>
          : 
          <></>
      }
    </>
  )
}

export default PostAuthor