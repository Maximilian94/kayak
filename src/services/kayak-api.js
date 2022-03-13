import fetchJsonp from 'fetch-jsonp';

export const getAirlinesData = async () => {
	try {
		const request = await fetchJsonp(
			'https://www.kayak.com/h/mobileapis/directory/airlines/homework',
			{
				jsonpCallback: 'jsonp',
			}
		);
		const response = await request.json();
		return response;
	} catch (error) {
		console.log('Erro', error);
		return { error: error };
	}
};
