import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const response = await fetch(
		`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.IG_ACCESS_TOKEN}`
	);

	if (!response.ok) {
		throw new Error('Failed to refresh Instagram token');
	}

	const data = await response.json();

	return NextResponse.json({ message: data });
}
