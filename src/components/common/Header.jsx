const Header = ({ title }) => {
	return (
		<header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>


			<nav class="bg-white border-gray-200 dark:bg-gray-900">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<p class="flex items-center space-x-3 rtl:space-x-reverse">

						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
					</p>
					<div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
							<span class="sr-only">Open user menu</span>
							<img class="w-15 h-15 rounded-full" src="logo.jpg" alt="user photo" />
						</button>


					</div>


				</div>
			</nav>

			{/* <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
				<h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
			</div>
			<div class="lg:flex lg:flex-1 lg:justify-end items-center">
				<img class="size-8 rounded-full" src="logo.jpg" alt="logo" />
			</div> */}
		</header >
	);
};
export default Header;
