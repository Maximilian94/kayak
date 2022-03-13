import { Typography } from '@mui/material';
import React from 'react';

interface AirlineData {
	name?: string;
	logoURL: string;
}

interface AirlineCardProps {
	AirlineData: AirlineData;
}

const AirlineCard: React.FC<AirlineCardProps> = ({ AirlineData }) => {
	return (
		<div style={{ width: 200 }}>
			<Typography>{AirlineData.name}</Typography>
			<img src={`${'https://www.kayak.com'}${AirlineData.logoURL}`} />
		</div>
	);
};

export default AirlineCard;
