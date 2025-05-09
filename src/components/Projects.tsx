import { BarChart2, Briefcase, Code } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
	return (
		<section className='bg-gray-50 py-6 md:py-16'>
			<div className='container mx-auto px-6 max-w-7xl lg:px-16'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-extrabold text-gray-800 mb-4'>
						О наших проектах
					</h2>
					<p className='text-md text-gray-600 mb-8'>
						Мы разрабатываем высококачественные программные решения для
						различных сфер, сосредоточив внимание на инновационных подходах и
						результатах.
					</p>
				</div>

				<div className='bg-white flex flex-col items-center shadow-lg rounded-lg p-8 mb-12'>
					<h3 className='text-2xl self-start font-semibold text-gray-800 mb-4 flex items-center'>
						<Briefcase className='mr-4 text-sky-700' size={32} />
						Общее описание
					</h3>
					<p className='text-gray-600 mb-2 md:mb-8'>
						Мы разрабатываем широкие программные решения, включая
						веб-приложения, платформы для управления данными и аналитики, а
						также системы, ориентированные на оптимизацию бизнес-процессов и
						повышение производительности.
					</p>
					<hr className='translate-y-6' />
					<hr />

					<div className='flex flex-col lg:grid lg:grid-cols-3 gap-8 mb-12 mt-8'>
						<div className='flex flex-col gap-4 items-center'>
							<Code className='text-sky-700' size={48} />
							<h4 className='text-xl font-semibold text-gray-800'>
								Разработка
							</h4>
							<p className='text-gray-500 text-center'>
								Создаем адаптивные веб-приложения с использованием современных
								технологий, обеспечивая быстрый и удобный пользовательский
								интерфейс.
							</p>
							<hr className='translate-y-4' />
						</div>
						<div className='flex flex-col gap-4 items-center'>
							<BarChart2 className='text-sky-700' size={48} />
							<h4 className='text-xl font-semibold text-gray-800'>Аналитика</h4>
							<p className='text-gray-500 text-center'>
								Предоставляем мощные решения для обработки и анализа данных с
								целью улучшения принятия решений и стратегического планирования.
							</p>
							<hr className='translate-y-4' />
						</div>
						<div className='flex flex-col items-center gap-4'>
							<Briefcase className='text-sky-700' size={48} />
							<h4 className='text-xl font-semibold text-center text-gray-800'>
								Научные исследования
							</h4>
							<p className='text-gray-500 text-center'>
								Используем методы машинного обучения и статистического анализа
								для решения сложных задач, извлекая ценные инсайты и прогнозируя
								тенденции на основе данных.
							</p>
						</div>
					</div>

					<Link to='/projects'>
						<button className='px-8 mx-4 py-3 flex-1 self-auto text-sm md:text-lg text-nowrap bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition duration-300'>
							Перейти на страницу проектов
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Projects
