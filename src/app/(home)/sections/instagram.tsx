import styles from './styles.module.css'
import { RevealFade } from '@/components/reveal-fade'
import { cn } from '@/lib/utils'

const POSTS_LIMIT = 6
const IG_API_VERSION = 'v22.0'
const IG_FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'

export default async function Instagram() {
  let posts: Post[] = []

  try {
    posts = await getInstagramPosts()
  }
  catch (error) {
    console.error('Instagram fetch error:', error)
  }

  if (posts.length === 0)
    return null

  return (
    <section className="relative z-10 overflow-hidden py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <RevealFade>
            <h2 className={styles.section_header}>
              <span>Latest from Instagram</span>
            </h2>
          </RevealFade>

          <p className="
            -mt-6 text-2xl leading-[1.1]! font-light tracking-tighter
            text-pretty
          "
          >
            Follow us
            {' '}
            <a
              href="https://www.instagram.com/mpa.my/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                `
                  font-semibold text-brand underline decoration-brand/30
                  underline-offset-4
                `,
                `
                  transition-colors
                  hover:text-brand/80 hover:decoration-brand/60
                `,
              )}
            >
              @mpa.my
            </a>
            {' '}
            for the latest updates
          </p>
        </div>

        {/* Posts Grid: 2 cols → 3 cols → 6 cols */}
        <div className="
          grid grid-cols-2 gap-3
          md:grid-cols-3
          lg:grid-cols-6
        "
        >
          {posts.slice(0, POSTS_LIMIT).map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
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
          group relative flex aspect-3/4 w-full overflow-hidden rounded-sm
          bg-neutral-900 shadow-lg
        `,
        `
          transition-all duration-300
          hover:scale-[1.01] hover:shadow-2xl hover:shadow-brand/20
        `,
      )}
    >
      {/* Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={caption}
          loading="lazy"
          className="
            absolute inset-0 size-full object-cover transition-transform
            duration-500 ease-out
            group-hover:scale-105
          "
        />
      )}

      {/* Gradient overlay */}
      <div className="
        absolute inset-0 bg-linear-to-t from-black/90 via-black/30
        to-transparent opacity-70 transition-opacity duration-300
        group-hover:opacity-95
      "
      />

      {/* Media type badge */}
      {post.media_type !== 'IMAGE' && (
        <div className="absolute top-3 right-3 z-10">
          {post.media_type === 'VIDEO' && <VideoIcon />}
          {post.media_type === 'CAROUSEL_ALBUM' && <CarouselIcon />}
        </div>
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
        <p
          className={cn(
            'mb-2 leading-snug font-medium text-white',
            `
              opacity-0 blur-sm transition-all duration-300
              group-hover:opacity-100 group-hover:blur-none
            `,
            'line-clamp-3 text-xs',
          )}
        >
          {caption}
        </p>

        <div className="
          flex items-center justify-between gap-2 text-xs text-white/80
        "
        >
          <span className="
            opacity-0 blur-sm transition-all duration-300
            group-hover:opacity-100 group-hover:blur-none
          "
          >
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
              timeZone: 'Asia/Kuala_Lumpur',
            }).format(new Date(post.timestamp))}
          </span>
          <InstagramIcon />
        </div>
      </div>
    </a>
  )
}

function VideoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 text-white drop-shadow-lg"
    >
      <path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
    </svg>
  )
}

function CarouselIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5 text-white drop-shadow-lg"
    >
      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="size-5 shrink-0"
      fill="currentColor"
    >
      <path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Z" />
    </svg>
  )
}

type Post = {
  id: string
  caption: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  timestamp: string
  thumbnail_url?: string
}

type InstagramResponse = {
  data: Post[]
}

async function getInstagramPosts(): Promise<Post[]> {
  const accessToken = process.env.IG_ACCESS_TOKEN

  if (!accessToken) {
    console.error('IG_ACCESS_TOKEN is not configured')
    return []
  }

  const url = new URL(`https://graph.instagram.com/${IG_API_VERSION}/me/media`)
  url.searchParams.set('fields', IG_FIELDS)
  url.searchParams.set('access_token', accessToken)
  url.searchParams.set('limit', '6')

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    console.error('Instagram API error:', { status: response.status, err })
    throw new Error(`Instagram API ${response.status}`)
  }

  const result: InstagramResponse = await response.json()

  return (result.data ?? []).filter(p => p.media_url || p.thumbnail_url)
}
