import { Clock, GraduationCap, HelpCircle, Laptop } from 'lucide-react'

const FAQ = () => {
	return (
		<section className='py-16 px-6 md:px-16 bg-gray-100'>
			<div className='max-w-6xl mx-auto flex flex-col items-center gap-4'>
				
				<h2 className='text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4'>
					FAQ
				</h2>
				<p className='text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12'>
					Ниже приведены часто задаваемые вопросы, которые помогут вам понять,
					как начать обучение и чего ожидать от наших курсов.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='bg-white shadow-lg rounded-lg p-6 flex items-start gap-4'>
						<div className='bg-sky-700 text-white p-3 rounded-full'>
							<Laptop size={20} />
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-800 mb-2'>
								Требуется ли мне компьютер?
							</h3>
							<p className='text-gray-600'>
								Вы выбираете программу обучения в режиме online – поэтому вам
								необходимо иметь компьютер, соответствующий техническим
								характеристикам проходимого курса.
							</p>
						</div>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-6 flex items-start gap-4'>
						<div className='bg-sky-700 text-white p-3 rounded-full'>
							<Clock size={20} />
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-800 mb-2'>
								Сколько времени потребуется для обучения?
							</h3>
							<p className='text-gray-600'>
								Продолжительность одного урока составляет 2 часа. Занятия
								проводятся 2 раза в неделю.
							</p>
						</div>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-6 flex items-start gap-4'>
						<div className='bg-sky-700 text-white p-3 rounded-full'>
							<GraduationCap size={20} />
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-800 mb-2'>
								Что мне нужно знать для участия на курсах?
							</h3>
							<p className='text-gray-600'>
								Наши программы разработаны для новичков и продолжающих. Если у
								вас нет каких-либо предварительных знаний или опыта в
								программировании – ничего страшного.
							</p>
						</div>
					</div>

					<div className='bg-white shadow-lg rounded-lg p-6 flex items-start gap-4'>
						<div className='bg-sky-700 text-white p-3 rounded-full'>
							<HelpCircle size={20} />
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-800 mb-2'>
								Какой курс мне выбрать?
							</h3>
							<p className='text-gray-600'>
								Мы поможем вам подобрать курс с учетом возраста, интересов и
								уровня подготовки.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FAQ
