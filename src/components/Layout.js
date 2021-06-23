import React from 'react';
import BackgroundLines from './BackgroundLines';
import Header from './Header';

function Layout(props) {
	return (
		<div className='mi-wrapper'>
			<BackgroundLines />
			<Header />
			{props.children}
		</div>
	);
}

export default Layout;
