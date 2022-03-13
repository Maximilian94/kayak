import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Components
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getAirlinesData } from '../../services/kayak-api';

function Airlines() {
	const options = ['Oneworld', 'Sky Team', 'Star Alliance'];
	const [airlinesData, setAirlinesData] = useState([]);

	useEffect(() => {
		getAirlinesData();
	}, []);
	return (
		<div>
			<PageTitle title='Airlines' />
			<div>
				<Typography>Filter Airlines</Typography>
				<FormGroup row>
					{options.map((name) => (
						<FormControlLabel control={<Checkbox />} label={name} />
					))}
				</FormGroup>
			</div>
			<div>Options</div>
		</div>
	);
}

export default Airlines;
