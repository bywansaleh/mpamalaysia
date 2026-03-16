import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.IG_ACCESS_TOKEN}`,
  )

  if (!response.ok) {
    throw new Error('Failed to refresh Instagram token')
  }

  const data = await response.json()

  return NextResponse.json(data)
}
