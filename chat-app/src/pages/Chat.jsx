import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Contact from '../components/Contact'
import { allUsersRoute } from '../utils/ApiRoutes'
function Chat() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState()
  useEffect( () => {
    if (!JSON.parse(localStorage.getItem("chat-app-user"))){
      navigate("/login");
    }else{
      setCurrentUser(JSON.parse(localStorage.getItem("chat-app-user")))
    }
  }, []);

  useEffect(()=>{
    async function fetchData(){
      if(currentUser){
        if(currentUser.isAvatarImageSet){
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`)
          setContacts(data.data)
        }else{
          navigate("/avatar")
        }
      }
    }
    fetchData()
  }, [currentUser])
  return (
    <Container>
      <div className="container">
        <Contact contacts={contacts} currentUser={currentUser}/>
      </div>
    </Container>
  )
}
const Container = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 background-color: #131324;
 .container{
   width: 85vw;
   height: 85vh;
   background-color: #00000076;
   display: grid;
   grid-template-columns: 25% 75%;
   @media screen and (min-width:720px) and (max-width:1080px){
        grid-template-columns : 35% 65%;
   }
 }
`
export default Chat
