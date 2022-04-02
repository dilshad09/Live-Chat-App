import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../assets/loader.gif'
import { setAvatarRoute } from '../utils/ApiRoutes';



function SetAvatar() {
    const api = "https://api.multiavatar.com/45686525"
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState()

    
    const toasOptions = {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"dark"
      }
  return (
    <>
     <SetAvatarContainer>
        <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
        </div>
        <div className="avatars"></div>
         </SetAvatarContainer> 
         <ToastContainer/>
    </>
  )
}

const SetAvatarContainer = styled.div``
export default SetAvatar
