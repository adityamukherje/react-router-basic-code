import React from 'react'
import { useNavigate } from 'react-router-dom'


 const Labs = () => {
    const navigate = useNavigate ();
    function clickHandler (){
        navigate("/about");
    }
  return (
    <div>
        This is labs page
        <br/>
        <button onClick={clickHandler} >move to about page</button>
    </div>
  )
}
export default Labs
