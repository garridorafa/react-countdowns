import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function RemoveTimeoutButton({ onClick }) {
  return (
    <button className="btn-remove" onClick={handleRemove}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  )

  function handleRemove() {
    window.confirm('Do you want to remove this timeout?') && onClick()
  }
}
