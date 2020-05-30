import React from 'react'
import background from './img/header-bg.jpg'

export default function Header() {
	return(
		<header style={{
			height: 500,
			background: `url(${background}) no-repeat`,
			backgroundSize: 'cover',
			color: 'white',
			display: 'flex',
			flexFlow: 'row wrap',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: "200%",
			fontFamily: 'Tahoma',
			textTransform: 'uppercase',
			letterSpacing: '3px'
		}}>
			My projects
		</header>
	)
}
