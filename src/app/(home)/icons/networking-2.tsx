import { SVGProps } from 'react';

import { cn } from '@/lib/utils';

export default function Networking2Icon({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			className={cn('fill-current', className)}
			{...props}
		>
			<g clipPath="url(#clip0_1051_8625)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.31 21.26C6.20367 21.0456 6.0728 20.8443 5.92 20.66C5.61407 20.3516 5.25498 20.1009 4.86 19.92C5.10111 19.8378 5.32164 19.7045 5.5065 19.5292C5.69137 19.354 5.83622 19.1408 5.93116 18.9044C6.0261 18.668 6.06889 18.4139 6.05661 18.1595C6.04433 17.905 5.97726 17.6562 5.86 17.43C5.64444 16.9263 5.27468 16.5039 4.8039 16.2236C4.33312 15.9433 3.78558 15.8195 3.24 15.87C2.87046 15.9444 2.5223 16.1006 2.22116 16.3274C1.92003 16.5541 1.67359 16.8455 1.5 17.18C1.31201 17.5301 1.23253 17.9282 1.27172 18.3236C1.3109 18.719 1.46696 19.0937 1.72 19.4C1.92686 19.6214 2.18417 19.7895 2.47 19.89C2.0325 20.0788 1.63786 20.3543 1.31 20.7001C1.1572 20.8843 1.02632 21.0856 0.919998 21.3C0.81486 21.523 0.737611 21.7582 0.689998 22C0.576654 22.5154 0.526285 23.0426 0.539998 23.57C0.536154 23.672 0.569555 23.7719 0.633964 23.851C0.698372 23.9301 0.789383 23.9831 0.889998 24C0.94259 24.007 0.996048 24.0035 1.04726 23.9896C1.09847 23.9758 1.14641 23.9519 1.18829 23.9193C1.23017 23.8867 1.26515 23.8461 1.29119 23.7999C1.31724 23.7537 1.33383 23.7027 1.34 23.65C1.54916 23.0774 1.81025 22.5251 2.12 22L2.38 21.49C2.47 21.31 2.53 21.13 2.63 20.96C2.75876 20.745 2.90957 20.5439 3.08 20.3601C3.12769 20.3268 3.16576 20.2816 3.19034 20.2289C3.21492 20.1762 3.22516 20.118 3.22 20.06C3.45005 20.1102 3.68457 20.137 3.92 20.14C3.92 20.14 3.97 20.14 4 20.09C4.02046 20.1824 4.07377 20.2641 4.15 20.32C4.32042 20.5039 4.47124 20.705 4.6 20.92C4.7 21.09 4.76 21.2701 4.85 21.4501L5.11 21.96C5.42252 22.4906 5.68371 23.0498 5.89 23.63C5.89595 23.6834 5.91286 23.735 5.93966 23.7815C5.96647 23.828 6.0026 23.8685 6.04578 23.9005C6.08897 23.9324 6.13828 23.955 6.19063 23.967C6.24297 23.979 6.29723 23.98 6.35 23.97C6.45726 23.9551 6.55427 23.8984 6.61985 23.8122C6.68542 23.726 6.71424 23.6174 6.7 23.51C6.71073 22.9822 6.657 22.4549 6.54 21.9401C6.49082 21.705 6.4136 21.4767 6.31 21.26ZM3.08 19.21C2.86252 19.121 2.67756 18.9674 2.55 18.77C2.47218 18.6192 2.44018 18.4489 2.45795 18.2801C2.47572 18.1113 2.54248 17.9514 2.65 17.82C2.73977 17.6674 2.86119 17.5358 3.00608 17.434C3.15097 17.3323 3.31598 17.2627 3.49 17.23C3.76487 17.1835 4.0474 17.2253 4.2971 17.3492C4.5468 17.4732 4.75085 17.673 4.88 17.92C5.32 18.72 4.58 19.83 3.08 19.21Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.55 21.26C14.4437 21.0456 14.3128 20.8443 14.16 20.66C13.8541 20.3516 13.495 20.1009 13.1 19.92C13.3455 19.8432 13.5713 19.7139 13.7617 19.5409C13.9521 19.3679 14.1025 19.1555 14.2024 18.9185C14.3024 18.6815 14.3494 18.4256 14.3404 18.1685C14.3313 17.9114 14.2664 17.6594 14.15 17.43C13.9344 16.9263 13.5647 16.5039 13.0939 16.2236C12.6231 15.9433 12.0756 15.8195 11.53 15.87C11.1515 15.9374 10.7934 16.0904 10.4831 16.3175C10.1729 16.5446 9.91866 16.8396 9.74 17.18C9.55741 17.5339 9.48461 17.9343 9.53093 18.3298C9.57725 18.7253 9.74058 19.0979 10 19.4C10.2069 19.6214 10.4642 19.7895 10.75 19.89C10.3125 20.0788 9.91786 20.3543 9.59 20.7001C9.4372 20.8843 9.30632 21.0856 9.2 21.3C9.09788 21.5103 9.02069 21.7318 8.97 21.96C8.85666 22.4754 8.80629 23.0026 8.82 23.5301C8.8056 23.6386 8.83412 23.7484 8.89949 23.8362C8.96486 23.924 9.06192 23.9828 9.17 24C9.22259 24.007 9.27605 24.0035 9.32726 23.9896C9.37847 23.9758 9.42641 23.9519 9.46829 23.9193C9.51017 23.8867 9.54515 23.8461 9.57119 23.7999C9.59724 23.7537 9.61383 23.7027 9.62 23.65C9.81633 23.0788 10.064 22.5266 10.36 22L10.62 21.49C10.71 21.31 10.77 21.13 10.87 20.96C10.9988 20.745 11.1496 20.5439 11.32 20.3601C11.3677 20.3268 11.4058 20.2816 11.4303 20.2289C11.4549 20.1762 11.4652 20.118 11.46 20.06C11.69 20.1102 11.9246 20.137 12.16 20.14C12.16 20.14 12.21 20.14 12.24 20.09C12.2605 20.1824 12.3138 20.2641 12.39 20.32C12.5604 20.5039 12.7112 20.705 12.84 20.92C12.94 21.09 13 21.2701 13.09 21.4501L13.35 21.96C13.6625 22.4906 13.9237 23.0498 14.13 23.63C14.136 23.6834 14.1529 23.735 14.1797 23.7815C14.2065 23.828 14.2426 23.8685 14.2858 23.9005C14.329 23.9324 14.3783 23.955 14.4306 23.967C14.483 23.979 14.5372 23.98 14.59 23.97C14.6973 23.9551 14.7943 23.8984 14.8598 23.8122C14.9254 23.726 14.9542 23.6174 14.94 23.51C14.9507 22.9822 14.897 22.4549 14.78 21.9401C14.7308 21.705 14.6536 21.4767 14.55 21.26ZM11.32 19.21C11.1025 19.121 10.9176 18.9674 10.79 18.77C10.7122 18.6192 10.6802 18.4489 10.698 18.2801C10.7157 18.1113 10.7825 17.9514 10.89 17.82C10.9798 17.6674 11.1012 17.5358 11.2461 17.434C11.391 17.3323 11.556 17.2627 11.73 17.23C12.0049 17.1835 12.2874 17.2253 12.5371 17.3492C12.7868 17.4732 12.9909 17.673 13.12 17.92C13.56 18.73 12.82 19.82 11.32 19.21Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M22.79 21.26C22.6837 21.0456 22.5528 20.8443 22.4 20.66C22.1127 20.3566 21.7742 20.1061 21.4 19.92C21.6411 19.8378 21.8616 19.7045 22.0465 19.5292C22.2314 19.354 22.3762 19.1408 22.4712 18.9044C22.5661 18.668 22.6089 18.4139 22.5966 18.1595C22.5843 17.905 22.5173 17.6562 22.4 17.43C22.1844 16.9263 21.8147 16.5039 21.3439 16.2236C20.8731 15.9433 20.3256 15.8195 19.78 15.87C19.4033 15.9388 19.0472 16.0925 18.7387 16.3195C18.4303 16.5465 18.1776 16.8408 18 17.18C17.812 17.5301 17.7325 17.9282 17.7717 18.3236C17.8109 18.719 17.967 19.0937 18.22 19.4C18.4297 19.618 18.6862 19.7855 18.97 19.89C18.5295 20.0786 18.1315 20.3541 17.8 20.7001C17.6472 20.8843 17.5163 21.0856 17.41 21.3C17.3079 21.5103 17.2307 21.7318 17.18 21.96C17.0566 22.4741 16.9961 23.0014 17 23.5301C16.9856 23.6386 17.0141 23.7484 17.0795 23.8362C17.1449 23.924 17.2419 23.9828 17.35 24C17.4026 24.007 17.456 24.0035 17.5073 23.9896C17.5585 23.9758 17.6064 23.9519 17.6483 23.9193C17.6902 23.8867 17.7251 23.8461 17.7512 23.7999C17.7772 23.7537 17.7938 23.7027 17.8 23.65C18.0156 23.0767 18.2834 22.5244 18.6 22L18.86 21.49C18.95 21.31 19.01 21.13 19.11 20.96C19.2388 20.745 19.3896 20.5439 19.56 20.3601C19.6077 20.3268 19.6457 20.2816 19.6703 20.2289C19.6949 20.1762 19.7052 20.118 19.7 20.06C19.9333 20.1108 20.1712 20.1376 20.41 20.14C20.41 20.14 20.41 20.14 20.48 20.09C20.4976 20.1835 20.5516 20.2662 20.63 20.32C20.8004 20.5039 20.9512 20.705 21.08 20.92C21.18 21.09 21.24 21.2701 21.33 21.4501L21.59 21.96C21.9025 22.4906 22.1637 23.0498 22.37 23.63C22.3759 23.6834 22.3929 23.735 22.4197 23.7815C22.4465 23.828 22.4826 23.8685 22.5258 23.9005C22.569 23.9324 22.6183 23.955 22.6706 23.967C22.723 23.979 22.7772 23.98 22.83 23.97C22.9373 23.9551 23.0343 23.8984 23.0998 23.8122C23.1654 23.726 23.1942 23.6174 23.18 23.51C23.1858 22.9747 23.1254 22.4406 23 21.92C22.9557 21.6927 22.8852 21.4712 22.79 21.26ZM19.57 19.21C19.3525 19.121 19.1676 18.9674 19.04 18.77C18.9622 18.6192 18.9302 18.4489 18.9479 18.2801C18.9657 18.1113 19.0325 17.9514 19.14 17.82C19.2298 17.6674 19.3512 17.5358 19.4961 17.434C19.641 17.3323 19.806 17.2627 19.98 17.23C20.2549 17.1835 20.5374 17.2253 20.7871 17.3492C21.0368 17.4732 21.2408 17.673 21.37 17.92C21.4438 18.0357 21.4899 18.1669 21.5047 18.3034C21.5194 18.4398 21.5024 18.5778 21.4549 18.7066C21.4075 18.8354 21.3309 18.9515 21.2312 19.0457C21.1314 19.14 21.0112 19.2099 20.88 19.25C20.6 19.36 20.88 19.4 20.41 19.4C20.1218 19.3811 19.8383 19.3169 19.57 19.21Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.25 6.73002C16.1333 6.46765 15.982 6.22213 15.8 6.00002C15.3816 5.53253 14.8754 5.15196 14.31 4.88002C14.6156 4.61369 14.8478 4.27342 14.9843 3.89175C15.1209 3.51008 15.1573 3.09976 15.09 2.70002C15.0447 2.06658 14.7995 1.46388 14.3897 0.978677C13.98 0.493476 13.4269 0.150811 12.81 1.8836e-05C12.1963 -0.0385471 11.5835 0.0875936 11.035 0.365385C10.4864 0.643175 10.0221 1.06252 9.69 1.58002C9.50091 1.83641 9.36739 2.12944 9.29799 2.44037C9.22859 2.75129 9.22482 3.07328 9.28694 3.38575C9.34906 3.69821 9.47569 3.99428 9.65873 4.25502C9.84178 4.51576 10.0772 4.73544 10.35 4.90002H10.45C9.9411 5.24782 9.47461 5.65391 9.06 6.11002C8.7652 6.43241 8.51925 6.79628 8.33 7.19002C8.13332 7.54712 8.01149 7.94057 7.97194 8.34633C7.9324 8.75209 7.97597 9.16166 8.1 9.55002C8.12807 9.65199 8.19537 9.73869 8.2872 9.79117C8.37903 9.84364 8.4879 9.85761 8.59 9.83002C8.69457 9.80187 8.78376 9.73349 8.8381 9.63982C8.89243 9.54614 8.90749 9.43477 8.88 9.33002C8.87135 9.07277 8.92995 8.81771 9.05 8.59002C9.17989 8.32849 9.33036 8.0777 9.5 7.84002C9.66 7.59002 9.84 7.34002 10 7.07002C10.39 6.47002 10.7 5.86002 11 5.40002C11 5.40002 11 5.32002 11.06 5.27002C11.3849 5.37972 11.7199 5.45677 12.06 5.50002C12.1527 5.51462 12.2473 5.49248 12.3239 5.43832C12.4005 5.38415 12.4529 5.30224 12.47 5.21002C12.4787 5.16339 12.478 5.11551 12.4681 5.06912C12.4582 5.02274 12.4392 4.97877 12.4123 4.93974C12.3853 4.90072 12.351 4.8674 12.3111 4.8417C12.2712 4.81601 12.2267 4.79844 12.18 4.79002C11.9365 4.73617 11.6988 4.65915 11.47 4.56002C11.2585 4.46786 11.0627 4.34301 10.89 4.19002C10.6669 4.01479 10.5078 3.77092 10.4373 3.49614C10.3668 3.22136 10.3888 2.93101 10.5 2.67002C10.6514 2.34755 10.8861 2.07137 11.18 1.87002C11.5727 1.52229 12.0862 1.34273 12.61 1.37002C12.9724 1.43689 13.3035 1.61904 13.5539 1.88934C13.8044 2.15963 13.9609 2.5036 14 2.87002C14.15 3.62002 13.94 4.42002 13.06 4.49002C13.0015 4.4808 12.9417 4.48436 12.8847 4.50047C12.8276 4.51659 12.7748 4.54486 12.7298 4.58335C12.6847 4.62184 12.6486 4.66963 12.6238 4.72344C12.599 4.77724 12.5862 4.83578 12.5862 4.89502C12.5862 4.95426 12.599 5.0128 12.6238 5.0666C12.6486 5.1204 12.6847 5.1682 12.7298 5.20669C12.7748 5.24518 12.8276 5.27345 12.8847 5.28956C12.9417 5.30568 13.0015 5.30924 13.06 5.30002C13.2683 5.29206 13.4742 5.25157 13.67 5.18002C13.6725 5.22856 13.6855 5.27599 13.7079 5.31912C13.7303 5.36225 13.7617 5.40006 13.8 5.43002C14.1674 5.82219 14.4742 6.26711 14.71 6.75002L15.01 7.33002C15.3872 8.00412 15.6571 8.73285 15.81 9.49002C15.8316 9.58968 15.8888 9.67806 15.9708 9.73867C16.0528 9.79928 16.1541 9.82798 16.2557 9.81941C16.3574 9.81084 16.4524 9.76559 16.5231 9.6921C16.5938 9.6186 16.6354 9.5219 16.64 9.42002C16.6765 8.78706 16.6328 8.15202 16.51 7.53002C16.4565 7.2537 16.3692 6.98501 16.25 6.73002Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.78 12.21L12.78 13.47L12.63 13.59C12.7 13.16 12.77 12.72 12.81 12.28C12.8249 12.0603 12.8249 11.8398 12.81 11.62C12.825 11.4003 12.825 11.1798 12.81 10.96C12.75 10.44 12.63 9.96002 12.58 9.43002C12.5885 9.37829 12.586 9.32535 12.5725 9.27468C12.5591 9.22402 12.535 9.1768 12.5019 9.13614C12.4688 9.09548 12.4275 9.06232 12.3806 9.03885C12.3337 9.01539 12.2824 9.00215 12.23 9.00001C12.1361 8.99448 12.0438 9.02591 11.9728 9.08758C11.9017 9.14925 11.8577 9.23627 11.85 9.33001C11.6831 9.84212 11.5594 10.3673 11.48 10.9C11.4651 11.1264 11.4651 11.3536 11.48 11.58C11.4816 11.8042 11.4983 12.0281 11.53 12.25C11.53 12.63 11.64 13 11.71 13.38C11.59 13.29 11.46 13.21 11.33 13.13C10.76 12.78 10.18 12.48 9.60001 12.13C9.56324 12.1018 9.52126 12.0811 9.47649 12.0691C9.43171 12.057 9.38501 12.054 9.33904 12.06C9.29308 12.066 9.24875 12.0811 9.2086 12.1042C9.16844 12.1274 9.13324 12.1582 9.105 12.195C9.07677 12.2318 9.05606 12.2738 9.04404 12.3185C9.03203 12.3633 9.02895 12.41 9.03499 12.456C9.04102 12.5019 9.05605 12.5463 9.07922 12.5864C9.10239 12.6266 9.13324 12.6618 9.17001 12.69L11.17 14.64C11.355 14.8418 11.552 15.0321 11.76 15.21C11.8676 15.2979 11.9971 15.3546 12.1346 15.374C12.2722 15.3933 12.4124 15.3747 12.54 15.32C12.7048 15.2399 12.8565 15.1354 12.99 15.01C13.21 14.81 13.4 14.54 13.57 14.37L15.27 12.83C15.3135 12.7984 15.3501 12.7584 15.3778 12.7124C15.4054 12.6663 15.4235 12.6152 15.431 12.562C15.4385 12.5088 15.4352 12.4546 15.4212 12.4028C15.4073 12.3509 15.3831 12.3023 15.35 12.26C15.2803 12.179 15.1816 12.1285 15.0752 12.1191C14.9687 12.1098 14.8628 12.1424 14.78 12.21Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.88 12.5C6.47 12.71 6.07 12.92 5.69 13.15C5.40943 13.2989 5.13886 13.466 4.88 13.65H4.82C4.92228 13.2263 5.04916 12.809 5.2 12.4C5.31999 12.13 5.44 11.86 5.57 11.6C5.70064 11.3527 5.84417 11.1123 6 10.88C6.31532 10.2721 6.75481 9.73726 7.29 9.31002C7.36997 9.26024 7.42794 9.18183 7.4521 9.09078C7.47626 8.99973 7.46477 8.9029 7.42 8.82002C7.39808 8.77762 7.36772 8.74015 7.33079 8.70991C7.29385 8.67968 7.25112 8.65732 7.20523 8.6442C7.15933 8.63109 7.11124 8.6275 7.06391 8.63366C7.01658 8.63982 6.97101 8.6556 6.93 8.68002C6.15108 8.98579 5.4628 9.48479 4.93 10.13C4.69769 10.4067 4.5027 10.7126 4.35 11.04C4.19824 11.36 4.08092 11.6952 4 12.04C3.89204 12.469 3.82838 12.908 3.81 13.35L1.81 11.75C1.77655 11.7165 1.73681 11.6898 1.69305 11.6717C1.64929 11.6535 1.60238 11.6441 1.555 11.6441C1.50761 11.6441 1.4607 11.6535 1.41694 11.6717C1.37318 11.6898 1.33344 11.7165 1.3 11.75C1.23745 11.8183 1.20276 11.9075 1.20276 12C1.20276 12.0926 1.23745 12.1818 1.3 12.25L3.22 14.6L3.75999 15.12C3.7 15.19 3.98 15.32 4.06 15.36C4.17015 15.4198 4.29487 15.4476 4.42 15.44C4.65081 15.4337 4.87554 15.3645 5.07 15.24C5.3149 15.0506 5.54246 14.8398 5.75 14.61C5.91997 14.398 6.10019 14.1945 6.29 14L7.29 13.17C7.36805 13.1055 7.41949 13.0145 7.43441 12.9143C7.44933 12.8142 7.42667 12.7121 7.3708 12.6277C7.31493 12.5432 7.22979 12.4825 7.13179 12.457C7.03379 12.4316 6.92985 12.4434 6.84 12.49L6.88 12.5Z"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23.35 11.73C23.3174 11.6968 23.2785 11.6704 23.2356 11.6523C23.1927 11.6343 23.1466 11.625 23.1 11.625C23.0534 11.625 23.0074 11.6343 22.9644 11.6523C22.9215 11.6704 22.8826 11.6968 22.85 11.73L20.85 13.33C20.8267 12.8885 20.7631 12.45 20.66 12.02C20.5754 11.675 20.4548 11.3398 20.3 11.02C20.1471 10.695 19.9557 10.3895 19.73 10.11C19.1931 9.46921 18.506 8.97109 17.73 8.66005C17.6886 8.63641 17.643 8.62115 17.5958 8.61514C17.5485 8.60913 17.5005 8.61249 17.4546 8.62503C17.4086 8.63756 17.3655 8.65903 17.3279 8.6882C17.2902 8.71737 17.2587 8.75368 17.235 8.79505C17.2114 8.83641 17.1961 8.88203 17.1901 8.92929C17.1841 8.97656 17.1875 9.02454 17.2 9.0705C17.2125 9.11647 17.234 9.15952 17.2632 9.19718C17.2923 9.23485 17.3286 9.26641 17.37 9.29005C17.9124 9.71521 18.3589 10.2502 18.68 10.86C18.82 11.11 18.96 11.36 19.09 11.62C19.22 11.88 19.34 12.15 19.46 12.42C19.58 12.69 19.71 13.25 19.83 13.67H19.78C19.51 13.49 19.25 13.32 18.97 13.17C18.69 13.02 18.18 12.73 17.77 12.52C17.6795 12.463 17.5702 12.4436 17.4656 12.4661C17.361 12.4885 17.2692 12.5509 17.21 12.64C17.1805 12.6845 17.1601 12.7344 17.1501 12.7868C17.1402 12.8393 17.1408 12.8932 17.152 12.9453C17.1632 12.9975 17.1847 13.0469 17.2152 13.0907C17.2458 13.1344 17.2848 13.1716 17.33 13.2L18.33 14.03C18.54 14.21 18.74 14.41 18.94 14.61C19.1451 14.8422 19.3729 15.0532 19.62 15.24C19.8109 15.3642 20.0324 15.4334 20.26 15.44C20.3852 15.4481 20.5101 15.4204 20.62 15.36C20.71 15.36 20.99 15.19 20.92 15.12L21.47 14.6L23.38 12.25C23.4146 12.2152 23.4415 12.1734 23.4589 12.1275C23.4763 12.0815 23.4838 12.0324 23.481 11.9834C23.4782 11.9343 23.465 11.8864 23.4425 11.8428C23.4199 11.7991 23.3884 11.7607 23.35 11.73Z"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1051_8625">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
