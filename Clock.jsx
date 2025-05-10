import React from 'react'

function Clock() {

    const time = ()=>{
  
        let d = new Date();
      
      document.getElementById("time").innerText= d.getHours()+":"+d.getMinutes()+":"+ d.getSeconds();}
      
      setInterval(time,1000)

      return(
        <>
        <span id="time">-:--:--</span>
        </>
      )

}
      
export default Clock
