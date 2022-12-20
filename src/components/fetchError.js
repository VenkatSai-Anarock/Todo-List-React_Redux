
import React from 'react'

function FetchError({message,onRetry}) {
  return (
    <div>
        <p>Could not Fetch Todos. {message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
  )
}

export default FetchError