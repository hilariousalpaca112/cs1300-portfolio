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
          Hi! I'm hilariousalpaca112!
        </p>
        <p className="about-text">
          I am a Masters in Computer Science student at Brown University specializing in Design. I  was previously at the University of Nevada, Reno where
          I graduated with an Honors Baccalaureate Degree in Computer Science & Engineering. 
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
          <p>Projects I've Worked On</p>
        </div>
        <div className="project-container">
        <Row xs={1} md={2} className="g-4">    
      
          <Col>
          <Card

          border="secondary"
          className="card-item">
          <Card.Img variant="top" className="project-img"src={require("./images/personas.png") }/>
            <Card.Body>
              <Card.Title>Personas & Storyboarding</Card.Title>
              <Card.Text>
                In this project, I observed users of the New York City MetroCard machines. Based on these observations and a brief interview with some users,
                I designed personas and a storyboard to describe what the user experience is for the MetroCard machines.
              </Card.Text>
              <a href="https://hilariousalpaca112.github.io/personas/">
              <Button 
              variant="secondary">See Project</Button>
              </a>
            </Card.Body>
          </Card>
          </Col>


          <Col>
          <Card
          border="secondary"
          className="card-item">
          <Card.Img variant="top" className="project-img" src={require("./images/redesign.png") }/>
            <Card.Body>
              <Card.Title>Responsive Redesign</Card.Title>
              <Card.Text>
                For this project, I redesigned a website interface with usability and accessibility principles in mind. Additionally, the redesigned site is 
                responsive, so play around with different screen sizes to see how it looks on other devices!
              </Card.Text>
              <a href="https://hilariousalpaca112.github.io/responsive-redesign/">
              <Button variant="secondary">See Project</Button>
              </a>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card 
          border="secondary"
          className="card-item">
          <Card.Img variant="top" className="project-img" src={require("./images/iterative-design.png") }/>
            <Card.Body>
              <Card.Title>Iterative Design</Card.Title>
              <Card.Text>
                As part of a <b>group project</b>, I helped to design an interface for Radius, a grocery delivery service
                based out of Jakarta, Indonesia. I gained valuable skills with prototyping and incorporating feedback from critiques!
              </Card.Text>
              <a href="https://coldturkey888.github.io/cs1300-iterative-design/">
              <Button variant="secondary">See Project</Button>
              </a>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card 
          border="secondary"
          className="card-item">
          <Card.Img variant="top" className="project-img" src={require("./images/development.png") }/>
            <Card.Body>
              <Card.Title>Development</Card.Title>
              <Card.Text>
                I used React for this project to create a simple online wine shop. It was a great way to learn more about React as well as good
                design practices.
                
              </Card.Text>
              <a href="https://hilariousalpaca112.github.io/development-page/">
              <Button variant="secondary">See Project</Button>
              </a>
            </Card.Body>
          </Card> 
          </Col>     
        </Row>
        </div>
    </div>
  );
}

export default App;
