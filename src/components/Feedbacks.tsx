// import {
// 	ChevronDown,
// 	ChevronUp,
// 	MessageCircleReply,
// 	MessageSquareQuote,
// } from 'lucide-react'
// import { useState } from 'react'
// import { feedbacks } from '../data/feedbacks'

// const Feedbacks = () => {
// 	const [visibleCount, setVisibleCount] = useState(8)
// 	const itemsPerPage = 8

// 	const handleShowMore = () => {
// 		setVisibleCount(prev => prev + itemsPerPage)
// 	}

// 	const handleHide = () => {
// 		setVisibleCount(itemsPerPage)
// 	}

// 	const isMoreAvailable = visibleCount < feedbacks.length

// 	return (
// 		<section className='px-8 md:px-32 py-6 md:py-16 bg-gray-50 flex flex-col items-center'>
// 			<div className='bg-gray-200 flex pl-5 pr-5 py-3 gap-5 items-center justify-between h-[38px] min-w-40 rounded-md mb-4'>
// 				<div className='h-[10px] w-[10px] rounded-full bg-sky-700'></div>
// 				<p className='font-inter text-[16px]'>Что о нас говорят</p>
// 			</div>
// 			<h2 className='text-3xl md:text-4xl  font-bold text-center mb-8 text-gray-800 flex items-center gap-3'>
// 				Отзывы студентов
// 				<MessageSquareQuote
// 					size={32}
// 					className='text-sky-700 translate-y-[2px]'
// 				/>
// 			</h2>
// 			<p className='text-center text-gray-600 max-w-3xl mx-auto mb-12'>
// 				Прочитайте, что говорят наши студенты об их опыте обучения с нами.
// 			</p>

// 			<div className='relative'>
// 				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
// 					{feedbacks.slice(0, visibleCount).map((item, index) => (
// 						<div
// 							key={index}
// 							className='bg-white p-6 rounded-lg shadow-lg h-64 overflow-hidden flex flex-col'
// 						>
// 							<div className='flex items-center mb-4 gap-2'>
// 								<div className='bg-sky-700 text-white p-[10px] rounded-full'>
// 									<MessageCircleReply size={18} />
// 								</div>

// 								<h3 className='text-xl font-semibold text-gray-800'>
// 									{item.name} {item.surname}
// 								</h3>
// 							</div>
// 							<hr />
// 							<p className='text-gray-700 mt-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
// 								{item.message}
// 							</p>
// 						</div>
// 					))}
// 				</div>
// 				{isMoreAvailable && visibleCount >= itemsPerPage && (
// 					<div className='absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none'></div>
// 				)}
// 			</div>

// 			<div className='mt-12 flex justify-center space-x-2'>
// 				{isMoreAvailable && (
// 					<button
// 						onClick={handleShowMore}
// 						className='flex items-center space-x-3 text-sky-700 px-4 py-2 rounded-full'
// 					>
// 						<div className='bg-sky-700 p-2 rounded-full'>
// 							<ChevronDown size={20} className='text-white' />
// 						</div>
// 						<span className='hidden sm:block'>Показать больше</span>
// 					</button>
// 				)}
// 				{visibleCount > itemsPerPage && (
// 					<button
// 						onClick={handleHide}
// 						className='flex items-center space-x-2 text-gray-600 px-4 py-2'
// 					>
// 						<div className='bg-gray-400 p-2 rounded-full'>
// 							<ChevronUp size={20} className='text-white' />
// 						</div>
// 						<span className='hidden sm:block'>Скрыть</span>
// 					</button>
// 				)}
// 			</div>
// 		</section>
// 	)
// }

// export default Feedbacks
