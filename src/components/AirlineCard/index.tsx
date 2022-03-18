import { Box, Link, Typography } from '@mui/material';
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { colors } from '../../style/index';

// Types
import { AirlineData, AlianceCode } from '../../types';

const useStyles = makeStyles({
	card: {
		border: '1px solid white',
		width: 300,
		height: 240,
		borderRadius: 8,
		background: 'white',
		margin: 8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow:
			'0 -1px 4px 0 rgba(25, 32, 36, 0.04), 0 3px 6px 0 rgba(25, 32, 36, 0.16)',
		'&:hover': {
			border: '1px solid black',
			cursor: 'pointer',
		},
	},
	image: { width: 32, height: 32 },
	boldText: { fontWeight: 'bold', color: colors.black },
	cardTitle: {
		color: colors.black,
		fontWeight: 'bold',
		fontSize: 16,
	},
});

interface AirlineCardProps {
	AirlineData: AirlineData;
}

const AirlineCard: React.FC<AirlineCardProps> = ({ AirlineData }) => {
	const styles = useStyles();
	const [showMoreData, setShowMoreData] = useState(false);

	const getAlianceName = (allianceCode: AlianceCode) => {
		if (allianceCode === 'OW') return 'Oneworld';
		if (allianceCode === 'ST') return 'Sky Team';
		if (allianceCode === 'SA') return 'Star Alliance';
		return 'Without alliance';
	};

	const formatSiteString = (url: string) => {
		return url
			.replace(/^https?:\/\//, '')
			.replace('www.', '')
			.replace('/', '');
	};

	return (
		<div
			className={styles.card}
			onMouseEnter={() => setShowMoreData(true)}
			onMouseLeave={() => {
				setShowMoreData(false);
			}}
		>
			<img
				src={`${'https://www.kayak.com'}${AirlineData.logoURL}`}
				className={styles.image}
			/>
			<div style={{ maxWidth: '60%', marginLeft: 18, wordWrap: 'break-word' }}>
				{!showMoreData && (
					<Typography
						className={styles.cardTitle}
						style={{ fontWeight: 'bold' }}
					>
						{AirlineData.name}
					</Typography>
				)}

				{showMoreData && (
					<Box style={{ fontSize: 14 }}>
						<Typography
							className={styles.cardTitle}
							style={{ fontWeight: 'bold' }}
						>
							{AirlineData.name}
						</Typography>
						<Typography>{getAlianceName(AirlineData.alliance)}</Typography>
						<Typography>{AirlineData.phone}</Typography>
						<Link href={AirlineData.site}>
							<Typography style={{ color: '#5a6872' }}>
								{formatSiteString(AirlineData.site)}
							</Typography>
						</Link>
					</Box>
				)}
			</div>
		</div>
	);
};

export default AirlineCard;
