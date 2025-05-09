import { BookOpen, ClipboardList, GraduationCap, Users } from 'lucide-react'

const LearningFormat = () => {
	return (
		<section id='format' className='py-16 px-4 md:px-16 lg:px-20 bg-white'>
			<div className='max-w-6xl mx-auto flex flex-col items-center gap-4'>
				

				<h2 className='text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4'>
					Формат обучения
					<GraduationCap size={34} className='mt-1 text-sky-700' />
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-2 md:mt-12'>
					<div className='flex flex-col gap-2 items-center text-center bg-gray-50 p-6 shadow-md rounded-lg'>
						<Users size={36} className='text-sky-700 mb-4' />
						<p className='text-md text-gray-600 leading-relaxed'>
							Все наши курсы вы можете проходить онлайн и участвовать в
							групповых заданиях.
						</p>
					</div>

					<div className='flex flex-col gap-2 items-center text-center bg-gray-50 p-6 shadow-md rounded-lg'>
						<BookOpen size={36} className='text-sky-700 mb-4' />
						<p className='text-md text-gray-600 leading-relaxed'>
							Курсы предлагают возможность взаимодействия с опытными
							преподавателями и другими студентами.
						</p>
					</div>

					<div className='flex flex-col gap-2 items-center text-center bg-gray-50 p-6 shadow-md rounded-lg'>
						<ClipboardList size={36} className='text-sky-700 mb-4' />
						<p className='text-md text-gray-600 leading-relaxed'>
							Вы сможете применить полученные знания на практике и развить свои
							навыки через выполнение групповых заданий.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LearningFormat
