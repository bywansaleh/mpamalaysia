import { cn } from '@/lib/utils';

export default async function Instagram() {
  let posts;
  try {
    posts = await getInstagramPosts();
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    posts = { data: [] }; // Provide a default empty array if fetching fails
  }

  return (
    <div className='from-brand to-brand/50 relative z-100 bg-black bg-linear-to-br shadow-[0_0_100px_hsl(var(--brand)/40%)]'>
      <div className='relative p-6'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6'>
          {posts?.data?.slice(0, 6).map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.permalink}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        // styles.card,
        'group relative flex flex-col gap-4 overflow-hidden rounded-md bg-black text-white shadow-md drop-shadow-md'
      )}>
      <img
        src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
        alt={post.caption}
        className='aspect-square w-full object-cover transition-all duration-300 ease-in-out [mask:linear-gradient(to_bottom,black,rgba(0,0,0,0.3)_80%)] group-hover:scale-105 group-hover:opacity-60 group-hover:blur-sm'
      />
      <div className='absolute inset-0 flex flex-col justify-end gap-2 p-2'>
        <p className='text-2xs group-hover:blur-0 line-clamp-8 leading-tight! font-medium text-pretty opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100'>
          {post.caption}
        </p>
        <div className='text-2xs flex w-full flex-row-reverse items-center justify-between gap-1 font-semibold tracking-tighter'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='size-5'>
            <path
              fill='currentColor'
              d='M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12'
            />
          </svg>

          <span className='group-hover:blur-0 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100'>
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
              // timeStyle: 'short',
              timeZone: 'Asia/Kuala_Lumpur'
            }).format(new Date(post.timestamp))}
          </span>
        </div>
      </div>
    </a>
  );
}

interface Result {
  data: Post[];
  paging: Paging;
}

interface Post {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
  thumbnail_url?: string;
}

interface Paging {
  cursors: Cursors;
}

interface Cursors {
  before: string;
  after: string;
}

async function getInstagramPosts() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username&access_token=${process.env.IG_ACCESS_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: Result = await response.json();

    return result;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}
