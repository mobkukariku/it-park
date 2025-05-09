import { Album, Menu, SquareChartGantt } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/file.png'
import ContactButton from './ContactButton'

const Navbar = () => {
	const location = useLocation()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(prev => !prev)

	return (
		<header className=' bg-gray-50 border'>
			<div className='flex items-center justify-between px-6 md:px-10 lg:px-[120px] max-h-24'>
				<Link to='/' className='cursor-pointer'>
					<img
						src={logo}
						className='max-h-56 w-32 md:w-40 object-contain -translate-x-10 md:-translate-x-14'
						alt='Logo'
					/>
				</Link>

				<nav className='hidden md:flex space-x-6 lg:space-x-12 font-inter text-sky-900 font-medium'>
					<Link
						to='/courses'
						className={`transition flex items-center gap-2 px-3 py-2 rounded-md ${
							location.pathname === '/courses'
								? 'bg-sky-700 text-white'
								: 'hover:bg-sky-700 hover:text-white'
						}`}
					>
						<Album
							className={`${
								location.pathname === '/courses' ? 'text-white' : ''
							}`}
						/>
						Курсы
					</Link>
					<Link
						to='/projects'
						className={`transition flex items-center gap-2 px-3 py-2 rounded-md ${
							location.pathname === '/projects'
								? 'bg-sky-700 text-white'
								: 'hover:bg-sky-700 hover:text-white'
						}`}
					>
						<SquareChartGantt
							className={`${
								location.pathname === '/projects' ? 'text-white' : ''
							}`}
						/>
						Проекты
					</Link>
					<ContactButton />
				</nav>

				<div className='md:hidden'>
					<Menu
						onClick={toggleMenu}
						className='cursor-pointer text-sky-900 mr-2'
						size={38}
					/>
				</div>
			</div>

			{isMenuOpen && (
				<div className='md:hidden bg-gray-50 border border-1'>
					<nav className='flex flex-col space-y-4 px-2 py-4'>
						<Link
							to='/courses'
							className={`transition flex items-center gap-2 px-3 py-2 rounded-md ${
								location.pathname === '/courses'
									? 'bg-sky-700 text-white'
									: 'hover:bg-sky-700 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							<Album
								className={`${
									location.pathname === '/courses' ? 'text-white' : ''
								}`}
							/>
							Курсы
						</Link>
						<Link
							to='/projects'
							className={`transition flex items-center gap-2 px-3 py-2 rounded-md ${
								location.pathname === '/projects'
									? 'bg-sky-700 text-white'
									: 'hover:bg-sky-700 hover:text-white'
							}`}
							onClick={() => setIsMenuOpen(false)}
						>
							<SquareChartGantt
								className={`${
									location.pathname === '/projects' ? 'text-white' : ''
								}`}
							/>
							Проекты
						</Link>
						<ContactButton />
					</nav>
				</div>
			)}
		</header>
	)
}

export default Navbar
