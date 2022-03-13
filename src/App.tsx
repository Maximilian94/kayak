import { Container } from '@mui/material';
import React from 'react';
import Header from './components/Header';

// Pages
import Airlines from './pages/Airlines';

function App() {
	return (
		<div style={{ background: '#F9FAFB', minHeight: '100vh' }}>
			<Header />
			{/* Layout */}
			<Container>
				<Airlines />
			</Container>
		</div>
	);
}

export default App;
