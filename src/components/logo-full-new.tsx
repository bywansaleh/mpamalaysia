import { SVGProps } from 'react';

import { cn } from '@/lib/utils';

export default function LogoFullNew({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 2293.99 1277"
			className={cn('h-12 fill-current', className)}
			{...props}
		>
			<defs>
				<linearGradient
					id="linear-gradient"
					x1="0"
					x2="1036.2"
					y1="639.9"
					y2="639.9"
					gradientTransform="matrix(1 0 0 -1 0 1278)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset=".1" stopColor="#eecc6b" />
					<stop offset=".5" stopColor="#ecd692" />
					<stop offset=".7" stopColor="#caa94d" />
					<stop offset=".8" stopColor="#ebcc80" />
					<stop offset="1" stopColor="#b38739" />
				</linearGradient>
			</defs>
			<path
				d="M959.7 0c-42.2 0-76.5 34.3-76.5 76.5v1005c0 16.6-13.5 30-30 30s-30-13.5-30-30V872.3c0-42.2-34.3-76.5-76.5-76.5h-1.9c-42.2 0-76.5 34.3-76.5 76.5v267.3c0 16.6-13.5 30-30 30h-1c-16.6 0-30-13.5-30-30V746.4c0-42.2-34.3-76.5-76.5-76.5h-1c-42.2 0-76.5 34.3-76.5 76.5v453.2c0 16.6-13.5 30-30 30h-.9c-16.6 0-30-13.5-30-30v-60.5c.6-3.2.9-6.5.9-9.9v-329c0-42.3-45.9-68.6-82.4-47.2L27.1 919.1c-36.3 21.2-36 73.7.4 94.7L311 1176.7c11.2 6.4 23.3 8.4 34.6 6.8v16.2c0 42.2 34.3 76.5 76.5 76.5h.9c42.2 0 76.5-34.3 76.5-76.5V746.5c0-16.5 13.5-30 30-30h1c16.6 0 30 13.5 30 30v393.2c0 42.2 34.3 76.5 76.5 76.5h1c42.2 0 76.5-34.3 76.5-76.5V872.4c0-16.5 13.5-30 30-30h1.9c16.6 0 30 13.5 30 30v209.2c0 42.2 34.3 76.5 76.5 76.5s76.5-34.3 76.5-76.5V76.5c0-16.5 13.5-30 30-30s30 13.5 30 30v594.1h46.5V76.5c0-42.2-34.3-76.5-76.5-76.5ZM363 1096.1c0 16.8-8.7 31.9-23.3 40.3-7.3 4.2-15.3 6.3-23.4 6.3s-16-2.1-23.2-6.3L66.7 1006.3c-14.6-8.4-23.3-23.4-23.4-40.2 0-16.8 8.5-31.9 23.1-40.4l226.4-132.6c14.6-8.5 32.1-8.6 46.8-.2 14.7 8.4 23.4 23.5 23.4 40.4V1096ZM325.6 805c-5.4-2.6-11.1-3.9-16.8-3.9s-13.5 1.8-19.6 5.4l-215.1 126c-11.2 6.6-18.2 17.9-19.1 30.7-1 15.1 7.2 29.4 20.4 37l214.1 123c11.3 6.5 24.6 6.9 36.1 1.3 13.7-6.6 22-20.9 22-36.1V841c0-15.2-8.3-29.4-22-36Zm-5.6 245.1c0 11.3-5.5 22-15.2 27.8-5.1 3.1-10.7 4.6-16.3 4.6s-10.8-1.4-15.7-4.2l-148.7-85.4c-9.8-5.7-15.8-15.8-15.8-27.2 0-11.3 5.8-21.5 15.6-27.3l148.7-87.1c9.9-5.8 21.6-5.8 31.6-.2S320 867 320 878.4v171.7Zm-14.1-164.7v158.7c0 9.3-5 18.2-13.3 22.4-7.2 3.7-15.7 3.4-22.8-.7l-138.1-79.3c-7.1-4.1-11.5-11.2-12.1-19.3-.6-9.3 4.5-18 12.6-22.8l137.4-80.5c3.8-2.2 8-3.3 12.2-3.3s8.5 1.1 12.3 3.4c7.5 4.4 11.8 12.8 11.8 21.5Z"
				style={{ strokeWidth: 0, fill: 'url(#linear-gradient)' }}
			/>
			<path d="m1018.6 741.9 38 73.7h16.7l38.2-73.7v84.5h29.1V695.3h-39.5l-36 72.7-36-72.7h-39.6v131.1h29.1v-84.5zM1018.6 953.3h18.7c19.4 0 34.2-3.8 43.9-11.2 10-7.7 15-19.8 15-35.9s-4.9-28.3-14.7-36.2c-9.5-7.7-24.5-11.6-44.6-11.6h-47.5v131.1h29.1v-36.2Zm0-68.3h18c10.8 0 18.8 1.6 23.6 4.7 4.3 2.8 6.4 7.7 6.4 14.9s-1.8 13.1-5.4 16.7c-3.5 3.6-10.9 5.5-21.5 5.5h-21.1V885ZM1029.2 1021.5l-59.5 131.1h31.3l12.7-28.1h58.7l12.7 28.1h31.3l-59.5-131.1H1029Zm31.1 76.1H1026l17.1-37.7 17.1 37.7ZM1218.4 826.2c-14-.3-25.6-5.2-34.6-14.7-9.2-9.7-13.8-23.9-13.8-42.2v-72.2h13.1v71.2c0 13.6 3.3 24.7 9.8 32.8 6.6 8.3 15.6 12.5 26.8 12.5s20.1-4.2 26.8-12.5c6.5-8.1 9.8-19.2 9.8-32.8v-71.2h13.1v72.2c0 18.3-4.6 32.5-13.8 42.2-9.2 9.8-21.3 14.7-35.9 14.7h-1.3ZM1416.8 697h13.1v127.7h-13.1zM1523.4 826.4c-17.6 0-32.5-6-44.1-17.9l-.8-.8c-11.8-12.4-17.7-28.3-17.7-47.2s6.1-35 18.1-47.6c12-12.7 27.5-19.1 46-19.1s31.7 6.4 43.6 19l-8.1 9.6c-5.3-5-10.5-8.7-15.3-11-5.9-2.7-12.8-4.1-20.6-4.1-14.1 0-25.6 4.8-35.2 14.6-9.7 10-14.4 22.3-14.4 37.7s4.7 27.9 14.3 38.2c9.6 10.3 20.6 15.3 33.7 15.3s15-1.5 20.8-4.4c4.8-2.4 9.7-6 14.8-10.7l8.1 9c-12 12.9-26.5 19.4-43.1 19.4ZM1165.3 989.2c-14.6 0-26.6-4.9-35.9-14.7-9.2-9.7-13.8-23.9-13.8-42.2v-72.2h13.1v71.2c0 13.6 3.3 24.7 9.8 32.8 6.6 8.3 15.6 12.5 26.8 12.5s20.1-4.2 26.8-12.5c6.5-8.1 9.8-19.2 9.8-32.8v-71.2h13.1v72.2c0 18.3-4.6 32.5-13.8 42.2-9.2 9.8-21.3 14.7-35.9 14.7ZM1252.4 987.9V860.2h45.3c8.1 0 15.2 1 21 3.1 5.5 2 9.6 4.5 12.1 7.7 4.9 6 7.5 12.7 7.7 20.1v.7c0 9.3-2.5 15.9-7.8 20.2-.4.3-.7.6-1.1.9l-11.9 9.3 12.8 6.4c3.6 1.8 6.7 4.3 9.2 7.4 3.9 4.9 5.9 11.2 5.9 18.6s-2.7 15.7-8 22.2c-6.3 7.5-17.6 11.2-33.7 11.2h-51.5Zm13.1-12.1h37.8c8.7 0 15.3-1.5 20.2-4.6 5.5-3.6 8.4-10 8.4-19.2s-5.4-22.8-31.3-22.8h-35.1v46.7Zm0-58.8h31.4c22.7 0 27.4-11.8 27.4-21.7s-2.5-14.1-7.4-17.9c-4.5-3.5-11-5.1-19.8-5.1h-31.6V917ZM1376.2 987.9V860.1h13.1v115.1h58.1v12.7h-71.2zM1474.6 860.1h13.1v127.7h-13.1zM1565.2 989.5c-17.4 0-33.2-6.1-47-18.1l8.1-10.5c12.6 10.8 25.9 16.2 39.5 16.2s14.1-1.9 18.9-5.7c5.1-4 7.8-9.8 7.8-16.5s-2.6-12.4-7.5-16.1c-4.3-3.3-11.2-6.2-21.2-8.7-9.3-2.4-16.1-4.5-20.8-6.5-4.4-1.9-8.4-4.3-11.8-7.2h-.2c-6.3-5.3-9.5-13.5-9.5-24.6s3.6-19.6 11.1-25.5c7.8-6.2 17.6-9.4 29.3-9.4s15.4 1.4 22.9 4.1c6.1 2.2 11.5 5.1 16.2 8.7l-6.5 9.9c-3.6-2.7-8-5-13.1-6.9-6.8-2.5-13.6-3.8-20.3-3.8s-12.9 1.6-17.6 4.8c-5.2 3.6-8 9.2-8 16.4s2.7 12.8 7.9 16.6c4.5 3.3 13.3 6.6 26.9 10.2 12 3.1 21.2 7.5 27.3 13l.4.4c5.6 5.2 8.4 13.1 8.4 23.6s-3.6 18.9-11 25.5c-7.6 6.7-17.8 10.2-30.3 10.2ZM1721.3 987.9v-56.1h-71.4v56.1h-13.1V860.1h13.1v59.4h71.4v-59.4h13.2v127.8h-13.2zM1773.5 987.9V860.1h81v12.6h-67.8v45.5h60.9v11.3h-60.9v45.9h70v12.5h-83.2zM1965.9 987.9l-30.4-46.1H1901v46.1h-13.1V860.2h43.1c18.6 0 31.4 3.2 39.1 9.6 7.2 6.1 10.9 16.3 10.9 30.2s-6.4 30.5-20 36.6l-9.6 4.3 31.4 47h-16.9Zm-64.9-57.8h30.9c13.3 0 22.2-2.3 27.4-7.2 3.7-3.4 6.1-8.2 7.3-14.2h.8v-8.9c0-10.5-2.9-18-8.6-22.3-5.3-3.9-13.9-5.8-26.3-5.8h-31.4v58.2ZM2054.1 989.5c-17.4 0-33.2-6.1-47-18.1l8.1-10.5c12.6 10.8 25.9 16.2 39.5 16.2s14.1-1.9 18.9-5.7c5.1-4 7.8-9.8 7.8-16.5s-2.6-12.4-7.5-16.1c-4.3-3.3-11.2-6.2-21.2-8.7-9.3-2.4-16-4.5-20.8-6.5-4.4-1.9-8.4-4.3-11.8-7.2h-.2c-6.3-5.3-9.5-13.5-9.5-24.6s3.6-19.6 11.1-25.5c7.8-6.2 17.6-9.4 29.3-9.4s15.4 1.4 22.9 4.1c6.1 2.2 11.5 5.1 16.2 8.7l-6.5 9.9c-3.6-2.7-8-5-13.1-6.9-6.8-2.5-13.6-3.8-20.3-3.8s-12.9 1.6-17.5 4.8c-5.2 3.6-8 9.2-8 16.4s2.7 12.8 7.9 16.6c4.5 3.3 13.3 6.6 26.9 10.2 12 3.1 21.2 7.5 27.3 13l.4.4c5.6 5.2 8.4 13.1 8.4 23.6s-3.6 18.9-11 25.5c-7.6 6.7-17.8 10.2-30.3 10.2ZM1166.2 1152.6c-17.4 0-33.2-6.1-47-18.1l8.1-10.5c12.6 10.8 25.9 16.2 39.5 16.2s14.1-1.9 18.9-5.7c5.1-4 7.8-9.8 7.8-16.5s-2.6-12.3-7.5-16.1c-4.3-3.3-11.2-6.2-21.2-8.7-9.3-2.4-16-4.5-20.8-6.5-4.4-1.8-8.4-4.3-11.8-7.2h-.2c-6.3-5.3-9.5-13.5-9.5-24.6s3.6-19.6 11.1-25.5c7.8-6.2 17.6-9.4 29.3-9.4s15.4 1.4 22.9 4.1c6.1 2.2 11.5 5.1 16.2 8.7l-6.5 9.9c-3.6-2.7-8-5-13.1-6.9-6.8-2.5-13.6-3.8-20.3-3.8s-12.9 1.6-17.6 4.8c-5.2 3.6-8 9.2-8 16.4s2.7 12.8 7.9 16.6c4.5 3.3 13.3 6.6 26.9 10.2 12 3.1 21.2 7.5 27.3 13l.4.4c5.6 5.2 8.4 13.1 8.4 23.6s-3.6 18.9-11 25.5c-7.6 6.7-17.8 10.2-30.3 10.2ZM1276.2 1152.6c-17.4 0-33.2-6.1-47-18.1l8.1-10.5c12.6 10.8 25.9 16.2 39.5 16.2s14.1-1.9 18.9-5.7c5.1-4 7.8-9.8 7.8-16.5s-2.6-12.3-7.5-16.1c-4.3-3.3-11.2-6.2-21.2-8.7-9.3-2.4-16-4.5-20.8-6.5-4.4-1.8-8.4-4.3-11.8-7.2h-.2c-6.3-5.3-9.5-13.5-9.5-24.6s3.6-19.6 11.1-25.5c7.8-6.2 17.6-9.4 29.3-9.4s15.4 1.4 22.9 4.1c6.1 2.2 11.5 5.1 16.2 8.7l-6.5 9.9c-3.6-2.7-8-5-13.1-6.9-6.8-2.5-13.6-3.8-20.3-3.8s-12.9 1.6-17.6 4.8c-5.2 3.6-8 9.2-8 16.4s2.7 12.8 7.9 16.6c4.5 3.3 13.3 6.6 26.9 10.2 12 3.1 21.2 7.5 27.3 13l.4.4c5.6 5.2 8.4 13.1 8.4 23.6s-3.6 18.9-11 25.5c-7.6 6.7-17.8 10.2-30.3 10.2ZM1402.4 1152.3c-17.7 0-32.8-6.4-44.8-19-11.9-12.5-18-28.4-18-47.2s6-34.6 18-47.2c12-12.6 27-19 44.8-19s32.8 6.4 44.8 19c11.9 12.6 18 28.4 18 47.2s-6 34.6-18 47.2c-12 12.6-27.1 19-44.8 19Zm0-120.4c-13.9 0-25.3 5.2-34.9 15.9-9.6 10.7-14.2 23.2-14.2 38.4s4.6 27.8 14.2 38.4c9.6 10.7 21 15.9 34.9 15.9s25.3-5.2 34.9-15.9c9.6-10.7 14.2-23.2 14.2-38.4s-4.6-27.8-14.2-38.4c-9.6-10.7-21-15.9-34.9-15.9ZM1550.5 1152.5c-18 0-33.2-6.3-45-18.7-11.7-12.4-17.7-28.2-17.7-47.2s6.1-35 18.1-47.6c12-12.7 27.5-19.1 46-19.1s31.7 6.4 43.6 19l-8.1 9.6c-5.3-5-10.5-8.7-15.3-11-3.8-1.7-8-2.9-12.6-3.6v-.5h-8c-14.1 0-25.6 4.7-35.2 14.6-9.7 10-14.4 22.3-14.4 37.7s4.7 27.9 14.3 38.2c9.6 10.3 20.6 15.3 33.7 15.3s15-1.5 20.8-4.4c4.8-2.4 9.7-6 14.8-10.7l8.1 9c-12 12.9-26.5 19.4-43.1 19.4ZM1625.3 1023.3h13.1V1151h-13.1zM1770.4 1151l-12.7-31.2h-69L1676 1151h-13.8l52.2-127.7h17.5l52.2 127.7h-13.8Zm-76.8-43.3h59.1l-29.6-72.2-29.5 72.2ZM1824.4 1151v-115.8h-38.5v-11.9h90.2v11.9h-38.5V1151h-13.2zM1903.2 1023.3h13.1V1151h-13.1zM2009.9 1152.3c-17.7 0-32.8-6.4-44.8-19-11.9-12.5-18-28.4-18-47.2s6-34.6 18-47.2c12-12.6 27-19 44.8-19s32.8 6.4 44.8 19c11.9 12.6 18 28.4 18 47.2s-6 34.6-18 47.2c-12 12.6-27.1 19-44.8 19Zm0-120.4c-13.9 0-25.3 5.2-34.9 15.9-9.6 10.7-14.2 23.2-14.2 38.4s4.6 27.8 14.2 38.4c9.6 10.7 21 15.9 34.9 15.9s25.3-5.2 34.9-15.9c9.6-10.7 14.2-23.2 14.2-38.4s-4.6-27.8-14.2-38.4c-9.6-10.7-21-15.9-34.9-15.9ZM2194.8 1151l-78.1-108.5V1151h-13.2v-127.7h15.3l80 110.8v-110.8h13.2V1151h-17.2zM1345.2 826.4c-17.4 0-33.2-6.1-47-18.1l8.1-10.5c12.6 10.8 25.9 16.2 39.5 16.2s14.1-1.9 18.9-5.7c5.1-4 7.8-9.8 7.8-16.5s-2.6-12.4-7.5-16.1c-4.3-3.3-11.2-6.2-21.2-8.7-9.3-2.4-16-4.5-20.8-6.5-4.4-1.8-8.4-4.3-11.8-7.2h-.2c-6.3-5.3-9.5-13.5-9.5-24.6s3.6-19.6 11.1-25.5c7.8-6.2 17.6-9.4 29.3-9.4s15.4 1.4 22.9 4.1c6.1 2.2 11.5 5.1 16.2 8.7l-6.5 9.9c-3.6-2.7-8-5-13.1-6.9-6.8-2.5-13.6-3.8-20.3-3.8s-12.9 1.6-17.6 4.8c-5.2 3.6-8 9.2-8 16.4s2.7 12.8 7.9 16.6c4.5 3.3 13.3 6.6 26.9 10.2 12 3.1 21.2 7.5 27.3 13l.4.4c5.6 5.2 8.4 13.1 8.4 23.6s-3.6 18.9-11 25.5c-7.6 6.7-17.8 10.2-30.3 10.2Z" />
		</svg>
	);
}