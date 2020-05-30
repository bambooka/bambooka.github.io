import React from 'react';
import './index.css'

export default function Project(props){
	return(
		<div style={{
			width: "25%",
			height: '400px',
			display: 'flex',
			flexFlow: 'column wrap',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: 'lightgrey'
		}}>
			<img src={props.preview} style={{
				width: 200,
				height: 200
			}}/>
			<h1>{props.name}</h1>
			<a href={props.path}>Show project</a>
		</div>
	)
}