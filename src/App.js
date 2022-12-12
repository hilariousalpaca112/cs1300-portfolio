import './App.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function App() {


  return (
    <div className="App">
      <div className="about-container">
        <div className="img">
        <img src={require("./images/alpaca.png") } class="my-image"></img>
        </div>
      <div className="App-header">     
        <p>
          Hello, I'm hilariousalpaca112!
        </p>
        <p className="about-text">
          Currently at <span className="brown">Brown University</span> pursuing a Masters in Computer Science. Previously, at <span className="nevada">University of Nevada</span>, I graduated with a 
          degree in Computer Science & Engineering. 
        </p>
        <p className="about-text">
          I am currently an intern for MOLE, an EV charging startup based out of the United Kingdom. 
        </p>
        <p className="about-text">
          When I am not working or studying, you can find me on the tennis courts, cooking something delicious in the kitchen, or traveling to a new place!

        </p>
      </div>
      </div>
<div className="project-header">
      <span className="arrow-right">&#8595;</span>
      <p>Projects</p>
      <span className="arrow-left">&#8595;</span>
</div>
<div className="project-container">
<a href="https://hilariousalpaca112.github.io/personas/">
  <div className="project-item">

    <div className="project-description">
        <p className="project-title"><b>Personas & Storyboarding</b></p>
         <p className="about-text">
        In this project, I observed users of the New York City MetroCard machines. Based on these observations and a brief interview with some users,
        I designed personas and a storyboard to describe what the user experience is for the MetroCard machines.
        </p>
        </div>
        <img src={require("./images/personas.png") } alt="personas image">
        </img>
        </div>
    </a>

    <a href="https://hilariousalpaca112.github.io/responsive-redesign/">
  <div className="project-item">
  <img src={require("./images/redesign.png") } alt="responsive redesign image">
        </img>
    <div className="project-description">
        <p className="project-title"><b>Responsive Redesign</b></p>
         <p className="about-text">
         For this project, I redesigned a website interface with usability and accessibility principles in mind. Additionally, the redesigned site is 
         responsive, so play around with different screen sizes to see how it looks on other devices!
        </p>
        </div>

        </div>
    </a>

    <a href="https://coldturkey888.github.io/cs1300-iterative-design/">
  <div className="project-item">
    <div className="project-description">
        <p className="project-title"><b>Iterative Design</b></p>
         <p className="about-text">
         As part of a <b>group project</b>, I helped to design an interface for Radius, a grocery delivery service
                based out of Jakarta, Indonesia. I gained valuable skills with prototyping and incorporating feedback from critiques!
        </p>
        </div>
        <img src={require("./images/iterative-design.png") } alt="iterative design image">
        </img>
        </div>
    </a>


    <a href="https://hilariousalpaca112.github.io/development-page/">
  <div className="project-item">
  <img src={require("./images/development.png") } alt="development image">
        </img>
    <div className="project-description">
        <p className="project-title"><b>Development</b></p>
         <p className="about-text">
         I used React for this project to create a simple online wine shop. It was a great way to learn more about React as well as good
         design practices.
        </p>
        </div>

        </div>
    </a>
        </div>
    </div>
  );
}

export default App;
