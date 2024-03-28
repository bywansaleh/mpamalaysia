export async function GET(request: Request) {
	const url = `https://www.instagram.com/wesbos/`;
	const html = await fetch(url).then((res) => res.text());

	return Response.json(html);
}
