import React from 'react'
import {Tabs, Grid, Tab, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText} from "react-mdl";

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(http://www.position-absolute.com/http://www.position-absolute.com/wp-content/uploads/2016/01/react.jpg) center / cover'
                    }}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>react native</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {
                    this.setState({activeTab: tabId})
                }} ripple>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Grid>
                </section>
            </div>
        )
    }
}