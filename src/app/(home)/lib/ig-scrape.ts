import { load } from 'cheerio';

export type IGPost = {
	imageUrl?: string;
	caption?: string;
};

export async function getInstagramLatestPosts(username: string) {
	try {
		const url = `https://www.instagram.com/${username}/`;
		const html = await fetch(url).then((res) => res.text());
		const $ = load(html);

		const posts: IGPost[] = [];

		$('article').each((index, element) => {
			const post: IGPost = {
				imageUrl: $(element).find('img').attr('src'),
				caption: $(element).find('img').attr('alt'),
			};
			posts.push(post);
		});

		return posts;
	} catch (error) {
		console.error('Error scraping Instagram:', error);
		return [];
	}
}
