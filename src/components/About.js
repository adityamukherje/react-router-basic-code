import React from 'react'
import { useNavigate } from 'react-router-dom'

 const About = () => {
    const navigate = useNavigate()
    function clickHandler(){
        navigate("/support")
    }
  return (
    <div>
        this is a about page
        <br/>
        <button onClick={clickHandler}>move to support page</button>
    </div>
  )
}
export default About
