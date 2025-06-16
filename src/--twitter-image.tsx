import { siteDescription, siteTitle } from '@/lib/config';
import generateOpenGraph from '@/lib/generate-opengraph';

export const runtime = 'edge';

export const alt = `${siteTitle} / ${siteDescription}`;
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function OG() {
  return generateOpenGraph({
    title: siteDescription
  });
}
