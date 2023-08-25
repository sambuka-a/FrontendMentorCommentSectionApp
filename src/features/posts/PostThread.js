import styles from './postThread.module.scss'

import CommentCard from '../../UI/CommentCard'
import PostAuthor from '../../UI/PostAuthor'
import ReactionButton from '../../UI/ReactionButton'
import TimeAgo from '../../UI/TimeAgo'
import Controls from '../../UI/Controls'
import AddPost from './AddPost'

const PostThread = ({comments, handleShowReplyForm, showReplyForm, edit}) => {

  return (
    <div className={styles.postContainer}>
    {comments.map(item => (
      <CommentCard
        key={item.id}
        showReplyForm={showReplyForm === item.id}
        itemId={item.id}
        itemAuthorId={item.userId}
        isEdit={edit === item.id}
        handleShowReplyForm={handleShowReplyForm}
      >
        <div className={styles.comment}>
          <section className={styles.reaction}>
            <ReactionButton 
              item={item}
            />
          </section>
          <div className={styles.commentInfo}>
            <div className={styles.header}>
              <section className={styles.commentHeader}>
                <PostAuthor userId={item.userId}/>
                <TimeAgo timeStamp={item.createdAt}/>
              </section>
              <section className={styles.controls}>
                <Controls
                  userId={item.userId}
                  postId={item.id}
                  handleShowReplyForm={handleShowReplyForm}
                />
              </section>
            </div>
            {(edit === item.id) ? (
                <AddPost 
                  itemId={item.id}
                  isEdit={edit === item.id}
                  handleShowReplyForm={handleShowReplyForm}
                />
              ) : (
                <div className={styles.commentBody}>
                  {item.replyingTo ? 
                    <p>{`@${item.replyingTo} ${item.content}`}</p>
                   :
                    <p>{item.content}</p>
                  }
                </div>
              )           
            }
            <div className={styles.postFooter}>
              <ReactionButton 
                item={item}
              />
              <Controls
                userId={item.userId}
                postId={item.id}
                handleShowReplyForm={handleShowReplyForm}
              />
            </div>
          </div>
        </div>
        {item.replies && item.replies.length > 0 ? (
          <div className={styles.replyContainer}>
            <PostThread 
              comments={item.replies.slice().sort((a,b) => b.score - a.score)}
              handleShowReplyForm={handleShowReplyForm}
              showReplyForm={showReplyForm}
              edit={edit}
            />
          </div>
        ) : null}
      </CommentCard>
    ))}
  </div>
  )
}

export default PostThread