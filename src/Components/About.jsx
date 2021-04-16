import React from 'react';
import aboutimage from '../images/about.png'

export default function About() {
  return (
    <div id='about'>
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Aspernatur iusto, commodi earum quas animi 
          rerum facilis nisi? Velit quas laudantium, 
          facere harum blanditiis eaque placeat?
        </p>
        <button >Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt=""/>
      </div>
    </div>
  )
}
