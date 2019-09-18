import React from 'react';
import logo from './random002.jpg';
import blueDivider from './dividerBlue.png';
import pinkDivider from './dividerPink.png';
import jsLogo from './js.png';
import htmlLogo from './html.png';
import cssLogo from './css.png';
import reactLogo from './react.png';
import nodeLogo from './node.png';
import pythonLogo from './python.png';
import afLogo from './affinityDesigner.png';
import mayaLogo from './maya.png';
import cPlusPlusLogo from './cPlusPlus.png';
import gitHubLogo from './git.png';
import linkInLogo from './linkedInLogo.png';
import './App.css';

const SkillBar=()=>{
  return(
    <div>
      <img src={jsLogo} className="skill-icon"/>
      <img src={htmlLogo} className="skill-icon"/>
      <img src={cssLogo} className="skill-icon"/>
      <img src={reactLogo} className="skill-icon"/>
      <img src={nodeLogo} className="skill-icon"/>
      <img src={pythonLogo} className="skill-icon"/>
      <img src={afLogo} className="skill-icon"/>
      <img src={mayaLogo} className="skill-icon"/>
      <img src={cPlusPlusLogo} className="skill-icon"/>
    </div>
  )
}

const PDivider=()=>{
  return(
    <div>
      <img src={pinkDivider} className="Divider" alt="divider" />
    </div>
  )
}
const BDivider=()=>{
  return(
    <div>
      <img src={blueDivider} className="Divider" alt="divider" />
    </div>
  )
}

const SubHeaders=(props)=>{
  return(
    <div className="info-txt">
      <h2>{props.title}</h2>
    </div>
  )
}

const Info=(props)=>{
  return(
    <div className="info-txt">
      <SubHeaders title={props.title} />
      <p>{props.info}</p>
    </div>
  )
}

class App extends React.Component{
  state = {
    intro:"Hello world! My name is Geo Cook and welcome to my portfolio.",
    current:"I am currently taking the Master Course at CodeNation in Chester. Here I am learning to become a full stack developer.",
    skillXp:"At CodeNation I am learning JaveScript. So far I have learnt the fundamentals of front end development with html, css, react and more. Very soon I will be learning about back end developement. I have a BA(Hons) in Computer Visualisation and Animation from Bournemouth University. There I learnt C++ and python through scripting in the 3D software, Maya.",
    about:"Creative Coder with a love for digital art, VFX and all things animated. I am eager to learn as much as I can about how tech and art come together to create such amazing games, films, apps, websites and everything in between and behind the scenes. I am a work in progress but please feel free to look around or get in contact."
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="intro-div">
            <img src={logo} className="Maya-image" alt="3D-sphere-face" />
          </div>
          <div id="text">
            <Info info={this.state.intro} />
            <Info info={this.state.current} />
            <PDivider />
            <Info info={this.state.skillXp} title="Skills + Experience" />
            <SkillBar />
            <PDivider />
            <Info info={this.state.about} title="About Me" />
            <PDivider />
            <div>
              <SubHeaders title="Get in touch" />
              <img src={gitHubLogo} className="skill-icon"/>
              <img src={linkInLogo} className="skill-icon"/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
