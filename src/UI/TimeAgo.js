import {parseISO, formatDistanceToNow} from 'date-fns'

import styles from './timeAgo.module.scss'

const TimeAgo = ({timeStamp}) => {
  let timeAgo = ''
  if(timeStamp) {
    const date = parseISO(timeStamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span className={styles.timeAgo} title={timeStamp}>
    &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo