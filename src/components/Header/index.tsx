import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { makeStyles } from '@material-ui/styles';

import Logo from '../../images/Logo.svg';
import { Box } from '@mui/system';

const useStyle = makeStyles({
	root: {
		boxShadow: '0 3px 5px 2px rgba(25, 32, 36, 0.04)',
		margin: '0',
		padding: '16px 19px',
		background: 'white',
	},
});

function Header() {
	const classes = useStyle();
	return (
		<Box className={classes.root}>
			<img src={Logo} />
		</Box>
	);
}

export default Header;
