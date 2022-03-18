import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

// Components
import PageTitle from '../../components/PageTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getAirlinesData } from '../../services/kayak-api';
import AirlineCard from '../../components/AirlineCard';
import Pagination from '@mui/material/Pagination';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Types
import { AirlineData } from '../../types';
import { colors } from '../../style';

function Airlines() {
	const options = [
		{ name: 'Oneworld', id: 'OW' },
		{ name: 'Sky Team', id: 'ST' },
		{ name: 'Star Alliance', id: 'SA' },
	];
	const [airlinesData, setAirlinesData] = useState<AirlineData[]>([]);
	const [filteredAirlineData, setFilteredAirlineData] = useState<AirlineData[]>(
		[]
	);
	const [selectedAliances, setSelectedAliances] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [companyPerPage, setCompanyPerPage] = useState<number>(10);

	const pageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const filterAirlineDataByAliance = (aliances: any[]) => {
		console.log('Atualiza');
		if (aliances.length === 0) setFilteredAirlineData(airlinesData);
		else {
			const newList = airlinesData.filter((airlineData) =>
				aliances.includes(airlineData.alliance)
			);
			setFilteredAirlineData(newList);
		}
	};

	const handleAliances = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSelectedAliances = [...selectedAliances];
		if (e.target.checked) {
			newSelectedAliances.push(e.target.id);
			setSelectedAliances(newSelectedAliances);
		} else {
			setSelectedAliances(
				newSelectedAliances.filter((aliance) => aliance !== e.target.id)
			);
		}
	};

	const updateAirlinesData = async () => {
		const airlinesDataResponse = await getAirlinesData();
		setAirlinesData(airlinesDataResponse);
		setFilteredAirlineData(airlinesDataResponse);
	};

	const getCompaniesForThisPage = () => {
		const indexStart = (page - 1) * companyPerPage;
		const indexEnd = indexStart + companyPerPage;
		return filteredAirlineData.slice(indexStart, indexEnd);
	};

	useEffect(() => {
		filterAirlineDataByAliance(selectedAliances);
		setPage(1);
	}, [selectedAliances]);

	useEffect(() => {
		updateAirlinesData();
	}, []);
	return (
		<div>
			<PageTitle title='Airlines' />

			<Box style={{ height: 73 }} />

			<Typography style={{ fontSize: 16, fontWeight: 'bold' }}>
				Filter by Airlines
			</Typography>

			<Box style={{ height: 23 }} />

			<FormGroup row>
				{options.map((aliance) => (
					<FormControlLabel
						control={
							<Checkbox
								onChange={(e) => handleAliances(e)}
								name={aliance.name}
								id={aliance.id}
								style={{ fontSize: 50 }}
							/>
						}
						label={
							<Typography variant='body2' color='textSecondary'>
								{aliance.name}
							</Typography>
						}
					/>
				))}
				<FormControl>
					<InputLabel id='Companies per page'>Companies per page</InputLabel>
					<Select
						labelId='Companies per page'
						id='demo-simple-select'
						value={companyPerPage}
						label='Companies per page'
						onChange={(e) => setCompanyPerPage(+e.target.value)}
					>
						<MenuItem value={10}>Ten per page</MenuItem>
						<MenuItem value={20}>Twenty per page</MenuItem>
						<MenuItem value={30}>Thirty per page</MenuItem>
					</Select>
				</FormControl>
			</FormGroup>

			<Box style={{ height: 56 }} />

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
				}}
			>
				{getCompaniesForThisPage().map((airlineData) => (
					<AirlineCard AirlineData={airlineData} />
				))}
			</div>

			<div
				style={{
					bottom: '5px',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					position: 'fixed',
					background: colors.grey,
					padding: 5,
				}}
			>
				<Pagination
					count={
						Math.floor(filteredAirlineData.length / companyPerPage) === 0
							? 1
							: Math.floor(filteredAirlineData.length / companyPerPage)
					}
					page={page}
					onChange={pageChange}
					style={{ margin: 'auto' }}
				/>
			</div>
		</div>
	);
}

export default Airlines;
