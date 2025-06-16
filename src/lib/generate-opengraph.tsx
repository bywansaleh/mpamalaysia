import { ImageResponse } from 'next/og';
import { ImageResponseOptions } from 'next/server';

import { bgLight } from '@/styles/colors';

import { baseUrl } from './config';

const loadFont = async (url: URL) => fetch(new URL(url, import.meta.url)).then((res) => res.arrayBuffer());

export default async function generateOpenGraph({
  title,
  width = 1200,
  height = 675
}: {
  title: string;
  width?: number;
  height?: number;
}) {
  try {
    const options = {
      width,
      height,
      fonts: [
        {
          name: 'Montserrat',
          data: await loadFont(new URL('@/assets/fonts/Montserrat-Black.ttf', import.meta.url)),
          style: 'normal',
          weight: 400
        },
        {
          name: 'Inter',
          data: await loadFont(new URL('@/assets/fonts/InterTight-Medium.ttf', import.meta.url)),
          style: 'normal',
          weight: 400
        }
      ],
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public s-max-age=1, stale-while-revalidate=600'
      }
    } as ImageResponseOptions;

    const output = (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '3rem',
          fontFamily: 'Inter',
          color: '#000',
          background: `hsl(${bgLight})`
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            // width: width / 2,
            height,
            padding: '3rem'
          }}>
          <div
            style={{
              display: 'flex',
              marginTop: '-3rem',
              marginBottom: 'auto',
              fontSize: '0.5em',
              fontWeight: 800,
              lineHeight: 1,
              whiteSpace: 'pre-wrap',
              letterSpacing: '-0.04em',
              // opacity: 0.6,
              fontFamily: 'Montserrat',
              width: '100%',
              textTransform: 'uppercase'
            }}>
            <div
              style={{
                padding: '0.8rem 1rem',
                borderRadius: '0 0 1rem 1rem',
                background: '#000',
                paddingTop: '4rem',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4em'
              }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 676 314'
                width='9rem'
                height='4rem'
                fill='currentColor'
                // className={cn('fill-current', className)}
                // {...props}
              >
                <path d='M674.811 289.443H0v24.172h674.811v-24.172Zm0-47.979H0v24.172h674.811v-24.172Zm0-47.96H0v24.172h674.811v-24.172Zm.236-48.169H338.479v24.172h336.568v-24.172Zm-.047-49.1H338.438v24.179H675v-24.18Zm0-47.98H338.438v24.172H675V48.255Zm0-47.973H338.438v24.179H675V.282ZM210.775 37.337l5.819 34.037 20.014-28.136-9.518 33.193 30.234-16.67-22.971 25.772 34.466-1.89-31.874 13.247 31.874 13.254-34.466-1.897 22.971 25.779-30.234-16.671 9.518 33.186-20.014-28.136-5.819 34.037-5.818-34.037-20.014 28.136 9.518-33.186-30.227 16.671 22.97-25.779-34.472 1.897 31.881-13.254-31.881-13.248 34.472 1.89-22.97-25.772 30.227 16.671-9.518-33.193 20.014 28.136 5.818-34.037Z' />
                <path d='M155.182 161.925c-35.903 0-65.015-29.115-65.015-65.035 0-35.921 29.105-65.036 65.015-65.036 7.729 0 15.107 1.425 21.985 3.896-11.252-7.17-24.563-11.384-38.893-11.384-40.041 0-72.502 32.47-72.502 72.524 0 40.053 32.46 72.523 72.502 72.523 14.33 0 27.641-4.213 38.893-11.384-6.878 2.478-14.263 3.896-21.985 3.896Z' />
              </svg>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <span>Music</span>
                <span>Publishers</span>
                <span>Association</span>
              </div>
            </div>
          </div>

          <div
            style={{
              // fontFamily: 'Serif',
              fontWeight: 800,
              lineHeight: 0.9,
              whiteSpace: 'pre-wrap',
              letterSpacing: '-0.025em',
              marginBottom: 4,
              width: '100%'
            }}>
            {title}
          </div>
        </div>

        <img
          alt=''
          src={`${baseUrl}/images/16.png`}
          style={{
            // position: 'absolute',
            // inset: 0,
            // right: 0,
            // width: width / 2,
            height: height,
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'rotate(25deg)'
          }}
        />
      </div>
    );

    return new ImageResponse(output, options);
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500
    });
  }
}
