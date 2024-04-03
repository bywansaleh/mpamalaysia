export const baseUrl =
	process.env.NODE_ENV === 'production'
		? 'https://mpamalaysia.com'
		: 'http://localhost:2656';

export const siteTitle = 'Music Publishers Association Malaysia';
export const siteDescription =
	'Music Publishers Association of Malaysia safeguards the rights and promotes the works of music publishers in the country.';

export const imageLoader = (src) => {
	return process.env.NODE_ENV === 'production'
		? `https://images.weserv.nl/?url=${baseUrl}${src}`
		: src;
};
