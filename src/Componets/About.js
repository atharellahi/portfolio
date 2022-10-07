import React from "react";
import avatar from './Images/avatar.jpg'

const About = () => {
  return (<React.Fragment>
    <div id="about">
      <div id="ava">
        <img id='avatar' src={avatar}></img>
      </div>
      <div id="detail">

        A Creator when it comes to mind<br></br>
        A Gamer at heart<br></br>
        Born a Maker<br></br>

        I'm Athar Ellahi , thanks for visiting my website
      </div>
    </div>
  </React.Fragment>
  )
}

export default About; 