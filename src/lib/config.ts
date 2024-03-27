export const baseUrl =
	process.env.NODE_ENV === 'production'
		? 'https://staging.mpamalaysia.com'
		: 'http://localhost:2656';
