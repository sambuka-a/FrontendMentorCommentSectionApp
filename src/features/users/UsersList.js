import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser } from '../users/usersSlice'

import styles from './usersList.module.scss'

import { selectAllUsers } from '../users/usersSlice'


const UsersList = () => {
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const dispatch = useDispatch()

  const onAuthorChange = e => setUserId(prevState => e.target.value)

  const handleActiveUser = () => {
    dispatch(setActiveUser(userId))
  }

  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.username}
    </option>
  ))

  return (
    <section className={styles.userList}>
      <form>
        <label htmlFor='postAuthor'>Author</label>
        <select id='postAuthor' value={userId} onChange={onAuthorChange}>
          <option value=''></option>
          {userOptions}
        </select>
        <button 
          type='button'
          onClick={handleActiveUser}
        >
          Set User
        </button>
      </form>
    </section>
  )
}

export default UsersList