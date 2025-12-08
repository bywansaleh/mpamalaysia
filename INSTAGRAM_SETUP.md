# Instagram Integration Setup Guide (2025)

This guide explains how to set up the Instagram integration to display the latest posts from @mpa.my on your website using the current Instagram API.

## Important Update for 2025

⚠️ **The Instagram Basic Display API was deprecated on December 4, 2024.**

As of 2025, you must use either:
- **Instagram API with Instagram Login** (recommended - no Facebook Page required)
- **Instagram Graph API with Facebook Login** (requires Facebook Page)

This guide covers the **Instagram API with Instagram Login** method as it's simpler and doesn't require a Facebook Page.

## Overview

The website uses the **Instagram Graph API** to fetch and display the latest 6 posts from your Instagram account. The integration includes:
- Automatic caching (1 hour)
- Error handling with graceful fallbacks
- Support for both images and videos
- Hover animations and interactions

## Prerequisites

1. **Instagram Business or Creator Account** (required)
   - Personal accounts can no longer access the API
   - Convert your account in Instagram Settings → Account → Switch to Professional Account

2. **Facebook/Meta Developer Account** (free)
   - Sign up at [developers.facebook.com](https://developers.facebook.com/)

3. **Business Verification** (required)
   - Your app must be connected to a verified business
   - Complete Meta's [Business Verification](https://www.facebook.com/business/help/2058515294227817)

## Step-by-Step Setup

### Step 1: Create a Meta App

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Click **My Apps** → **Create App**
3. Select **Other** as the use case
4. Choose **Business** as the app type
5. Fill in the details:
   - **App Name**: "MPA Malaysia Website" (or your preferred name)
   - **App Contact Email**: Your email
   - **Business Account**: Connect or create one (required for verification)
6. Click **Create App**

### Step 2: Add Instagram Product

1. In your app dashboard, find **Add products to your app**
2. Locate **Instagram** product
3. Click **Set up**
4. **IMPORTANT**: Choose **API Setup with Instagram Login**
   - Do NOT choose "API Setup with Facebook Login"
   - This is the new method that doesn't require a Facebook Page

### Step 3: Generate Access Token

1. In the Instagram product settings, go to **API Setup with Instagram Login**
2. Click **Add an Instagram Account**
3. Log in with your Instagram Business/Creator account (@mpa.my)
4. Authorize the app to access your account
5. **Important**: Make sure your Instagram account is set to **Public**
6. Copy the **Access Token** that appears

The token will look something like:
```
IGQWRObVpPUU83eTBSYnVXQ3NaSDhFVmdtczNBd3g5...
```

### Step 4: Add Token to Environment Variables

1. Create or edit `.env.local` in your project root:

```env
IG_ACCESS_TOKEN=your_access_token_here
```

2. Restart your development server:

```bash
bun run dev
```

3. Visit http://localhost:2656 to see your Instagram posts!

## Token Management

### Token Expiration

Access tokens from the Instagram API with Instagram Login typically expire after **60 days**.

### Refresh Your Token

#### Option 1: Regenerate in Meta Dashboard (Recommended)

1. Go to your app in Meta for Developers
2. Navigate to **Instagram** → **API Setup with Instagram Login**
3. Find your connected Instagram account
4. Click **Generate Token** next to your account
5. Copy the new token
6. Update your `.env.local` file

#### Option 2: Use the Built-in Refresh API

Visit this URL while your app is running:

```
http://localhost:2656/api/refresh-ig-token
```

Or use cURL:

```bash
curl http://localhost:2656/api/refresh-ig-token
```

This endpoint will attempt to refresh your token using the Instagram Graph API.

#### Option 3: Manual Refresh via API

```bash
curl -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_TOKEN"
```

Response:
```json
{
  "access_token": "new_token_here",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

### Automated Token Refresh (Production)

For production deployment, set up a cron job to refresh the token every 30 days:

1. Use a service like [cron-job.org](https://cron-job.org) or [EasyCron](https://www.easycron.com/)
2. Schedule a GET request to: `https://yourdomain.com/api/refresh-ig-token`
3. Set frequency: Once every 30 days
4. Monitor the response and update environment variables if needed

For Vercel, you can use [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs) to automate this process.

## Production Deployment

### Environment Variables

Set your Instagram access token in your hosting platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add `IG_ACCESS_TOKEN` with your token value
3. Redeploy your application

**Netlify:**
1. Go to Site Settings → Build & Deploy → Environment
2. Add `IG_ACCESS_TOKEN` with your token value
3. Trigger a new deploy

**Other Platforms:**
Consult your hosting provider's documentation for setting environment variables.

### Security Notes

1. **Never commit** `.env.local` to version control
2. `.env.local` is already in `.gitignore` - keep it there
3. Only set tokens in environment variables, never hardcode them
4. Rotate tokens regularly (every 60 days minimum)

## Troubleshooting

### "Error validating application" (Code 190)

**Cause**: Token has expired or is invalid

**Solution**:
1. Generate a new token in Meta for Developers
2. Update `.env.local` with the new token
3. Restart your server

### "Invalid OAuth access token" (Code 400)

**Cause**: Token doesn't have the required permissions or account is not Business/Creator

**Solution**:
1. Verify your Instagram account is set to Business or Creator (not Personal)
2. Ensure your Instagram account is public
3. Regenerate the token with correct permissions
4. Make sure you selected "Instagram Login" not "Facebook Login"

### No Posts Showing

**Possible causes and solutions**:

1. **Token not set**: Check that `IG_ACCESS_TOKEN` exists in `.env.local`
2. **Token expired**: Regenerate a new token
3. **Account is private**: Make your Instagram account public
4. **No recent posts**: Ensure @mpa.my has public posts
5. **API errors**: Check browser console and server logs for detailed errors

The section will gracefully hide itself if no posts are available.

### "Personal accounts are not supported"

**Cause**: Your Instagram account is a personal account

**Solution**:
1. Open Instagram app/website
2. Go to Settings → Account
3. Select "Switch to Professional Account"
4. Choose either "Creator" or "Business"
5. Complete the setup
6. Regenerate your access token

### Rate Limiting

The Instagram API has rate limits:
- **200 calls per hour per user**
- The website caches posts for **1 hour** to stay within limits
- Monitor your API usage in Meta for Developers dashboard

## API Endpoints

### Fetch Media

```bash
GET https://graph.instagram.com/me/media
  ?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username
  &access_token={access-token}
  &limit=12
```

### Refresh Token

```bash
GET https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={access-token}
```

## Features

The Instagram section includes:

- **Responsive Grid**: 2 columns (mobile) → 3 (tablet) → 6 (desktop)
- **Media Types**: Supports both images and videos
- **Video Indicator**: Play icon overlay for video posts
- **Hover Effects**:
  - Image zoom and overlay on hover
  - Caption reveal with blur-to-clear animation
  - Timestamp display
- **Smart Caching**: 1-hour cache to minimize API calls
- **Error Handling**: Graceful degradation if API fails
- **Auto-hide**: Section doesn't display if no posts available

## Testing

### Local Testing

1. Set your `IG_ACCESS_TOKEN` in `.env.local`
2. Run `bun run dev`
3. Visit http://localhost:2656
4. Scroll to the Instagram section
5. Check browser console for any errors

### Verify API Connection

Test your token directly:

```bash
curl "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_TOKEN&limit=1"
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

## Additional Resources

- [Instagram API with Instagram Login Documentation](https://developers.facebook.com/docs/instagram-api/overview)
- [Meta Business Verification Guide](https://www.facebook.com/business/help/2058515294227817)
- [Instagram Account Types Guide](https://help.instagram.com/502981923235522)
- [Meta for Developers](https://developers.facebook.com/)

## Need Help?

If you encounter issues:

1. Check the server console for detailed error messages
2. Verify your Instagram account is Business/Creator and public
3. Ensure Business Verification is complete
4. Check that token hasn't expired (regenerate if needed)
5. Review Meta for Developers dashboard for app status

## Changes from Previous Version

**What Changed in 2025:**
- Instagram Basic Display API is deprecated (no longer works)
- Must use "Instagram API with Instagram Login" instead
- No longer requires a Facebook Page (simplified!)
- Still requires Business/Creator Instagram account
- Business Verification is now mandatory
- Token generation is simpler through Meta dashboard

**Migration**: If you had the old setup, just follow the new steps above to generate a fresh token using the new Instagram Login method.

---

**Last Updated**: December 2025

**Sources:**
- [How to get your Instagram Access Token – Bricks Academy](https://academy.bricksbuilder.io/article/instagram-access-token/)
- [Instagram API changes 2025](https://elfsight.com/blog/instagram-graph-api-changes/)
- [Instagram Basic Display API Deprecated](https://stackoverflow.com/questions/78977319/what-is-the-alternative-for-instagram-basic-display-api-since-its-deprecated)
