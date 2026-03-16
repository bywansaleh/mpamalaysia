# Instagram Integration Setup Guide (2026)

Displays the 5 most recent posts from @mpa.my using the **Instagram API with Instagram Login** — the recommended method as of 2026 (no Facebook Page required).

---

## Requirements

- **Instagram Business or Creator account** (personal accounts are not supported)
- **Meta Developer account** — free at [developers.facebook.com](https://developers.facebook.com/)

---

## Step 1: Create a Meta App

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Click **My Apps → Create App**
3. Select **Other** as the use case → **Business** as the app type
4. Fill in the app name (e.g. "MPA Malaysia Website") and your email
5. Click **Create App**

---

## Step 2: Add the Instagram Product

1. In your app dashboard, under **Add products to your app**, find **Instagram**
2. Click **Set up**
3. Choose **API Setup with Instagram Login** (not "API Setup with Facebook Login")

---

## Step 3: Generate an Access Token

1. Go to **Instagram → API Setup with Instagram Login** in the left sidebar
2. Under **Generate access tokens**, click **Add Instagram Account**
3. Log in with the @mpa.my Instagram Business/Creator account
4. Authorize the app
5. Copy the **Access Token** that appears — it looks like:

   ```text
   IGQWRObVpPUU83eTBSYnVXQ3NaSDhFVmdtczNBd3g5...
   ```

> **Note:** Tokens expire after **60 days**. See [Token Refresh](#token-refresh) below.

---

## Step 4: Add Token to Environment Variables

Create or edit `.env.local` in the project root:

```env
IG_ACCESS_TOKEN=your_access_token_here
```

Then restart the dev server:

```bash
bun run dev
```

---

## Token Refresh

### Manual refresh (recommended every 30 days)

**Option A — Meta Dashboard:**

1. Go to your app → **Instagram → API Setup with Instagram Login**
2. Find your connected account and click **Generate Token**
3. Copy the new token and update `.env.local`

**Option B — API endpoint (while app is running):**

```bash
curl http://localhost:2656/api/refresh-ig-token
```

**Option C — Direct API call:**

```bash
curl "https://graph.instagram.com/v22.0/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_TOKEN"
```

Response:
```json
{
  "access_token": "new_token_here",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

### Automated refresh (production)

Use [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs) to call `/api/refresh-ig-token` every 30 days automatically.

---

## Production Deployment

Set `IG_ACCESS_TOKEN` as an environment variable in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment

Never commit `.env.local` to version control — it's already in `.gitignore`.

---

## 2026 API Notes

| Topic | Detail |
| --- | --- |
| API endpoint | `https://graph.instagram.com/v22.0/me/media` |
| Fields used | `id, caption, media_type, media_url, thumbnail_url, permalink, timestamp` |
| Removed fields (Jan 21, 2026) | `filter_name`, `location`, `latitude`, `longitude` |
| Token lifetime | 60 days (long-lived) |
| Rate limit | 200 calls/hour per user |
| Cache | Responses cached for 1 hour via Next.js fetch |
| Supported media types | `IMAGE`, `VIDEO`, `CAROUSEL_ALBUM` |

---

## Troubleshooting

| Error | Cause | Fix |
| --- | --- | --- |
| Code 190 / "Error validating application" | Token expired or invalid | Generate a new token in Meta dashboard |
| Code 400 / "Invalid OAuth access token" | Wrong permissions or personal account | Switch to Business/Creator account; re-generate token |
| No posts shown | Token missing, expired, or account is private | Check `IG_ACCESS_TOKEN` in `.env.local`; ensure account is public |
| "Personal accounts are not supported" | Account is personal type | Settings → Account → Switch to Professional Account |

---

## Verify your token

```bash
curl "https://graph.instagram.com/v22.0/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_TOKEN&limit=1"
```

Expected response:
```json
{
  "data": [
    {
      "id": "123456789",
      "caption": "Post caption...",
      "media_url": "https://...",
      "permalink": "https://www.instagram.com/p/..."
    }
  ]
}
```

---

**Last updated:** March 2026
