import { cn } from '@/lib/utils'

export const revalidate = 3600 // Revalidate every hour

export default async function Instagram() {
  let posts
  let hasError = false

  try {
    posts = await getInstagramPosts()
  }
  catch (error) {
    console.error('Error fetching Instagram posts:', error)
    posts = { data: [] }
    hasError = true
  }

  // Don't render the section if there are no posts
  if (!posts?.data || posts.data.length === 0) {
    return null
  }

  return (
    <section className="relative z-10 overflow-hidden bg-black py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={`
              mb-4 font-heading text-4xl font-bold text-white
              md:text-5xl
            `}
          >
            Latest from Instagram
          </h2>
          <p className="text-lg text-white/70">
            Follow us
            {' '}
            <a
              href="https://www.instagram.com/mpa.my/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                font-semibold text-brand underline decoration-brand/30
                underline-offset-4 transition-colors
                hover:text-brand/80 hover:decoration-brand/60
              `}
            >
              @mpa.my
            </a>
            {' '}
            for the latest updates
          </p>
        </div>

        {/* Posts Grid */}
        <div className={`
          grid grid-cols-2 gap-4
          md:grid-cols-3 md:gap-6
          lg:grid-cols-6
        `}
        >
          {posts.data.slice(0, 6).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {hasError && (
          <p className="mt-6 text-center text-sm text-white/50">
            Some posts may not be available at the moment
          </p>
        )}
      </div>
    </section>
  )
}

function PostCard({ post }: { post: Post }) {
  const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url
  const caption = post.caption?.slice(0, 150) || 'View on Instagram'

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        `
          group relative flex aspect-square flex-col overflow-hidden rounded-lg
          bg-neutral-900 shadow-lg transition-all duration-300
          hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand/20
        `,
      )}
    >
      {/* Image */}
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={caption}
          loading="lazy"
          className={`
            h-full w-full object-cover transition-all duration-500 ease-out
            group-hover:scale-110
          `}
        />

        {/* Gradient Overlay */}
        <div
          className={`
            absolute inset-0 bg-linear-to-t from-black/90 via-black/50
            to-transparent opacity-60 transition-opacity duration-300
            group-hover:opacity-90
          `}
        />

        {/* Video Indicator */}
        {post.media_type === 'VIDEO' && (
          <div className="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-white drop-shadow-lg"
            >
              <path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div
        className={`
          absolute inset-0 flex flex-col justify-end p-3 transition-all
          duration-300
        `}
      >
        {/* Caption */}
        <p
          className={`
            mb-2 line-clamp-3 text-xs leading-snug font-medium text-white
            opacity-0 blur-sm transition-all duration-300
            group-hover:opacity-100 group-hover:blur-none
            md:text-sm
          `}
        >
          {caption}
        </p>

        {/* Footer */}
        <div
          className={`
            flex items-center justify-between gap-2 text-2xs text-white/80
          `}
        >
          <span
            className={`
              flex-1 opacity-0 blur-sm transition-all duration-300
              group-hover:opacity-100 group-hover:blur-none
            `}
          >
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
              timeZone: 'Asia/Kuala_Lumpur',
            }).format(new Date(post.timestamp))}
          </span>

          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-5 flex-shrink-0"
            fill="currentColor"
          >
            <path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Z" />
          </svg>
        </div>
      </div>
    </a>
  )
}

type Result = {
  data: Post[]
  paging: Paging
}

type Post = {
  id: string
  caption: string
  media_type: string
  media_url: string
  permalink: string
  timestamp: string
  username: string
  thumbnail_url?: string
}

type Paging = {
  cursors: Cursors
}

type Cursors = {
  before: string
  after: string
}

async function getInstagramPosts(): Promise<Result> {
  const accessToken = process.env.IG_ACCESS_TOKEN

  if (!accessToken) {
    console.error('IG_ACCESS_TOKEN is not configured')
    return { data: [], paging: { cursors: { before: '', after: '' } } }
  }

  try {
    const url = new URL('https://graph.instagram.com/me/media')
    url.searchParams.set('fields', 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username')
    url.searchParams.set('access_token', accessToken)
    url.searchParams.set('limit', '12') // Fetch 12 posts, display 6

    const response = await fetch(url.toString(), {
      next: {
        revalidate: 3600, // Cache for 1 hour
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Instagram API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      })

      // Check if token is expired or invalid
      if (response.status === 400 || response.status === 190) {
        console.error('Instagram access token may be expired. Please refresh the token.')
        console.error('Visit: /api/refresh-ig-token to refresh the token')
      }

      throw new Error(`Instagram API error: ${response.status}`)
    }

    const result: Result = await response.json()

    // Filter out posts without media URLs
    if (result.data) {
      result.data = result.data.filter(post => post.media_url || post.thumbnail_url)
    }

    return result
  }
  catch (error) {
    console.error('Error fetching Instagram posts:', error)
    throw error
  }
}
