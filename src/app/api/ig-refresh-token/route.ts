export const runtime = 'edge';

export async function GET() {
	const result = await fetch(
		`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.IG_ACCESS_TOKEN}`
	).then((res) => res.text());

	return Response.json(result);
}
