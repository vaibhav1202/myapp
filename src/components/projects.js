import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
            <CardTitle style={{color: 'black', height: '50px'}} >Portfolio</CardTitle>
            <CardText>
             Well, this portfolio is made in react, you can find the code sample in my GitHub repository in the button given below.</CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/vaibhav1202/myportfolio/tree/master/myportfolio">GitHub</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Titanic API</CardTitle>
          <CardText>
          Made REST API using django of a dataset “Titanic disaster” from kaggle in which we have to predict whether the person is alive or not after the Titanic disaster.
        </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/titanic">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Twitter Sentiment Analysis</CardTitle>
          <CardText>
          Made REST API using django of a dataset in which we have to predict whether the tweet is hated or liked        </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/twitter_sentiment">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Other ML Notebooks</CardTitle>
          <CardText>
          Some other jupyter Notebooks of Machine Learning.
            </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/MachineLearningNotebooks">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Object Detector</CardTitle>
          <CardText>
          Extracts object's image and maintains an excel sheet for the same.
          </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/object_detector">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Vehicle Classifier</CardTitle>
          <CardText>
            Made REST API to classify between bike/scooter, cycle and cars.
        </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/VehicleClassification">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Other DL Notebooks</CardTitle>
          <CardText>
          Some other jupyter Notebooks of Deep Learning.
            </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/DeepLearning">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >Apnamovies</CardTitle>
          <CardText>
          Made a website and it's REST API using python and Django of movie reviews and list of movies released till now.
          </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/apnamovies">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
          <CardTitle style={{color: 'black', height: '50px'}} >OLXclone</CardTitle>
          <CardText>
          Made a website using python and Django where user can list it’s used item and the buyer can contact him via mail.
            </CardText>
        <CardActions border>
            <Button colored><a href="https://github.com/vaibhav1202/VehicleClassification">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
       
        </div>
      )
    }
    else if(this.state.activeTab === 4) {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
              <CardTitle style={{color: 'black', height: '50px'}} >Movie Recommendation</CardTitle>
              <CardText>
                Made REST API which recommends the user which movie they should watch on the basis of movies he/she likes.
              </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/vaibhav1202/MovieRecommendationSystem">GitHub</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450',  margin:'auto'}}>
              <CardTitle style={{color: 'black', height: '50px'}} >Java Projects</CardTitle>
              <CardText>
              In this, the admin can create, read, update and delete the menu of the hotel and the members of the gym. Both are different projects.
                </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/vaibhav1202/javaprojects">GitHub</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
           
            </div>   )
      }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>ML</Tab>
          <Tab>DL</Tab>
          <Tab>Django</Tab>
          <Tab>Others</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
