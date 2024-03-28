import { SVGProps } from 'react';

import { cn } from '@/lib/utils';

export default function EducationIcon({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="116"
			height="160"
			viewBox="0 0 116 160"
			className={cn('fill-current', className)}
			{...props}
		>
			<g clip-path="url(#clip0_2045_601)">
				<path d="M115.378 116.786C114.548 92.2073 114.155 69.8037 114.205 49.5636C114.227 40.2372 114.582 29.8263 114.338 19.9068C114.211 14.6137 113.176 8.47899 107.41 6.71088C107.233 6.65439 107.1 6.54141 107.012 6.37759C106.796 5.96522 106.53 5.33819 106.226 4.5078C104.201 -1.06203 95.3088 0.89814 91.0813 0.242865C89.7865 0.0395043 88.6245 0.367142 87.4016 0.208972C86.6048 0.107291 85.6033 -0.169506 84.8286 0.141185C83.9488 0.491418 83.4895 0.875544 82.488 0.858598C76.7167 0.762566 70.9509 0.542258 65.1575 0.723024C59.9229 0.886842 54.4725 0.965927 49.4815 1.16364C37.5404 1.62685 25.5939 1.91495 13.6474 2.02792C11.0633 2.05617 8.70606 2.31602 6.58125 2.80748C1.16408 4.06154 0.461341 8.79533 0.555408 13.6929C1.02021 37.9381 1.04788 62.1833 0.632875 86.4284C0.37834 101.11 0.566475 115.797 0.610742 130.513C0.621808 133.727 1.28028 136.935 4.45643 138.178C4.65563 138.257 4.78843 138.455 4.77737 138.675L4.08016 158.317C4.0691 158.667 4.4509 158.887 4.73863 158.689C6.57018 157.43 6.23264 155.526 9.10446 155.441C9.4752 155.43 9.76847 155.125 9.774 154.746C9.85147 149.77 9.9566 144.833 10.0949 139.946C10.1115 139.432 10.2333 139.031 10.4657 138.754C10.6649 138.517 11.0522 138.63 11.0909 138.941C11.1961 139.726 11.2459 140.483 11.2459 141.217C11.2293 145.567 11.3178 149.911 11.5004 154.255C11.6055 156.712 13.2434 158.266 15.003 160H16.9674L17.1832 143.358C17.1887 143.11 17.3824 142.912 17.6259 142.918C30.1811 143.025 42.7363 142.98 55.286 142.771C64.654 142.618 74.2322 142.771 83.4785 142.63C84.2697 142.618 85.2879 142.771 86.5218 143.087C88.4862 143.584 91.7287 143.765 93.6211 142.545C93.7816 142.443 93.9642 142.381 94.1523 142.37C99.0604 142.104 103.758 141.285 108.257 139.912C113.215 138.393 114.875 134.924 115.29 129.914C115.539 126.88 115.572 122.502 115.378 116.786ZM8.39619 135.037C5.30857 134.817 3.72603 133.117 3.64856 129.925C3.29443 115.724 3.07309 101.957 3.27229 88.1175C3.52129 70.5606 3.61536 53.0038 3.54896 35.4469C3.52129 27.2052 3.07862 18.7996 3.43276 10.8289C3.58216 7.47913 5.38604 5.58109 8.84993 5.14613C10.8475 4.89193 12.585 4.75635 14.0734 4.72811C22.5782 4.59253 29.5171 4.57559 37.297 4.21406C47.4175 3.7452 54.2014 3.51924 57.6376 3.52489C66.231 3.54748 74.8187 3.47405 83.401 3.31023C83.6223 3.30458 83.7994 3.48535 83.7994 3.7113L83.7109 13.2128C83.7109 13.4274 83.6057 13.5348 83.3955 13.5291C80.3134 13.4726 76.8495 13.4839 72.9927 13.5574C58.5617 13.8455 44.1307 14.0149 29.6941 14.0714C28.8033 14.0771 27.4974 14.1392 25.782 14.2691C25.5939 14.2804 25.4445 14.3595 25.3283 14.512C25.0904 14.8058 25.1623 15.0939 25.5441 15.3763C25.6603 15.4667 25.8042 15.5119 25.948 15.5062C44.4959 15.156 63.7077 15.0035 83.5836 15.043C83.6445 15.043 83.6721 15.0713 83.6666 15.1334L83.6002 19.7316C83.6002 19.8051 83.5615 19.8446 83.4895 19.8446L25.5496 20.4547C25.1734 20.4604 24.9852 20.6524 24.9797 21.0309L24.9686 21.4037C24.9631 21.7031 25.201 21.946 25.4943 21.9404L83.2239 21.3472C83.484 21.3416 83.6168 21.4715 83.6168 21.737L83.6389 25.9906C83.6389 26.2222 83.5227 26.3409 83.2959 26.3465C65.6942 26.5894 47.921 26.4764 29.9708 26.0076C28.6539 25.9737 27.0934 26.0189 25.2951 26.1432C24.9686 26.1658 24.7362 26.4821 24.8137 26.8041C24.8303 26.8662 24.8414 26.9227 24.8469 26.9849C24.9188 27.5667 25.2398 27.8604 25.8208 27.8548C29.5613 27.8378 32.9754 27.8548 36.063 27.9C54.6718 28.1542 70.5082 28.2446 83.5615 28.1598C83.6223 28.1598 83.6555 28.1937 83.6555 28.2559L83.6445 32.7016C83.6445 32.7976 83.5947 32.8428 83.5006 32.8428C78.183 32.7524 72.8323 32.7524 67.4594 32.8428C54.041 33.0744 39.9862 33.2552 25.284 33.3907C25.035 33.3964 24.8856 33.5207 24.8358 33.7636C24.786 34.0291 24.9244 34.2776 25.2564 34.5092C25.3449 34.577 25.4556 34.6109 25.5607 34.6052L83.5449 34.0517C83.6168 34.0517 83.6555 34.0855 83.6666 34.159C83.7883 35.0515 83.8105 36.5824 83.733 38.7515C83.733 38.808 83.7053 38.8363 83.6445 38.8363L25.5718 38.9719C25.4777 38.9719 25.3836 39.0058 25.3062 39.0735C24.8801 39.4633 24.7584 39.7514 24.9354 39.9265C25.3006 40.2824 25.699 40.4632 26.1362 40.4632C37.4021 40.401 48.7732 40.3615 60.2549 40.3502C63.7907 40.3502 67.4815 40.3107 71.3383 40.2372C75.4164 40.1638 79.4889 40.1412 83.5504 40.1807C83.6777 40.1807 83.7828 40.2881 83.7828 40.418L83.9377 99.7034C83.9377 99.8672 83.8547 99.952 83.6943 99.952C79.085 99.9011 74.3595 99.9689 69.5178 100.161C69.3794 100.167 69.2743 100.302 69.3075 100.438L69.3407 100.613C69.4016 100.907 69.5842 101.053 69.8774 101.059C74.697 101.144 79.2952 101.138 83.6721 101.059C83.9101 101.059 84.0263 101.172 84.0207 101.415L83.9156 111.137C83.9156 111.329 83.8215 111.419 83.6334 111.414C79.0628 111.289 74.5033 111.25 69.9549 111.295C69.2632 111.295 68.472 111.56 67.7305 111.538C54.9761 111.12 42.2272 111.442 29.4728 111.272C28.3827 111.261 27.11 111.436 25.9314 111.431C25.7488 111.431 25.605 111.51 25.5109 111.673C25.3283 111.99 25.3338 112.284 25.5275 112.56C25.6437 112.713 25.7931 112.786 25.9812 112.786C39.4771 112.735 52.4695 112.679 64.9472 112.611C65.1409 112.611 66.0705 112.515 67.7305 112.317C69.0419 112.159 70.4142 112.515 71.5264 112.526C75.6045 112.577 79.6549 112.594 83.6777 112.577C83.816 112.577 83.9322 112.685 83.9377 112.826L84.1037 116.916C84.1203 117.317 83.9488 117.441 83.5836 117.277C82.5101 116.797 80.1363 117.023 79.0186 117.074C77.7625 117.13 76.4732 117.102 75.1507 116.989C73.203 116.825 71.3715 116.87 69.6617 117.13C68.2949 117.339 68.3004 117.543 69.6672 117.746C71.8141 118.062 73.784 118.141 75.5713 117.983C76.8052 117.87 78.0447 117.893 79.2897 118.051C80.8612 118.249 82.3441 118.243 83.7441 118.028C83.9931 117.989 84.1259 118.102 84.1314 118.356L84.6515 134.721C84.6515 134.879 84.5353 135.009 84.3804 135.009C72.5611 135.026 60.7861 134.924 49.0609 134.71C38.5254 134.518 28.012 134.879 17.5207 135.167C14.0181 135.263 10.9747 135.224 8.39619 135.037ZM27.431 139.895L17.659 139.912C17.399 139.912 17.2662 139.782 17.2551 139.523L17.2274 138.687C17.2164 138.461 17.4211 138.286 17.6369 138.336C18.5555 138.557 19.4961 138.591 20.4589 138.438C22.0138 138.189 22.9324 138.065 23.2146 138.06C24.6311 138.06 26.0034 138.065 27.3314 138.099C27.4088 138.099 27.4476 138.139 27.4476 138.212V138.365C27.4476 138.415 27.4254 138.438 27.3756 138.444C25.4058 138.613 23.4802 138.636 21.6043 138.511C21.4881 138.511 21.4328 138.557 21.4273 138.675V138.822C21.4273 138.822 21.4273 138.833 21.4549 138.839L26.7172 139.161C26.8942 139.167 27.0436 139.24 27.1654 139.37L27.5029 139.732C27.608 139.839 27.5804 139.895 27.431 139.895ZM84.3915 139.641C66.1922 139.816 47.5448 139.873 28.4491 139.811C28.3717 139.805 28.3385 139.766 28.344 139.692L28.4713 138.235C28.4768 138.144 28.5266 138.099 28.6151 138.099L84.3804 137.647C84.6183 137.647 84.7345 137.771 84.7401 138.014L84.7622 139.251C84.7677 139.511 84.646 139.641 84.3915 139.641ZM87.1139 102.33C87.1139 102.257 87.1748 102.195 87.2467 102.195H87.2578C87.3297 102.195 87.3906 102.257 87.3906 102.33V107.956C87.3906 108.03 87.3297 108.092 87.2578 108.092H87.2467C87.1748 108.092 87.1139 108.03 87.1139 107.956V102.33ZM87.1084 122.469C86.9756 122.469 86.8704 121.497 86.876 120.299C86.876 119.102 86.9921 118.13 87.1194 118.13C87.2467 118.13 87.3574 119.102 87.3518 120.299C87.3463 121.497 87.2356 122.469 87.1084 122.469ZM87.136 116.837C87.125 116.882 87.0973 116.899 87.053 116.893H87.0475C86.9645 116.887 86.9258 116.837 86.9313 116.752C87.0088 115.543 86.6989 114.215 86.9756 113.08C87.053 112.769 87.125 112.769 87.1969 113.08C87.4902 114.34 87.4736 115.594 87.136 116.837ZM91.9667 134.619L91.8062 123.333C91.8007 123.146 91.8892 123.073 92.0607 123.113C93.2338 123.355 94.1634 123.406 94.844 123.271C95.1594 123.209 95.3033 123.016 95.2867 122.694C95.2756 122.508 95.176 122.406 94.9934 122.378C93.9255 122.226 92.9184 122.214 91.9722 122.333C91.8283 122.35 91.7564 122.288 91.7564 122.141L91.6844 117.899C91.6789 117.69 91.784 117.588 91.9888 117.599L93.8757 117.684C94.0693 117.684 94.2298 117.763 94.3681 117.904C94.6835 118.226 95.01 118.249 95.3475 117.972C95.4914 117.853 95.6519 117.825 95.8289 117.887L96.0447 117.961C96.2384 118.028 96.3989 117.978 96.5206 117.803C96.6091 117.678 96.6479 117.548 96.6368 117.413C96.6202 117.204 96.5151 117.102 96.3103 117.096L91.8007 117.079C91.7066 117.079 91.6568 117.034 91.6513 116.938C91.5517 115.328 91.5517 113.701 91.6513 112.069C91.6568 112.046 91.6679 112.035 91.69 112.041C93.2836 112.532 94.7776 112.679 96.172 112.481C96.3878 112.453 96.504 112.323 96.5095 112.097L96.5261 111.566C96.5317 111.385 96.4432 111.306 96.2661 111.329C94.8108 111.527 93.3057 111.549 91.7398 111.397C91.6568 111.397 91.5959 111.323 91.5959 111.238C91.3691 101.697 91.2307 92.1564 91.1754 82.6098C91.0536 62.4205 90.9872 42.6945 90.9762 23.4373C90.9706 17.8393 91.0481 12.2355 91.1975 6.63179C91.2307 5.52461 91.3027 4.44566 91.4133 3.40061C91.4355 3.16336 91.6347 2.98824 91.8671 2.99389C93.9863 3.03343 96.2218 3.10687 98.5846 3.2029C104.007 3.43451 104.909 7.69944 105.125 12.2864C105.518 20.562 105.712 28.849 105.712 37.136C105.712 46.0782 105.629 55.0261 105.468 63.974C105.086 84.5022 105.927 105.211 105.214 125.536C105.064 129.846 103.515 133.761 98.8557 134.608C96.7696 134.987 94.5895 135.116 92.3097 134.987C92.1161 134.975 91.9667 134.811 91.9667 134.619ZM102.491 138.189C99.5916 139.246 96.3989 139.54 92.9129 139.065C92.7247 139.037 92.5809 138.884 92.5643 138.692L92.4813 137.811C92.4591 137.562 92.5698 137.449 92.8188 137.472C96.6313 137.822 99.6691 137.529 101.921 136.591C104.61 135.472 106.154 133.727 106.558 131.354C106.597 131.123 106.652 131.123 106.724 131.343C107.687 134.354 105.092 137.24 102.491 138.189ZM112.119 132.925C111.588 134.874 109.745 136.224 108.213 137.342C107.98 137.512 107.914 137.461 108.019 137.19C108.788 135.19 109.175 133.151 109.17 131.077C109.17 130.846 108.733 95.3537 108.561 91.5068C108.506 90.2019 108.495 88.9422 108.534 87.7333C108.578 86.3211 108.589 85.0557 108.572 83.9316C108.434 76.4863 108.511 31.3684 108.273 23.5842C108.13 18.9182 107.969 14.3652 107.792 9.92511C107.792 9.72175 107.864 9.68221 108.024 9.80084C110.52 11.6932 111.129 15.1278 111.405 18.2121C111.577 20.144 111.671 22.0759 111.677 24.0022C111.715 32.5603 111.577 42.1409 111.793 51.4842C112.003 60.3643 111.793 69.5551 111.981 78.085C112.307 92.9642 112.606 107.843 112.872 122.717C112.927 126.044 113.005 129.654 112.119 132.925Z" />
				<path d="M101.379 5.20253C102.203 5.77872 102.735 7.01018 102.84 8.03829C103.111 10.5916 103.205 13.1393 103.133 15.6756C103.133 15.9016 102.984 16.0993 102.779 16.1784L102.635 16.2292C102.519 16.2744 102.392 16.1953 102.375 16.0654C102.06 13.6646 101.894 11.2243 101.882 8.7557C101.877 7.51858 101.534 6.51873 101.086 5.45108C100.903 5.02176 101.003 4.93703 101.379 5.20253Z" />
				<path d="M14.3279 41.2091C12.2363 40.6385 11.0023 38.3959 11.5778 36.2041C12.1478 34.0067 14.3058 32.6905 16.3974 33.261C18.489 33.8316 19.7229 36.0742 19.1475 38.266C18.5775 40.4634 16.4195 41.7796 14.3279 41.2091Z" />
				<path d="M18.7269 56.54C19.9609 58.2516 19.5016 60.7428 17.6922 62.1042C15.8828 63.4712 13.4149 63.1944 12.1754 61.4828C10.9415 59.7711 11.4008 57.28 13.2102 55.9186C15.0196 54.5515 17.4875 54.8283 18.7269 56.54Z" />
				<path d="M65.7384 57.5852C65.7384 57.9298 65.4618 58.2122 65.1242 58.2122L25.6824 58.28C25.3448 58.28 25.0682 58.0032 25.0682 57.653V57.6304C25.0682 57.2858 25.3448 57.0033 25.6824 57.0033L65.1242 56.9355C65.4618 56.9355 65.7384 57.2123 65.7384 57.5626V57.5852Z" />
				<path d="M51.003 65.6574C42.9797 65.9229 34.4804 66.1432 25.4997 66.3184C25.0792 66.3297 24.8634 66.1206 24.8468 65.6913V65.5106C24.8357 65.3016 24.9907 65.1321 25.1954 65.1208C28.0396 65.0022 31.0608 64.9513 34.2646 64.957C43.0295 64.9739 51.7168 64.9796 60.3268 64.9626C60.4264 64.9626 60.5038 65.0417 60.5094 65.1434V65.3015C60.5094 65.5219 60.4098 65.6348 60.194 65.6461C58.6502 65.7083 57.1063 65.7196 55.5625 65.68C53.6203 65.6292 52.1042 65.6179 51.003 65.6574Z" />
				<path d="M13.0829 76.6503C11.1296 75.4076 10.6592 72.5831 12.0315 70.3461C13.4038 68.1091 16.0985 67.3014 18.0463 68.5498C19.9996 69.7925 20.4699 72.617 19.0976 74.854C17.7254 77.0909 15.0306 77.8987 13.0829 76.6503Z" />
				<path d="M67.2767 71.34C67.2767 71.6959 66.9945 71.9897 66.6459 71.9953L25.7653 72.3569C25.4167 72.3569 25.129 72.0744 25.1235 71.7129V71.6677C25.1235 71.3118 25.4057 71.0181 25.7543 71.0124L66.6348 70.6509C66.9834 70.6509 67.2711 70.9333 67.2767 71.2949V71.34Z" />
				<path d="M51.9935 77.5708L25.129 77.8814C24.6697 77.8871 24.4207 77.6555 24.3709 77.1923C24.3654 77.0962 24.3875 76.9946 24.4429 76.8816C24.4982 76.7573 24.6199 76.6782 24.7527 76.6726C27.5139 76.4918 30.4023 76.4353 33.4235 76.4975C36.572 76.5709 39.466 76.5991 42.1054 76.5878C45.0602 76.5765 48.253 76.6669 51.6781 76.8646C51.9161 76.8759 52.0544 77.0059 52.0931 77.2544L52.1208 77.4239C52.1319 77.503 52.071 77.5708 51.9935 77.5708Z" />
				<path d="M60.6145 77.2603C60.6145 77.4129 60.4928 77.5371 60.3434 77.5371H53.8361C53.6867 77.5371 53.565 77.4129 53.565 77.2603V77.2377C53.565 77.0852 53.6867 76.9609 53.8361 76.9609H60.3434C60.4928 76.9609 60.6145 77.0852 60.6145 77.2377V77.2603Z" />
				<path d="M19.0644 93.964C20.2209 95.5231 19.6842 97.9182 17.8692 99.3135C16.0543 100.714 13.6528 100.59 12.5019 99.0311C11.3454 97.472 11.8821 95.0768 13.6971 93.6815C15.512 92.2806 17.9135 92.4049 19.0644 93.964Z" />
				<path d="M42.0943 93.772C42.0999 94.0996 41.8453 94.3708 41.5244 94.3764L26.457 94.7267C26.1361 94.7323 25.8705 94.4725 25.865 94.1448V94.1222C25.8594 93.7946 26.114 93.5235 26.4349 93.5178L41.5023 93.1676C41.8232 93.1619 42.0888 93.4218 42.0943 93.7494V93.772Z" />
				<path d="M45.6301 93.8626C45.6191 94.2015 44.8665 94.4501 43.948 94.4162C43.0239 94.388 42.288 94.0886 42.3046 93.7553C42.3157 93.4163 43.0682 93.1678 43.9867 93.196C44.9108 93.2243 45.6467 93.5237 45.6301 93.857V93.8626Z" />
				<path d="M59.8896 93.9304C59.8896 94.2411 59.6406 94.4896 59.3363 94.484L47.2625 94.3767C46.9582 94.3767 46.7202 94.1225 46.7202 93.8118V93.7666C46.7202 93.4559 46.9692 93.2073 47.2736 93.213L59.3474 93.3203C59.6517 93.3203 59.8896 93.5745 59.8896 93.8852V93.9304Z" />
				<path d="M70.5857 93.3088C70.6244 93.2693 70.6742 93.2524 70.724 93.2467C72.8875 93.0885 75.4384 93.1168 78.3877 93.3371C78.5426 93.3484 78.6478 93.4896 78.6256 93.6478L78.5924 93.8681C78.5592 94.1053 78.36 94.2918 78.1166 94.3031C75.9807 94.3991 73.7895 94.4217 71.5374 94.3708C71.1722 94.3652 70.8457 94.1957 70.569 93.9641C70.4252 93.8511 70.2813 93.8455 70.1319 93.9472C69.0972 94.6589 65.5669 94.3482 64.1946 94.32C63.9456 94.32 63.7575 94.0828 63.7962 93.8286C63.8239 93.6478 63.9345 93.5405 64.1171 93.5066C66.2143 93.1168 68.2893 93.0716 70.3532 93.371C70.4362 93.3879 70.5137 93.3653 70.5857 93.3088Z" />
				<path d="M95.9893 93.3088C96.1277 93.3144 96.2439 93.4161 96.2715 93.5517L96.3268 93.8003C96.3877 94.0658 96.1996 94.32 95.934 94.3425C94.7443 94.4499 93.6432 94.2861 92.6306 93.8624C91.878 93.5517 91.9057 93.3709 92.7191 93.3201C93.7428 93.258 94.8328 93.258 95.9893 93.3088Z" />
				<path d="M60.8137 93.7041C60.7086 93.6645 60.703 93.6137 60.7971 93.5459C61.1512 93.2917 61.4722 93.2352 61.7544 93.3764C62.2026 93.5967 62.1915 93.7775 61.7101 93.9187C61.5884 93.9526 61.2896 93.8792 60.8137 93.7041Z" />
				<path d="M82.1449 94.0433C82.1061 94.3258 81.6579 94.4952 81.1433 94.4274C80.6232 94.3597 80.2303 94.0829 80.2691 93.8004C80.3078 93.518 80.756 93.3485 81.2706 93.4163C81.7907 93.4841 82.1836 93.7609 82.1449 94.0433Z" />
				<path d="M25.9812 101.375C25.6215 101.381 25.3559 101.223 25.1844 100.901C25.129 100.799 25.1014 100.686 25.1069 100.556C25.1069 100.296 25.3227 100.082 25.5828 100.076C33.4235 99.8841 41.4082 99.9406 49.5422 100.246C49.6917 100.246 49.7359 100.325 49.6695 100.466L49.581 100.647C49.509 100.794 49.3652 100.884 49.2047 100.89L25.9812 101.375Z" />
				<path d="M97.0628 101.065C97.0628 101.144 96.9964 101.212 96.9189 101.212H95.9284C93.7317 101.206 91.95 101.014 91.95 100.777V100.449C91.95 100.218 93.7317 100.031 95.9284 100.031H96.9189C97.0019 100.031 97.0628 100.099 97.0628 100.184V101.065Z" />
				<path d="M67.3542 100.647C67.3542 100.912 67.1439 101.127 66.8838 101.127L51.8663 101.178C51.6062 101.178 51.3959 100.963 51.3959 100.698V100.675C51.3959 100.41 51.6062 100.195 51.8663 100.195L66.8838 100.144C67.1439 100.144 67.3542 100.359 67.3542 100.624V100.647Z" />
				<path d="M20.1711 107.765C20.4534 109.747 18.9649 111.606 16.8456 111.922C14.7263 112.239 12.7786 110.888 12.4964 108.906C12.2142 106.923 13.7026 105.064 15.8219 104.748C17.9412 104.432 19.8889 105.782 20.1711 107.765Z" />
				<path d="M60.7584 106.612C59.9561 106.725 59.1427 106.77 58.3293 106.753C54.8709 106.68 51.4125 106.674 47.9542 106.725C47.2791 106.736 46.6096 106.335 45.7353 106.516C44.7393 106.719 43.9591 106.832 43.3892 106.86C38.6913 107.081 32.9643 107.239 26.2191 107.329C25.959 107.335 25.7211 107.177 25.6215 106.934C25.5662 106.798 25.5385 106.663 25.5385 106.522C25.5385 106.256 25.7432 106.041 25.9978 106.036C33.5398 105.849 39.7039 105.832 44.5014 105.979C44.861 105.991 45.2373 106.041 45.6302 106.137C45.7906 106.177 45.9622 106.183 46.1337 106.137C48.2862 105.691 50.7541 106.019 52.4584 105.945C55.2029 105.815 58.1301 105.849 61.2453 106.041C61.3947 106.053 61.4667 106.233 61.3615 106.346C61.2343 106.482 61.0295 106.567 60.7584 106.606V106.612Z" />
				<path d="M76.3514 106.352C76.3514 106.528 76.2131 106.674 76.036 106.674L66.2862 106.708C66.1147 106.708 65.9708 106.567 65.9708 106.386V106.364C65.9708 106.189 66.1092 106.042 66.2862 106.042L76.036 106.008C76.2076 106.008 76.3514 106.149 76.3514 106.33V106.352Z" />
				<path d="M82.9306 106.279C81.9678 106.827 80.9441 106.974 79.8651 106.714C79.7434 106.685 79.6604 106.572 79.6659 106.448C79.6714 106.217 79.8042 106.092 80.0532 106.064C81.0437 105.957 82.0287 106.03 83.0081 106.279C83.0081 106.279 83.0191 106.279 83.0191 106.267H83.0247H82.9693C82.9693 106.267 82.9472 106.273 82.9306 106.279Z" />
				<path d="M93.1839 105.94C93.8424 105.816 94.4621 105.793 95.0431 105.872C96.0613 106.014 96.0613 106.172 95.0431 106.341C94.5009 106.432 93.8756 106.386 93.1673 106.2C92.7855 106.104 92.7911 106.014 93.1784 105.94H93.1839Z" />
				<path d="M19.9996 117.712C21.0454 119.627 20.2099 122.141 18.1349 123.316C16.0599 124.497 13.5311 123.898 12.4853 121.983C11.4395 120.068 12.275 117.554 14.35 116.379C16.4251 115.198 18.9538 115.797 19.9996 117.712Z" />
				<path d="M63.7962 116.922C64.1725 116.933 64.4381 117.074 64.5985 117.345C64.7037 117.515 64.5819 117.741 64.3827 117.741C53.9357 117.882 43.4777 118.063 33.0141 118.294C31.0829 118.334 29.1518 118.351 27.2206 118.339C26.8278 118.339 26.5566 118.266 26.4017 118.125C26.1527 117.893 26.1084 117.554 26.2689 117.102C26.3076 116.984 26.3906 116.922 26.5124 116.922C33.0971 116.871 39.0399 116.922 46.2443 116.746C51.656 116.616 57.0676 116.662 62.4737 116.876C62.933 116.893 63.3757 116.91 63.7962 116.922Z" />
				<path d="M68.1344 117.277C68.1731 117.328 68.1952 117.379 68.2118 117.441C68.2395 117.56 68.1952 117.605 68.079 117.582L67.7304 117.515C67.4538 117.458 67.4206 117.068 67.6862 116.967C67.8134 116.916 67.913 116.95 67.9905 117.068C68.0348 117.136 68.0846 117.204 68.1344 117.277Z" />
				<path d="M76.5451 122.711C76.5451 123.107 76.2352 123.429 75.8424 123.429L26.2413 123.604C25.8539 123.604 25.5385 123.282 25.5385 122.887V122.819C25.5385 122.423 25.8484 122.101 26.2413 122.101L75.8424 121.926C76.2297 121.926 76.5451 122.248 76.5451 122.644V122.711Z" />
				<path d="M83.7827 122.158C83.8436 122.158 83.8878 122.203 83.8878 122.265V122.327C83.8878 123.005 82.7369 123.559 81.3259 123.553H80.7836C79.3671 123.553 78.2217 122.999 78.2217 122.316V122.254C78.2217 122.197 78.2715 122.146 78.3268 122.146L83.7827 122.158Z" />
				<path d="M14.3279 24.3243C12.2363 23.7538 11.0023 21.5111 11.5778 19.3194C12.1478 17.1219 14.3058 15.8057 16.3974 16.3763C18.489 16.9468 19.7229 19.1894 19.1475 21.3812C18.5775 23.5786 16.4195 24.8948 14.3279 24.3243Z" />
			</g>
			<defs>
				<clipPath id="clip0_2045_601">
					<rect
						width="115"
						height="160"
						fill="white"
						transform="translate(0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}