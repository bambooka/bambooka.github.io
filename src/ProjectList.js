import React from 'react';
import Project from './Project'
import './index.css'
import todo from "./img/todo.png"
import recipe from "./img/recipe-site.png"
import tech from "./img/tech-store.png"

export default function ProjectsList(){
	return (
		<div class="project-list">
			<Project preview={todo} path="https://bambooka-todo-list.netlify.com" name="ToDo List"/>
			<Project preview={recipe} path="https://recipe-application-bambooka.netlify.com" name="Recipe site"/>
			<Project preview={tech} path="https://tech-store-bambooka.netlify.com" name="Tech Store"/>
		</div>
	)
}