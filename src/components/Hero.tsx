import backgroundImage from '../assets/_DSF6417.jpg'

const Hero = () => {
	return (
		<div className='relative flex justify-center w-full h-[600px] mt-3'>
			<div
				className='relative w-[90%] md:w-[84%] h-[90%] bg-cover bg-center rounded-xl shadow-xl'
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className='absolute inset-0 bg-sky-950 rounded-xl bg-opacity-80'></div>

				<div className='relative flex flex-col items-center justify-center h-full font-inter text-center text-white px-4'>
					<h1 className='text-4xl sm:text-5xl md:text-[60px] font-extrabold mb-6 tracking-wide text-shadow'>
						SDU IT Park
					</h1>
					<p className='text-md sm:text-md md:text-xl max-w-2xl leading-relaxed opacity-90'>
						Мы обучаем программированию и создаём инновационные software
						продукты. Присоединяйтесь, чтобы улучшить свои навыки и начать путь
						к успеху!
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
