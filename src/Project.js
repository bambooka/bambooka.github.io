import React from 'react';
import './index.css'

export default function Project(props){
	return(
		<div class="project">
			<h1>{props.name}</h1>
			<a href={props.path}>Show project</a>
		</div>
	)
}