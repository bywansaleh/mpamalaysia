export async function GET() {
	const result = await fetch(
		`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username&access_token=${process.env.IG_ACCESS_TOKEN}`
	).then((res) => res.json());

	return Response.json(result);
}
