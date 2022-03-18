import React from 'react';

import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

interface PageTitleProps {
	title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
	return (
		<div>
			<Typography style={{ fontSize: 44, fontWeight: 100, color: '#000000' }}>
				{title}
			</Typography>
		</div>
	);
};

export default PageTitle;
