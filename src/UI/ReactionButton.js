import { useDispatch } from "react-redux";
import { addScore } from "../features/posts/postsSlice";

import styles from './reactionButton.module.scss'

import { ReactComponent as Plus } from '../assets/icon-plus.svg'
import { ReactComponent as Minus } from '../assets/icon-minus.svg'

const ReactionButton = ({item}) => {
  const dispatch = useDispatch()

  const {id, score} = item

  const rateHandler = (rate) => {
      dispatch(addScore({itemId : id, rate})
    )
  }

  return (
    <div className={styles.scoreButtons}>
      <span
        onClick={() => rateHandler('up')}
      >
        <Plus />
      </span>
      <span>{score}</span>
      <span
        className={styles.minusButton}
        onClick={() => rateHandler('down')}
      >
        <Minus/>
      </span>
    </div>
  )
}

export default ReactionButton