export const getAirlinesData = async () => {
	try {
		const request = await fetch(
			'kayak.com/h/mobileapis/directory/airlines/homework',
			{ param: 'jsonp' }
		);
		// console.log('request', request);
		const response = await request.json();
		console.log('response', response);
	} catch (error) {
		console.log('Erro', error);
	}
};
