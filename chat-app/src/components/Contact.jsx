import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
function Contact({contacts, currentUser}) {
    const [currentUserName, setCurrentUserName] = useState()
    const [currentUserImage, setCurrentUserImage] = useState()
    const [currentSelected, setCurrentSelected] = useState()

    useEffect(()=>{
        if(currentUser){
            setCurrentUserImage(currentUser.avatarImage)
            setCurrentUserName(currentUser.username)
        }
    },[currentUser])
  return (
    <div>
      
    </div>
  )
}

export default Contact
