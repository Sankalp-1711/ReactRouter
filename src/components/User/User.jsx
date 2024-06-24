import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-600 text-white text-3xl p-4'>User: {userid} </div>
  )
}

export default User
//Humne yha use params use krke ek custom hook bnalia
//useParams is a custom hook provided by the react-router-dom library in React. It allows you to access the parameters of the current URL
// jo url m aaega wo display ho jaega