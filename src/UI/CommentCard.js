import AddPost from '../features/posts/AddPost'

const CommentCard = ({children, showReplyForm, itemId, itemAuthorId, isEdit, handleShowReplyForm}) => {

  return (
    <>
      {children}
      {showReplyForm && (
        <>
          <AddPost
            itemId={itemId}
            itemAuthorId={itemAuthorId}
            isEdit={isEdit}
            showReplyForm={showReplyForm}
            handleShowReplyForm={handleShowReplyForm}
          />
        </>
      )}
    </>
  )
}

export default CommentCard