import React from 'react'
import Github from '../images/github.png'

 function Topbar() {
  return (
    <div className="topbar">
    <a href="#"><img src={Github} alt="Logo" /></a>
    </div>
  )
}

export default Topbar