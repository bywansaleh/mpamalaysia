import { SVGProps } from 'react';

import { cn } from '@/lib/utils';

export default function MarketIcon({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="131"
			height="140"
			viewBox="0 0 131 140"
			className={cn('fill-current', className)}
			{...props}
		>
			<g clip-path="url(#clip0_2186_2174)">
				<path d="M130.353 24.2122C130.205 17.5824 127.011 11.995 119.807 11.2592C118.016 11.0752 115.534 11.1289 112.378 11.4125C112.123 11.4355 111.983 11.3205 111.96 11.0676C111.58 7.22764 109.951 0.22227 105.462 0.00766393C100.949 -0.206942 99.5762 7.77182 99.204 10.7456C99.1187 11.3665 98.762 11.6807 98.1261 11.6884L93.0549 11.7267C92.4345 11.7267 92.1011 11.4201 92.0623 10.807C91.8762 8.13205 90.1858 2.46031 87.6114 0.873754C86.3707 0.114967 85.2773 -0.0383231 84.3313 0.421548C80.4852 2.29935 79.6865 7.5802 78.7327 11.2515C78.663 11.5121 78.4924 11.6424 78.221 11.6501L72.0021 11.7037C71.7462 11.7114 71.6066 11.5811 71.5833 11.3281C71.3042 8.28534 70.3349 3.81693 68.2413 1.61721C65.3799 -1.38728 61.4408 1.35662 60.3629 4.33811C59.5022 6.69878 58.8819 9.05945 58.5019 11.4201C58.4631 11.6424 58.2615 11.811 58.0367 11.811L50.1816 11.8493C49.949 11.8493 49.8172 11.7344 49.7784 11.5121C49.2899 8.5306 48.5532 5.19654 46.9713 2.59827C45.3119 -0.130297 42.3576 -0.452207 40.357 2.15373C38.558 4.50673 37.9376 8.54593 37.8601 11.2362C37.8601 11.6577 37.6352 11.8647 37.2087 11.8723L31.0596 12.0026C30.7107 12.0103 30.4083 11.742 30.385 11.3971C30.1679 8.70689 29.47 5.98598 28.2914 3.23442C27.2445 0.797109 24.453 -1.01172 22.181 1.23399C19.343 4.05453 18.9552 7.74882 17.9472 11.5811C17.8852 11.8263 17.7223 11.9413 17.4664 11.9183C9.27794 11.3588 0.461356 11.9566 0.500127 22.572C0.600933 48.6697 0.763772 74.7673 0.988645 100.857C1.05068 107.932 1.12822 114.761 1.22903 121.337C1.29882 126.219 1.77182 129.622 2.6403 131.554C4.27645 135.21 7.18429 137.716 11.3561 139.057C12.8992 139.555 14.6904 139.509 16.3576 139.617C17.7378 139.709 18.994 139.762 20.1261 139.77C51.4145 140 82.7107 140.061 113.999 139.954C120.389 139.931 125.848 137.333 128.593 131.653C129.477 129.822 129.934 127.928 129.973 125.959C130.384 101.739 130.081 73.1041 130.454 43.9483C130.539 37.3722 130.5 30.796 130.353 24.2122ZM117.744 116.608C118.093 117.52 117.737 118.187 116.69 118.601C116.356 118.731 116.256 118.639 116.395 118.309L117.434 115.872C117.457 115.803 117.473 115.734 117.481 115.665L117.551 113.289C117.558 112.944 117.744 112.768 118.093 112.776L119.233 112.791C119.512 112.799 119.784 112.745 120.04 112.638L124.708 110.706C125.041 110.576 125.289 110.66 125.46 110.967L125.584 111.204C125.793 111.58 125.7 111.856 125.289 112.025C123.141 112.921 121.451 113.856 120.233 114.83C119.443 115.466 118.698 115.887 117.993 116.11C117.737 116.194 117.651 116.355 117.744 116.608ZM117.388 85.513L125.708 84.9381C125.824 84.9381 125.917 85.0148 125.925 85.1221L126.103 87.6284C126.103 87.7433 126.026 87.8353 125.917 87.843L117.597 88.4178C117.481 88.4178 117.388 88.3412 117.38 88.2339L117.202 85.7276C117.202 85.6126 117.279 85.5206 117.388 85.513ZM116.853 83.091L117.194 81.1365C117.233 80.9066 117.419 80.7457 117.644 80.7227L125.452 80.1861C125.739 80.1631 125.979 80.3854 125.987 80.669L126.01 82.3552C126.018 82.6081 125.824 82.8304 125.568 82.8534L117.395 83.6658C117.07 83.6965 116.798 83.4129 116.853 83.091ZM125.995 78.8295C125.972 79.1284 125.832 79.2051 125.568 79.0595C125.181 78.8448 124.746 78.7529 124.273 78.7759C121.939 78.9062 119.605 79.0595 117.271 79.2204C116.984 79.2434 116.814 79.1131 116.76 78.8295C116.589 77.8868 116.907 77.2889 117.721 77.0207C120.365 76.1623 123.072 75.7407 125.84 75.7561C126.08 75.7561 126.189 75.8787 126.173 76.1163L125.995 78.8295ZM117.015 102.704C117.023 102.62 117.054 102.536 117.093 102.459C117.116 102.406 117.14 102.352 117.147 102.306C117.31 101.425 117.388 100.558 117.364 99.7153C117.349 99.3244 117.675 98.9949 118.078 99.0025C120.567 99.0332 122.955 98.8799 125.243 98.5427C125.91 98.443 126.142 98.7113 125.933 99.3474C125.886 99.493 125.84 99.631 125.793 99.7766C125.599 100.367 125.196 100.696 124.576 100.75L118.597 101.333C118.225 101.363 117.892 101.57 117.682 101.877L117.116 102.743C117.031 102.873 116.992 102.858 117.015 102.704ZM117.24 94.6031C117.24 94.4958 117.326 94.4038 117.442 94.4038L125.026 94.2735C125.142 94.2735 125.227 94.3655 125.227 94.4728L125.266 96.5116C125.266 96.6189 125.181 96.7108 125.064 96.7108L117.481 96.8411C117.364 96.8411 117.279 96.7492 117.279 96.6418L117.24 94.6031ZM117.806 103.64L125.685 102.436C126.049 102.383 126.29 102.796 126.057 103.08L124.63 104.805C124.568 104.874 124.491 104.92 124.398 104.943L117.962 106.2C117.713 106.245 117.488 106.062 117.481 105.809L117.465 104.038C117.465 103.839 117.605 103.67 117.806 103.64ZM117.52 92.6563C117.364 92.6716 117.225 92.5413 117.233 92.3804L117.287 90.0964C117.295 89.9431 117.411 89.8281 117.566 89.8281L125.886 89.9277C126.018 89.9277 126.134 90.0197 126.158 90.15L126.398 91.7366C126.421 91.8899 126.313 92.0278 126.15 92.0431L117.52 92.6563ZM104.818 4.85164C105.229 4.21548 106.183 4.2768 106.501 4.95894C106.927 5.87868 107.183 6.73711 107.268 7.52655C107.664 11.2975 107.47 15.2754 106.679 19.4679C106.609 19.8434 106.26 20.104 105.873 20.0657C105.33 20.012 104.787 19.8588 104.244 19.6135C104.012 19.5139 103.88 19.3299 103.857 19.077C103.461 14.8921 102.802 8.00942 104.818 4.85164ZM83.2535 10.0252C83.3543 8.23935 83.8273 6.54549 84.688 4.95128C84.7733 4.79799 84.9129 4.67535 85.0757 4.60637C85.8822 4.26147 86.456 4.64469 86.7894 5.76371C87.9138 9.51933 87.7122 13.6428 87.3322 17.4981C87.0608 20.2343 87.2779 21.8132 83.8273 21.269C83.5714 21.2307 83.3775 21.0238 83.3543 20.7708C83.0829 17.4291 83.0519 13.8498 83.2535 10.0252ZM63.1002 6.84441C63.1777 6.31556 63.3018 5.90167 63.4724 5.61042C63.7438 5.14289 64.085 4.8593 64.496 4.75966C65.3334 4.56805 66.1786 5.04325 66.45 5.85569C66.8532 7.07435 67.0626 8.20869 67.0781 9.2664C67.1479 13.1216 66.8998 16.9616 66.3337 20.7938C66.2794 21.1387 65.9925 21.3993 65.6436 21.43C65 21.4836 64.3564 21.3993 63.6973 21.1847C63.4491 21.1004 63.3018 20.9395 63.263 20.6865C62.4643 16.0648 62.4101 11.4508 63.1002 6.84441ZM42.5127 6.21592C42.6367 5.5721 42.9159 5.12756 43.3579 4.88996C43.8929 4.59871 44.552 4.91295 44.6606 5.50312C45.5523 10.3011 45.5135 15.3214 44.5598 20.5639C44.5055 20.8475 44.3427 21.0314 44.0713 21.1234C43.6138 21.2767 43.1563 21.2537 42.6988 21.0621C42.4584 20.9624 42.3343 20.7785 42.3265 20.5102C42.249 16.7546 42.2102 13.0067 42.218 9.27406C42.218 8.23935 42.3188 7.21997 42.5127 6.21592ZM22.1655 12.4778C22.4369 7.9481 23.3984 4.32278 24.2979 4.36877C25.1974 4.42242 25.7169 8.13971 25.4455 12.6694C25.1741 17.1992 24.2126 20.8245 23.3131 20.7785C22.4136 20.7248 21.8941 17.0076 22.1655 12.4778ZM5.3698 100.451C5.27675 99.0179 5.30776 97.7149 5.46285 96.5499C5.59467 95.6071 5.57141 94.7411 5.39306 93.9516C5.24573 93.3155 5.20696 92.6103 5.26124 91.8362C5.3853 90.0887 4.80374 88.8164 5.43958 87.0229C5.52488 86.7853 5.53264 86.54 5.47836 86.2948C5.35429 85.7352 5.18369 85.3597 5.21471 84.7465C5.34653 82.5008 5.35429 80.3394 5.23797 78.2623C5.15268 76.6221 5.10615 74.8056 5.0984 72.8129C5.04412 51.4902 5.0131 34.6053 5.00535 22.1658C5.00535 19.3376 6.41662 17.3525 9.23917 16.2181C10.6194 15.6663 13.2559 15.5743 17.1563 15.9499C17.4121 15.9728 17.5052 16.1108 17.4277 16.3561C16.9159 17.9886 16.0164 24.2965 19.0948 24.5571C22.0492 24.8024 30.6564 26.5882 31.8971 22.4953C32.277 21.2307 32.5717 19.9201 32.7811 18.5635C32.8354 18.1879 32.5639 17.843 32.184 17.8047C31.5016 17.7357 30.858 17.3218 30.2532 16.563C29.881 16.0955 30.2222 15.4057 30.827 15.4057H37.7438C37.9919 15.398 38.178 15.4976 38.3098 15.7046C38.4494 15.9192 38.4572 16.1568 38.3409 16.4097C38.2633 16.586 38.0927 16.7393 37.8368 16.8696C37.3173 17.1302 36.8365 17.4444 36.3868 17.8123C36.1852 17.9733 36.0844 18.1879 36.0766 18.4408C36.0301 20.3799 35.875 23.576 38.4107 24.1662C42.5359 25.1319 46.0486 25.1779 48.9409 24.2965C50.9803 23.6757 52.0969 21.9282 52.283 19.0463C52.3063 18.7321 52.1589 18.5328 51.841 18.4638C50.6391 18.1802 49.8327 17.4674 49.4372 16.3101C49.2899 15.8809 49.6155 15.4287 50.0808 15.4287H57.9281C58.1917 15.4363 58.3701 15.559 58.4709 15.7966C58.6105 16.1338 58.595 16.4557 58.4166 16.7546C58.3081 16.9386 58.0754 17.1149 57.711 17.2835C57.2612 17.4981 56.8348 17.7433 56.4238 18.0269C56.2144 18.1726 56.1369 18.3718 56.2067 18.6248C56.6099 20.081 57.0286 21.407 57.4628 22.6026C57.9824 24.0282 59.192 24.6951 61.0918 24.5954C64.62 24.4191 68.3498 24.7181 71.7927 23.8673C72.1882 23.7753 72.4596 23.4228 72.4673 23.0242L72.5294 19.4602C72.5371 19.1843 72.6457 18.962 72.8705 18.7934L73.204 18.5405C73.5607 18.2722 73.5141 18.1266 73.0722 18.0883L71.6221 17.9733C71.1956 17.935 70.9785 17.7127 70.9707 17.2911L70.9475 15.9882C70.9397 15.5973 71.1336 15.4057 71.5291 15.4057H78.1279C78.8568 15.398 79.0584 15.7199 78.7405 16.3637L78.4846 16.8849C78.2442 17.3678 77.748 17.682 77.1974 17.6974C76.2126 17.728 75.2356 17.8353 74.2663 18.0116C73.8166 18.0959 73.8166 18.1726 74.2663 18.2569L76.3444 18.6401C76.6546 18.6937 76.8485 18.8777 76.926 19.1766L78.0271 23.2925C78.2132 23.9593 78.787 24.4498 79.4772 24.5264C83.1139 24.9327 86.8049 24.9097 90.5502 24.4421C91.8685 24.2812 92.3957 22.71 92.5896 21.361C92.7369 20.3723 93.0238 19.5598 93.4581 18.939C93.5744 18.7781 93.5279 18.6708 93.334 18.6248C92.3415 18.3872 91.8374 17.4904 91.8219 15.9499C91.8142 15.6049 91.9848 15.4363 92.3337 15.4287L98.4596 15.2984C98.762 15.2907 98.9326 15.4363 98.9636 15.7352C99.0334 16.3024 98.9093 16.7929 98.5914 17.1992C98.1727 17.7357 97.5446 17.751 96.9242 18.0883C96.6993 18.2109 96.6761 18.3642 96.8467 18.5558C97.7772 19.5598 98.2037 20.7708 98.1261 22.1734C98.1106 22.4264 98.1882 22.6563 98.3588 22.8479C98.8163 23.3768 99.3746 23.645 100.034 23.6604C102.058 23.7063 104.423 23.9286 107.129 24.3348C109.308 24.6567 111.208 24.1356 112.557 22.3727C113.418 21.2614 113.953 20.265 114.177 19.3989C114.457 18.3182 113.945 17.7817 112.642 17.797C112.301 17.8047 112.107 17.636 112.061 17.3065L111.882 15.9575C111.828 15.5513 112.006 15.3367 112.417 15.3137C115.868 15.0761 118.714 15.1834 120.939 15.6433C123.335 16.1415 124.746 17.728 125.157 20.4029C125.561 22.9859 125.762 25.4002 125.77 27.6536C125.817 40.4916 125.91 52.3716 126.049 63.2936C126.057 64.0523 126.088 64.7958 126.127 65.5316C126.142 65.8458 125.987 65.9991 125.661 65.9761C124.126 65.8765 122.366 65.9608 120.389 66.2367C120.164 66.2674 120.016 66.482 120.071 66.7043L120.148 67.0262C120.233 67.3711 120.582 67.5933 120.939 67.5244L125.786 66.551C126.158 66.4743 126.29 66.6123 126.189 66.9725C125.871 68.1145 125.855 69.1876 126.142 70.1993C126.204 70.4215 125.972 70.6208 125.755 70.5288C124.56 70.0307 123.545 70.1073 122.715 70.7741C122.087 71.2723 122.172 71.5329 122.979 71.5482C124.173 71.5712 125.15 71.5176 125.917 71.3873C126.072 71.3643 126.142 71.4256 126.134 71.5789L125.979 74.1925C125.972 74.3075 125.91 74.3688 125.793 74.3764C122.94 74.5527 120.063 75.0049 117.163 75.7407C116.822 75.825 116.659 75.6947 116.682 75.3498L116.822 72.9355C116.845 72.5523 117.047 72.3377 117.434 72.2917L121.358 71.8165C121.831 71.7628 122.04 71.188 121.699 70.8508C121.304 70.4599 120.807 70.2836 120.195 70.3066C119.194 70.3602 118.186 70.4215 117.186 70.4982C116.922 70.5212 116.767 70.4062 116.713 70.1533C116.519 69.2719 116.473 68.4671 116.573 67.739C116.806 66.0451 116.015 64.6578 117.023 63.0866C117.163 62.8643 117.101 62.7494 116.837 62.7264L114.743 62.5808C114.495 62.5578 114.371 62.6727 114.371 62.9257C114.371 68.2602 114.007 73.8782 113.984 78.7682C113.937 89.7668 113.891 100.712 113.852 111.618C113.852 112.009 113.549 112.331 113.154 112.354C109.455 112.607 105.795 112.737 102.174 112.753C74.8556 112.875 47.5141 112.914 20.1494 112.868C19.8858 112.868 19.6686 112.653 19.6686 112.392L19.5446 41.6873C19.5446 41.3117 19.2344 41.0051 18.8544 40.9975L17.606 40.9745C17.1097 40.9668 16.8616 41.2121 16.8538 41.695L16.4661 90.8781C16.4661 91.1924 16.311 91.338 15.9931 91.3227C13.2869 91.1541 8.78942 90.8245 6.45539 92.0201C5.95136 92.2807 5.74975 92.8173 5.87382 93.3461C5.93586 93.6144 6.0987 93.7063 6.36234 93.6297C9.16162 92.8019 12.1858 92.503 15.4193 92.7329C16.1327 92.7866 16.4816 93.1622 16.4661 93.875L16.4506 94.4038C16.4429 94.879 16.0396 95.2622 15.5511 95.2546C10.2705 95.1549 7.09899 95.3619 6.02891 95.8907C5.67221 96.067 5.46285 96.4502 5.51713 96.8488C5.58692 97.3776 5.88158 97.6612 6.39336 97.6996C9.19264 97.9142 12.2943 97.7915 15.6907 97.3316C16.218 97.2627 16.6755 97.6996 16.6212 98.2284L16.5282 99.0485C16.4739 99.5467 16.0241 99.9069 15.5201 99.8609C11.9532 99.5467 8.68861 99.8303 5.73425 100.704C5.56365 100.758 5.3853 100.635 5.3698 100.451ZM20.6767 118.095C20.2967 118.095 20.0253 117.926 19.8702 117.581C19.7462 117.313 19.6919 116.999 19.6996 116.654C19.7074 116.363 19.8547 116.209 20.1572 116.202C32.122 115.864 40.5974 115.734 45.5678 115.818C50.0963 115.887 59.0137 115.849 72.32 115.688C77.9031 115.619 91.1396 115.711 112.022 115.964C112.51 115.972 112.882 116.179 113.138 116.585C113.456 117.068 113.177 117.597 112.316 118.164C112.177 118.256 112.006 118.309 111.836 118.309L20.6767 118.095ZM86.5645 122.157C86.2156 122.479 85.8589 122.655 85.7581 122.548C85.6651 122.448 85.8744 122.103 86.2156 121.789C86.5645 121.467 86.9212 121.291 87.022 121.398C87.1151 121.498 86.9057 121.843 86.5645 122.157ZM85.5875 124.817C83.2612 126.556 81.6484 127.898 80.7411 128.84C80.4697 129.132 80.1828 129.408 79.8959 129.668C79.5547 129.982 79.5004 129.936 79.7253 129.538C80.9892 127.308 82.6952 125.56 84.8354 124.295C85.068 124.157 85.3704 124.226 85.5177 124.456L85.6263 124.625C85.6728 124.694 85.6573 124.763 85.5875 124.817ZM76.2591 121.375C76.2902 121.506 76.2126 121.628 76.0808 121.659C75.5613 121.789 75.1038 122.027 74.7083 122.364C74.654 122.41 74.6152 122.464 74.5765 122.533C74.5532 122.586 74.5144 122.594 74.4602 122.571C74.3438 122.502 74.2818 122.402 74.2818 122.272C74.2818 122.188 74.3206 122.096 74.3904 122.011C74.8014 121.529 75.3286 121.207 75.98 121.046C76.1118 121.015 76.1894 121.061 76.2126 121.184L76.2591 121.375ZM69.1795 123.061L68.4429 123.981C68.2025 124.28 68.0862 124.242 68.0939 123.851C68.1094 123.215 68.4041 122.847 68.9857 122.747C69.3346 122.678 69.4044 122.786 69.1795 123.061ZM50.6469 123.238C50.1583 123.897 49.9722 124.617 49.4139 125.238C49.2046 125.476 49.0572 125.437 48.9797 125.139C48.9177 124.886 48.9874 124.625 49.1813 124.357C49.5923 123.782 50.0343 123.36 50.5228 123.092C50.7864 122.946 50.8252 123 50.6469 123.238ZM6.66476 108.453C6.75005 108.729 6.89738 108.775 7.12226 108.598C9.45629 106.705 12.3254 106.1 15.7217 106.774C15.8303 106.797 15.8923 106.859 15.9001 106.974L16.0241 108.514C16.0396 108.66 15.9699 108.729 15.8225 108.706C12.7906 108.246 10.317 108.415 8.40171 109.212C6.95942 109.817 6.35459 110.76 6.59497 112.04C6.7423 112.837 7.69607 113.205 8.35518 112.722C10.4954 111.143 12.8914 110.584 15.5511 111.051C15.776 111.089 15.8846 111.22 15.8768 111.45C15.8768 111.503 15.8613 111.565 15.8303 111.634C15.745 111.795 15.6054 111.887 15.4193 111.91C13.3644 112.101 11.3251 112.446 9.31671 112.96C7.98298 113.305 6.88188 113.994 6.0134 115.044C5.83505 115.251 5.74975 115.221 5.742 114.952C5.60242 110.806 5.6567 106.912 5.89709 103.279C5.91259 103.026 6.04442 102.865 6.30031 102.804C9.08408 102.137 12.2013 101.892 15.6519 102.068C16.0707 102.091 16.4041 102.421 16.4196 102.835C16.4274 102.996 16.4041 103.149 16.3498 103.287C16.1094 103.954 15.6364 104.291 14.9153 104.291C12.7984 104.291 8.96777 103.938 7.44018 104.973C6.44764 105.648 6.19175 106.805 6.66476 108.453ZM5.72649 124.732C5.80403 121.866 5.78853 118.946 5.67221 115.979C5.6567 115.696 5.74975 115.658 5.95912 115.857C6.24603 116.148 6.41662 116.508 6.45539 116.93C6.48641 117.221 6.80433 117.39 7.06798 117.252C9.61912 115.88 12.2711 114.929 15.0316 114.401C15.2952 114.355 15.4813 114.638 15.3263 114.853L15.0704 115.205C14.8998 115.451 14.6361 115.619 14.3337 115.681C11.3793 116.286 8.96001 117.466 7.07573 119.206C6.42437 119.812 6.22276 120.532 6.46315 121.383L6.5717 121.758C6.81209 122.571 7.24632 122.694 7.88993 122.134C10.224 120.088 12.6355 118.723 15.1091 118.041C15.3805 117.965 15.5124 118.064 15.4891 118.34C15.4658 118.708 15.3185 118.969 15.0471 119.13C14.1554 119.658 13.1551 120.203 12.0617 120.762C10.1387 121.735 8.54128 123.215 7.26959 125.2C6.18399 126.901 5.67221 126.748 5.72649 124.732ZM8.95226 130.427L9.04531 130.757C9.13836 131.102 9.0298 131.186 8.71188 131.01C7.53323 130.373 6.81209 129.592 6.5562 128.672C6.25378 127.606 6.61048 127.331 7.61077 127.859C7.71158 127.913 7.82789 127.951 7.94421 127.982C8.17683 128.043 8.42497 127.99 8.60332 127.829C9.9448 126.656 11.3328 125.575 12.7674 124.579C13.6203 123.989 14.2407 123.184 14.6284 122.172C14.7137 121.935 14.8688 121.751 15.0859 121.613L16.4351 120.77C16.6135 120.655 16.7375 120.701 16.7996 120.908L16.9081 121.276C16.9314 121.375 16.8849 121.467 16.7996 121.506C15.4968 122.057 14.6671 122.862 14.3027 123.92C14.2096 124.203 14.0468 124.441 13.8142 124.633C12.0385 126.143 10.4566 127.836 9.08408 129.707C8.92124 129.929 8.87472 130.166 8.95226 130.427ZM10.6582 131.899C10.5574 131.975 10.4101 131.952 10.3325 131.853L10.224 131.692C10.1929 131.653 10.2007 131.615 10.2395 131.577C11.8446 130.35 13.3101 129.04 14.6361 127.645C15.365 126.878 15.6209 125.759 16.6832 125.345C17.0089 125.215 17.0399 125.269 16.7763 125.499C16.4894 125.752 16.2335 126.043 16.0241 126.365C14.5974 128.534 12.8061 130.373 10.6582 131.899ZM14.8377 131.86C14.5353 132.305 14.2407 132.611 13.9538 132.78C13.5118 133.048 13.0775 133.14 12.6433 133.064C11.8213 132.926 11.7593 132.627 12.4494 132.159C14.4965 130.78 16.156 128.871 17.4199 126.426C17.606 126.066 17.7999 125.782 18.0015 125.583C18.3271 125.261 18.6141 125.062 18.8622 124.993C19.5988 124.786 19.7384 124.985 19.2887 125.591C17.7533 127.668 16.2723 129.753 14.8377 131.86ZM17.0555 133.508C16.9702 133.577 16.8461 133.577 16.7685 133.485L16.4816 133.163C16.4041 133.079 16.4118 132.949 16.5049 132.88L25.9883 124.763C26.0736 124.694 26.1977 124.694 26.2753 124.786L26.5622 125.108C26.6397 125.192 26.632 125.322 26.5389 125.391L17.0555 133.508ZM21.1187 133.202L20.8783 133.064C20.7465 132.995 20.731 132.91 20.8318 132.803C21.7235 131.868 22.561 131.048 23.3519 130.35C25.4068 128.534 27.2523 126.549 28.8807 124.395C29.059 124.165 29.3614 124.073 29.6406 124.165L30.2299 124.372C30.416 124.441 30.4625 124.679 30.3152 124.817C27.3453 127.415 24.3677 130.197 21.3978 133.163C21.3125 133.248 21.2195 133.255 21.1187 133.202ZM23.1193 133.37C23.0185 133.393 22.9487 133.355 22.9177 133.255L22.8479 133.064C22.8246 132.979 22.8479 132.926 22.9254 132.895C24.8097 132.152 26.2908 131.408 27.3841 130.657C30.0981 128.802 32.7811 126.671 35.433 124.257C35.6191 124.088 35.906 124.081 36.0921 124.249L36.2627 124.395C36.3635 124.487 36.3558 124.571 36.255 124.656C33.6728 126.794 31.1527 128.932 28.6791 131.071C27.5469 132.044 25.6937 132.811 23.1193 133.37ZM30.9898 133.018C30.3928 132.933 30.3152 132.68 30.7417 132.259C31.6722 131.354 32.8896 131.324 33.8822 130.481C35.4408 129.147 36.821 127.652 38.0229 125.989C38.2323 125.69 38.6278 125.368 39.2093 125.008C39.1783 124.081 39.5195 123.391 40.2329 122.946C40.4888 122.778 40.5741 122.839 40.4888 123.138C40.3104 123.713 39.884 124.341 39.2093 125.008C38.0772 127.384 34.1768 133.485 30.9898 133.018ZM37.0769 131.745C36.9063 131.577 38.7131 129.63 41.1014 127.407C43.4819 125.185 45.5523 123.521 45.7229 123.69C45.8935 123.859 44.0868 125.805 41.6985 128.028C39.3179 130.251 37.2475 131.914 37.0769 131.745ZM41.9466 132.604C41.3805 132.857 40.8377 132.926 40.3104 132.811C39.6824 132.673 39.6668 132.473 40.2484 132.213C41.2099 131.784 42.187 131.331 43.1795 130.864C44.2574 130.35 45.9555 128.871 48.2818 126.426C48.3206 126.38 48.3671 126.38 48.4136 126.418L48.5687 126.556C48.6152 126.595 48.623 126.648 48.592 126.702C46.855 129.408 44.6373 131.377 41.9466 132.604ZM47.8863 132.757C47.5994 132.719 47.3203 132.642 47.0489 132.527C46.7465 132.397 46.6922 131.998 46.9481 131.807C48.119 130.91 49.1425 129.975 50.011 129.017C51.0889 127.821 52.0504 126.84 52.9111 126.074C54.6325 124.533 56.292 122.969 57.8971 121.391C57.9281 121.36 57.9591 121.368 57.9901 121.406L58.0909 121.544C58.0909 121.544 58.1064 121.613 58.0754 121.651L48.5299 132.512C48.3671 132.696 48.1267 132.788 47.8863 132.757ZM51.1431 132.826C50.8252 132.826 50.7864 132.742 51.0268 132.535C51.9806 131.73 53.167 131.178 54.0277 130.366C57.0906 127.461 60.4172 124.893 64.0074 122.655C64.0152 122.648 64.0307 122.648 64.0385 122.655L64.1703 122.831C64.2246 122.9 64.2168 122.962 64.1548 123.015C60.7817 126.189 57.7265 129.891 53.8106 132.136C53.0739 132.558 52.19 132.788 51.1431 132.826ZM58.5019 133.018C58.3468 133.025 58.1995 132.949 58.122 132.811C58.0677 132.719 58.0522 132.619 58.0677 132.504C58.0909 132.351 58.1762 132.244 58.3158 132.175C59.4479 131.6 60.5413 131.308 61.5261 130.519C63.7128 128.741 65.7754 126.84 67.7217 124.817C67.8458 124.686 67.9776 124.671 68.1172 124.786L68.2723 124.916C68.311 124.947 68.311 124.985 68.2878 125.024C66.3802 127.691 64.2013 129.982 61.7432 131.891C60.9135 132.535 59.8357 132.91 58.5019 133.018ZM64.4029 132.834C64.054 132.918 63.9532 132.803 64.116 132.481C64.2711 132.175 64.5115 131.96 64.8449 131.837C65.0775 131.753 65.2636 131.615 65.4109 131.423C67.3107 128.932 69.4664 126.587 71.878 124.387C72.1184 124.173 72.4286 124.05 72.7542 124.05H73.0489C73.3125 124.05 73.4521 124.357 73.2815 124.556C71.3507 126.725 69.1563 128.388 67.6674 130.749C67.0238 131.761 65.9382 132.458 64.4029 132.834ZM70.7846 132.466C70.3582 132.803 69.8386 132.895 69.226 132.749C69.0012 132.696 68.9779 132.596 69.1485 132.443L79.1437 123.483C79.2058 123.429 79.229 123.437 79.2058 123.521C79.1205 123.805 78.9809 124.073 78.787 124.311C75.9335 127.767 73.266 130.488 70.7846 132.466ZM78.2287 129.967C76.2436 132.037 74.2508 133.355 73.7855 132.91L73.708 132.834C73.6615 132.788 73.6537 132.719 73.7002 132.673L80.8807 125.223C80.9195 125.177 80.997 125.177 81.0435 125.215L81.1288 125.299C81.5941 125.736 80.3534 127.76 78.3683 129.829L78.2287 129.967ZM80.0587 133.11C79.8106 133.133 79.6322 133.102 79.5159 133.002C79.4384 132.933 79.3841 132.841 79.3608 132.734C79.3221 132.512 79.4074 132.358 79.6245 132.282C81.0513 131.768 81.9585 131.37 82.354 131.071C84.0677 129.776 86.4017 127.545 89.3483 124.38C89.5422 124.173 89.8523 124.111 90.1082 124.234L90.3021 124.318C90.4262 124.38 90.4572 124.533 90.3641 124.633C88.3945 126.825 86.4715 128.917 84.5872 130.918C83.3853 132.198 81.881 132.926 80.0587 133.11ZM87.7509 133.025C87.5338 133.225 87.1926 133.217 86.991 133.002L86.9678 132.979C86.7662 132.765 86.7817 132.427 86.991 132.228L96.3427 123.552C96.5598 123.353 96.901 123.36 97.1026 123.575L97.1258 123.598C97.3274 123.813 97.3119 124.15 97.1026 124.349L87.7509 133.025ZM94.9391 132.496C94.7685 132.665 94.5282 132.757 94.2878 132.757C93.7993 132.765 93.4038 132.634 93.1169 132.366C92.9463 132.205 92.9773 131.929 93.1789 131.807C95.9317 130.128 98.4596 127.974 100.763 125.345C100.956 125.123 101.127 124.893 101.274 124.64C101.499 124.249 101.833 123.935 102.259 123.705C102.585 123.529 102.678 123.613 102.538 123.951C102.298 124.525 101.98 125.047 101.592 125.499C99.9329 127.453 97.7152 129.783 94.9391 132.496ZM97.9555 132.78C97.6686 132.765 97.6376 132.673 97.878 132.496C99.8398 131.094 101.732 129.323 103.539 127.2C104.492 126.066 105.725 125.146 106.757 124.019C106.919 123.836 107.121 123.698 107.346 123.613L108.323 123.245C108.532 123.169 108.563 123.215 108.416 123.383C105.648 126.641 102.724 129.607 99.6537 132.282C99.2272 132.65 98.6612 132.818 97.9555 132.78ZM104.027 132.995C103.771 133.025 103.639 132.91 103.639 132.657C103.639 132.581 103.663 132.504 103.701 132.435C103.74 132.374 103.81 132.32 103.911 132.282C105.392 131.699 106.291 131.239 106.602 130.902C108.3 129.024 110.215 127.4 112.332 126.012C113.759 125.085 114.472 124.081 115.612 122.908C116.023 122.479 116.426 122.019 116.814 121.536C119.179 118.593 121.59 115.726 124.995 114.109C125.212 114.002 125.468 114.033 125.654 114.194C125.941 114.439 125.894 114.676 125.514 114.906C121.04 117.627 117.457 121 114.782 125.024C114.108 126.043 113.278 126.894 112.285 127.576C110.781 128.626 109.277 129.898 107.772 131.393C106.648 132.512 105.516 132.826 104.027 132.995ZM120.582 131.73C119.435 132.443 118.535 132.719 117.884 132.558C117.326 132.42 117.295 132.205 117.783 131.906C120.544 130.212 122.924 128.005 124.917 125.269C125.08 125.039 125.251 124.947 125.421 124.993C125.553 125.031 125.623 125.169 125.576 125.299C124.483 128.204 122.816 130.343 120.582 131.73ZM125.53 123.015C121.924 125.384 118.279 128.204 114.612 131.477C113.79 132.205 112.828 132.581 111.727 132.588C111.456 132.588 111.27 132.466 111.177 132.213C111.107 132.029 111.122 131.845 111.231 131.653C111.316 131.515 111.471 131.416 111.696 131.347C112.549 131.094 113.162 131.048 113.883 130.488C117.496 127.668 121.226 124.993 125.08 122.471C125.181 122.402 125.313 122.425 125.375 122.525L125.568 122.824C125.623 122.9 125.607 122.962 125.53 123.015ZM125.964 119.681C125.956 119.727 125.933 119.766 125.902 119.789L115.395 127.131C115.333 127.177 115.248 127.162 115.201 127.108L115.023 126.901C114.968 126.84 114.976 126.74 115.038 126.694L125.84 118.164C125.941 118.079 126.096 118.156 126.08 118.286L125.964 119.681ZM126.041 108.261L118.163 110.3C117.682 110.43 117.186 110.139 117.062 109.664L117.047 109.603C116.922 109.127 117.209 108.637 117.69 108.514L125.568 106.475C126.049 106.345 126.545 106.636 126.67 107.112L126.685 107.173C126.809 107.648 126.522 108.139 126.041 108.261Z" />
				<path d="M5.47847 21.9435C5.20707 21.6829 5.73436 20.7018 6.66487 19.7591C7.59538 18.8164 8.57241 18.2645 8.84381 18.5251C9.11521 18.7857 8.58792 19.7668 7.65741 20.7095C6.7269 21.6522 5.74987 22.2041 5.47847 21.9435Z" />
				<path d="M121.676 23.4764C120.218 22.8633 120.536 20.2803 120.668 19.1613C120.699 18.893 120.846 18.7244 121.102 18.6478C121.389 18.5635 121.645 18.6018 121.87 18.7704C122.033 18.893 122.141 19.1077 122.195 19.4066C122.436 20.8092 122.498 22.2271 122.381 23.6527C122.366 23.852 122.273 23.9056 122.095 23.8213C122.025 23.7907 121.971 23.7447 121.924 23.6757C121.854 23.5914 121.777 23.5224 121.676 23.4764Z" />
				<path d="M122.017 24.3195L122.273 24.2122C122.451 24.1355 122.66 24.2352 122.73 24.4191C122.955 25.0783 122.754 25.4538 122.125 25.5535C121.513 25.6454 121.048 25.5075 120.73 25.1319C120.551 24.9097 120.575 24.718 120.799 24.5418C121.048 24.3578 121.327 24.2965 121.637 24.3578C121.769 24.3808 121.893 24.3731 122.017 24.3195Z" />
				<path d="M6.17603 26.9408C6.01319 26.9484 5.89688 26.8795 5.8426 26.7262C5.71077 26.3353 5.71077 25.9444 5.82709 25.5535C5.92789 25.2009 6.16052 25.0783 6.51722 25.1779C7.06001 25.3389 7.34692 25.6378 7.37018 26.09C7.38569 26.3966 7.27713 26.6112 7.03675 26.7338C6.82739 26.8488 6.54048 26.9178 6.17603 26.9408Z" />
				<path d="M122.94 30.4741C123.033 30.9417 122.723 31.3939 122.25 31.4858L122.079 31.5165C121.606 31.6085 121.141 31.3019 121.056 30.8344L120.792 29.4777C120.699 29.0102 121.009 28.558 121.482 28.466L121.653 28.4354C122.126 28.3434 122.591 28.65 122.676 29.1175L122.94 30.4741Z" />
				<path d="M111.665 33.6319C111.665 34.1531 111.238 34.5746 110.711 34.5746L50.9724 34.7816C50.4451 34.7816 50.0109 34.3677 50.0187 33.8388V33.1337C50.0187 32.6125 50.4451 32.191 50.9647 32.191L110.703 31.984C111.231 31.984 111.665 32.3979 111.657 32.9267V33.6319H111.665Z" />
				<path d="M38.992 33.7238C39.0153 34.3906 38.488 34.9425 37.8134 34.9655L26.7946 35.2874C26.12 35.3104 25.5617 34.7815 25.5384 34.1224V33.7545C25.5074 33.0877 26.0347 32.5358 26.7093 32.5128L37.7281 32.1909C38.4027 32.1679 38.961 32.6968 38.9843 33.3559V33.7238H38.992Z" />
				<path d="M122.831 33.7009C122.769 34.0841 122.304 34.3371 121.8 34.2604C121.288 34.1838 120.924 33.8006 120.993 33.4173C121.055 33.0341 121.521 32.7812 122.025 32.8578C122.537 32.9345 122.901 33.3177 122.831 33.7009Z" />
				<path d="M122.932 37.9853C122.947 38.1693 122.816 38.3379 122.63 38.3609L122.133 38.4222C121.598 38.4835 121.11 38.0697 121.04 37.4948L121.009 37.2342C120.939 36.6594 121.311 36.1459 121.839 36.0769L122.343 36.0156C122.529 35.9926 122.699 36.1229 122.723 36.3145L122.932 37.9853Z" />
				<path d="M121.389 41.534C121.063 41.4114 120.955 41.1891 121.055 40.8595C121.265 40.1927 121.714 39.8248 122.397 39.7558C122.722 39.7252 122.893 39.8708 122.916 40.1927L122.986 41.2198C123.002 41.465 122.816 41.6796 122.567 41.695C122.164 41.7256 121.769 41.672 121.389 41.534Z" />
				<path d="M83.0287 41.327C83.0364 41.9479 82.5324 42.4537 81.912 42.4614L52.2288 42.768C51.6007 42.768 51.0889 42.2774 51.0811 41.6643V41.6183C51.0734 40.9975 51.5774 40.4916 52.1978 40.4839L81.881 40.1774C82.5091 40.1774 83.0209 40.6679 83.0287 41.2811V41.327Z" />
				<path d="M44.3658 42.0705C44.3658 42.515 44.0169 42.8752 43.5671 42.8752L26.6008 43.0822C26.1511 43.0822 25.7866 42.7373 25.7866 42.2927V41.5723C25.7711 41.1277 26.1278 40.7675 26.5776 40.7675L43.5438 40.5605C43.9936 40.5605 44.358 40.9055 44.358 41.35V42.0705H44.3658Z" />
				<path d="M8.05259 41.7869C8.45582 41.5723 8.92107 41.9249 8.82802 42.3618L8.47908 43.979C8.3395 44.6535 7.44001 44.8297 7.04454 44.2626C6.38543 43.3275 6.72662 42.4997 8.05259 41.7869Z" />
				<path d="M123.033 45.1976L122.924 46.4086C122.893 46.7075 122.73 46.8225 122.428 46.7535C121.846 46.6079 121.373 46.6079 121.009 46.7382C120.714 46.8455 120.567 46.7459 120.575 46.4393V45.8414C120.59 45.5579 120.73 45.3969 121.009 45.3433L122.823 45.0137C122.94 44.9907 123.04 45.0827 123.033 45.1976Z" />
				<path d="M8.99854 48.1638C9.08383 48.6084 8.58756 49.0606 7.88968 49.1832C7.1918 49.3058 6.57146 49.0452 6.49391 48.6007C6.40862 48.1562 6.90489 47.704 7.60277 47.5813C8.30065 47.4587 8.92099 47.7193 8.99854 48.1638Z" />
				<path d="M89.4645 57.3075H89.2397C89.1388 57.3075 89.0923 57.3535 89.0846 57.4531C88.9527 59.9441 88.883 62.3584 88.8752 64.7114C88.8442 75.1122 88.8132 84.7158 88.7899 93.507C88.7744 98.6576 88.945 103.785 89.3094 108.897C89.3327 109.288 89.1544 109.488 88.7589 109.495L86.8358 109.526C86.4093 109.534 86.1922 109.327 86.1845 108.897C86.0216 90.9394 85.9984 73.7939 86.1147 57.4685C86.138 54.51 86.2853 51.6588 86.5722 48.9072C86.642 48.2634 87.1848 47.7805 87.8361 47.7729L108.711 47.6579C109.556 47.6502 110.261 48.317 110.292 49.1525C110.378 51.0609 110.37 53.0307 110.277 55.0618C109.703 67.7772 109.37 80.4237 109.277 93.0012C109.238 98.42 109.052 103.816 108.726 109.189C108.718 109.373 108.563 109.518 108.369 109.518L90.5656 109.503C90.3718 109.503 90.2167 109.365 90.1934 109.173C90.1081 108.414 90.0694 107.625 90.0771 106.797C90.2555 90.4105 90.1779 74.0392 89.829 57.6754C89.829 57.4378 89.7049 57.3152 89.4645 57.3075Z" />
				<path d="M61.7041 50.2946C61.7119 50.9997 61.138 51.5822 60.4247 51.5899L27.1899 52.0498C26.4688 52.0574 25.8872 51.4903 25.8795 50.7851V50.7391C25.8717 50.034 26.4455 49.4515 27.1589 49.4438L60.3936 48.984C61.1148 48.9763 61.6964 49.5435 61.7041 50.2486V50.2946Z" />
				<path d="M123.715 49.4744C123.723 49.712 123.072 49.9343 122.257 49.965C121.443 49.9956 120.769 49.8347 120.761 49.5971C120.753 49.3595 121.404 49.1372 122.219 49.1065C123.033 49.0759 123.707 49.2368 123.715 49.4744Z" />
				<path d="M122.304 51.6435C122.676 51.4825 123.025 51.4595 123.351 51.5668C123.63 51.6588 123.653 51.7891 123.42 51.9654C123.033 52.249 122.645 52.2413 122.265 51.9271C122.118 51.8121 122.125 51.7125 122.304 51.6435Z" />
				<path d="M7.87414 54.3183C7.50194 54.2954 7.23054 53.8125 7.26931 53.2453C7.30808 52.6781 7.64152 52.2336 8.01372 52.2566C8.38592 52.2796 8.65732 52.7624 8.61855 53.3296C8.57978 53.8968 8.24635 54.3413 7.87414 54.3183Z" />
				<path d="M121.513 54.533C122.451 53.9505 123.002 53.6669 123.18 53.6899C123.831 53.7665 123.955 54.0578 123.544 54.5636C122.753 55.537 122.056 55.7746 121.459 55.2841C121.125 55.0158 121.148 54.7629 121.513 54.533Z" />
				<path d="M8.47914 57.07C8.63422 56.9933 8.82033 57.0547 8.89787 57.2079L8.93664 57.2846C9.2313 57.8901 8.9599 58.6335 8.3163 58.9401L8.13795 59.0321C7.49435 59.3463 6.72668 59.1087 6.43202 58.5033L6.39325 58.4266C6.3157 58.2733 6.37774 58.0894 6.53282 58.0204L8.47914 57.07Z" />
				<path d="M123.11 58.5952C122.622 58.9631 122.079 59.1087 121.49 59.0397C121.203 59.0014 121.141 58.8634 121.288 58.6258C121.955 57.5835 122.854 57.2309 123.994 57.5605C124.281 57.6448 124.351 57.8134 124.219 58.074C124.103 58.2963 123.917 58.4036 123.645 58.4112C123.451 58.4189 123.273 58.4802 123.11 58.5952Z" />
				<path d="M44.3113 59.0091C44.319 59.6069 43.8383 60.1051 43.2257 60.1128L27.7017 60.3504C27.0968 60.358 26.5928 59.8752 26.5851 59.2773V59.216C26.5773 58.6182 27.0581 58.12 27.6706 58.1123L43.1947 57.8747C43.7995 57.8671 44.3035 58.3499 44.3113 58.9478V59.0091Z" />
				<path d="M115.62 60.0361C115.356 60.1434 115.069 59.9212 115.123 59.6376L115.232 59.0244C115.286 58.7025 115.534 58.4496 115.852 58.3806C116.558 58.2273 117.248 58.258 117.93 58.4726C118.21 58.5569 118.31 58.7408 118.241 59.0244L118.186 59.239C118.117 59.5226 117.938 59.6146 117.667 59.5149C117.395 59.4153 116.713 59.5916 115.62 60.0361Z" />
				<path d="M78.4301 108.491C78.4612 108.744 78.3448 108.897 78.0889 108.951C77.4298 109.081 76.5769 109.158 75.5223 109.189C69.0785 109.373 62.6037 109.403 56.0901 109.273C55.9583 109.273 55.8885 109.204 55.8885 109.066L55.462 61.3391C55.4543 60.657 55.7877 60.2431 56.4623 60.0821C58.8429 59.5379 60.921 59.1087 63.4334 59.1624C67.9386 59.262 72.4283 59.308 76.9025 59.3157C78.4612 59.3157 79.2211 60.0898 79.1668 61.6303C78.7481 73.5333 78.2828 107.119 78.4301 108.491Z" />
				<path d="M125.173 62.2052C125.212 62.4351 125.049 62.6574 124.816 62.6957L121.11 63.2936C120.869 63.3319 120.652 63.1786 120.613 62.941L120.59 62.7877C120.551 62.5578 120.714 62.3355 120.947 62.2972L124.653 61.6993C124.894 61.661 125.111 61.8143 125.15 62.0519L125.173 62.2052Z" />
				<path d="M8.92897 63.1786C9.02978 63.5465 8.56452 63.9833 7.8899 64.1673C7.22304 64.3436 6.59494 64.1903 6.48638 63.83C6.38558 63.4622 6.85083 63.0253 7.52545 62.8413C8.19232 62.665 8.82041 62.8183 8.92897 63.1786Z" />
				<path d="M7.77343 65.8765C8.06034 65.8995 8.32399 65.9608 8.55661 66.0681C8.797 66.1831 8.82026 66.505 8.60314 66.6506C8.1689 66.9418 7.6261 67.0108 6.9825 66.8652C6.68008 66.7962 6.55602 66.6046 6.59479 66.2827C6.63356 66.0144 6.78864 65.8688 7.06004 65.8612C7.30042 65.8535 7.53305 65.8535 7.77343 65.8765Z" />
				<path d="M9.33995 71.1574C9.42525 71.5099 9.20813 71.8702 8.85143 71.9545L6.74228 72.468C6.38558 72.5523 6.02113 72.3377 5.93583 71.9851L5.91257 71.8932C5.82727 71.5406 6.04439 71.1804 6.40109 71.096L8.51025 70.5825C8.86694 70.4982 9.23139 70.7128 9.31669 71.0654L9.33995 71.1574Z" />
				<path d="M26.4225 72.0847C28.1982 71.6479 29.9895 71.4102 31.804 71.3873C36.2549 71.3336 40.7214 71.3336 45.1956 71.4026C47.6226 71.4409 48.8323 72.5446 48.8168 74.7213C48.747 85.0837 48.6229 96.182 48.4291 108.008C48.4136 108.667 48.0724 109.012 47.4133 109.035C40.6593 109.319 33.5487 109.388 26.0813 109.227C25.6549 109.219 25.3137 108.874 25.3214 108.461L25.5696 73.1501C25.5696 72.6442 25.9263 72.2074 26.4225 72.0847Z" />
				<path d="M7.24616 77.4653C6.98251 77.5342 6.84294 77.4423 6.82743 77.174L6.75764 76.17C6.74213 75.917 6.8662 75.7944 7.12209 75.7944C8.2387 75.7867 9.41735 75.8557 10.6658 76.0013C10.8286 76.0243 10.9372 76.078 10.9915 76.1776C11.0845 76.3386 11.038 76.4459 10.8596 76.4919L7.24616 77.4653Z" />
				<path d="M6.84309 79.6343C8.89021 79.481 10.8908 79.2357 12.9302 79.5653C13.1318 79.596 13.2714 79.6649 13.3412 79.7646C13.3954 79.8489 13.4187 79.9485 13.4109 80.0482C13.3954 80.2551 13.2869 80.3624 13.0775 80.3701C11.4103 80.4161 8.20009 80.3701 6.78106 81.2898C6.54068 81.4431 6.4011 81.3818 6.34682 81.1059C6.27703 80.738 6.27703 80.3854 6.35457 80.0558C6.40885 79.7952 6.57169 79.6573 6.84309 79.6343Z" />
				<path d="M7.06768 83.6199C10.8207 83.1293 13.1238 82.9377 13.969 83.0374C14.7056 83.1217 14.7444 83.4283 14.0775 83.9418C13.9922 84.0108 13.8837 84.0568 13.7751 84.0721L6.22247 85.3214C5.85026 85.3827 5.7417 85.2447 5.90454 84.9075L6.23022 84.233C6.39306 83.8728 6.67221 83.6735 7.06768 83.6199Z" />
				<path d="M6.12972 89.7132C6.24603 89.0387 6.47866 88.3949 6.81985 87.7817C6.94391 87.5595 7.13777 87.4521 7.39366 87.4521H15.3495C15.4969 87.4521 15.6209 87.5748 15.6287 87.7204V87.9427C15.6364 88.096 15.5589 88.1879 15.4116 88.2109C13.7677 88.5022 12.496 88.7858 10.6194 88.7628C8.98328 88.7398 7.47896 89.1843 6.0987 90.0887C5.9126 90.219 5.85832 90.1884 5.94362 90.0044C5.96688 89.9738 5.99014 89.9431 6.02116 89.9048C6.08319 89.8435 6.12196 89.7822 6.12972 89.7132Z" />
			</g>
			<defs>
				<clipPath id="clip0_2186_2174">
					<rect
						width="130"
						height="140"
						fill="white"
						transform="translate(0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}