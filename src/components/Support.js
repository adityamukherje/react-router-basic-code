import React from 'react'
import { useNavigate } from 'react-router-dom';

 const Support = () => {
    const navigate = useNavigate ();
    function clickHandler (){
        navigate("/labs");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
        this is a support page
    <br/>
    <button onClick={clickHandler}>move to labs page</button>
    <button onClick={backHandler} >go back</button>
</div>
  )
}
export default Support
