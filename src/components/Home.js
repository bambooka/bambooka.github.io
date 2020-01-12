import React from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Home extends React.Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src="../img/avatar.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Frontend Developer</h1>
                            <hr />
                            <p>HTML | CSS | Javascript | React | Git | React Native</p>
                            <div className="social-links">
                                {/* linkedin */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* github */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* free code camp */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                {/* youtube */}
                                <a href="https://google.com" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}