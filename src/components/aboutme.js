import React, { Component } from 'react';
import { Grid,  Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="contact-body">
      <Grid className="aboutme-grid">
          <div col={5}>
            <h2>Vaibhav Agrawal</h2>
           <img
              src={require("./myphoto.jpg")}
              alt="avatar"
              style={{height: '200px',  borderRadius: '10%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', fontSize:'16px', fontFamily:"OpenSans", color: "#88879b"}}>
             Hello there, I'm a full stack web developer and a machine learning engineer.  I started programming 2 years ago. My goal is to apply my knowledge and skills for creative UI which gives a intutive and dynamic user experience and to develop the predictive models which helps in providing data-driven, action-oriented solutions to challenging business problems.
             </p>
          </div>  
          <div col={7}>
            <h2 style={{color:"#9694aa"}}> What I build</h2>
            <Card  style={{minWidth: '450',  margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px', paddingLeft:'2em'}} >Fast and dynamic UI/UX</CardTitle>
            <CardText>
              I do not only build a dynamic website which gives it life but I make it fast so the page does not lag, giving the user the best experience.
            </CardText>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card style={{minWidth: '450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px', paddingLeft:'2em'}} >Responsive and Intutive</CardTitle>
            <CardText>
            My layouts can run in any device and the strong preference is given to UI/UX to make it easy to use.
            </CardText>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card style={{minWidth: '450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px', paddingLeft:'3.3em'}} >Predictive modelling</CardTitle>
            <CardText>
              I make predictive models which helps in predicting outcomes based on a given data with the help of machine learning and deep learning, giving the app intelligence.
            </CardText>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card style={{minWidth: '450', margin:'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px', paddingLeft:'3.8em'}} >And much more..</CardTitle>
            <CardText>
              I also work on image processing and image recognition, desktop applications, REST API's, etc. <br/> Learning mobile app development too.
            </CardText>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
        </Grid>
      </div>
    )
  }
}

export default About;
