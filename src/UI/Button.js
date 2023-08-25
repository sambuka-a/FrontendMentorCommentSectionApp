import React from 'react'

import {ReactComponent as Del} from '../assets/icon-delete.svg'
import {ReactComponent as Edit} from '../assets/icon-edit.svg'

const Button = ({type, onDelete, onEdit}) => {
  return (
    <>
      {type === 'Edit' ? (
        <span
          onClick={onEdit}
        ><Edit/> {type}</span>
      ) : (
        <span
          onClick={onDelete}
        ><Del/> {type}</span>
      )}
    </>
  )
}

export default Button