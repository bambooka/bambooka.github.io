import React from 'react';
import Project from './Project'
import './index.css'

export default function ProjectsList(){
	return (
		<div class="project-list">
			<Project path="https://bambooka-todo-list.netlify.com" name="ToDo List"/>
			<Project path="https://recipe-application-bambooka.netlify.com" name="Recipe site"/>
			<Project path="https://tech-store-bambooka.netlify.com" name="Tech Store"/>
		</div>
	)
}