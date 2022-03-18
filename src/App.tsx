import { Container } from '@mui/material';
import React from 'react';
import Header from './components/Header';

// Pages
import Airlines from './pages/Airlines';

function App() {
	return (
		<div
			style={{
				background: '#F9FAFB',
				minHeight: '100vh',
				margin: 0,
				padding: 0,
				border: 0,
			}}
		>
			<Header />
			{/* Layout */}
			<div style={{ padding: '67px 94px' }}>
				<Airlines />
			</div>
		</div>
	);
}

export default App;
