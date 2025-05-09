import { Building2Icon, ExternalLink, XCircle } from 'lucide-react'
import { useState } from 'react'
import sc4 from '../assets/1752d48d-5cad-4fc9-94e6-85799f8fb2fb.jpg'
import sc1 from '../assets/28595ed8-b157-4c23-93b3-47a8e731e6e9.jpg'
import sc5 from '../assets/476d1429-ee16-43f1-a8b6-2a8960fc5891.jpg'
import sc2 from '../assets/4dd70e39-6d80-43d2-8fdc-d0001c94b025.jpg'
import sc3 from '../assets/59f97690-6977-48ed-8a08-89fc4c90762f.jpg'

const ProjectPage = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const [modalImage, setModalImage] = useState('')

	const openModal = (image: string) => {
		setModalImage(image)
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
		setModalImage('')
	}

	return (
		<div className='bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold text-center mb-16 flex items-center justify-center gap-4'>
					Сайт для акимата города Алматы
					<Building2Icon size={32} className='text-sky-700' />
				</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
					{[sc1, sc2, sc3, sc4, sc5].map((image, index) => (
						<div
							key={index}
							className='relative w-full rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform'
							onClick={() => openModal(image)}
						>
							<img
								src={image}
								alt={`Screenshot ${index + 1}`}
								className='w-full h-full object-cover'
							/>
						</div>
					))}
				</div>

				<div className='bg-gray-50 p-8 rounded-lg shadow-md mb-12'>
					<h3 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
						Подробнее
					</h3>
					<p className='text-md text-gray-600 mb-6 leading-relaxed'>
						Этот сайт предназначен для пользователей города Алматы и включает
						важную информацию о деятельности Акимата города, его новостях и
						текущих проектах. Наш сайт обеспечивает доступность информации и
						интерактивные элементы для граждан.
					</p>
					<a
						href='https://almatyatau.kz/'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 bg-sky-700 text-white text-md font-semibold py-3 px-6 rounded-[10px] hover:bg-sky-800 transition-all duration-300'
					>
						Перейти на сайт
						<ExternalLink size={20} />
					</a>
				</div>
			</div>

			{modalOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
					<div className='relative bg-white p-10 rounded-lg shadow-xl'>
						<button
							className='absolute top-2 right-2 text-gray-700 hover:text-red-600 transition'
							onClick={closeModal}
						>
							<XCircle size={32} />
						</button>
						<img
							src={modalImage}
							alt='Modal Preview'
							className='max-w-full max-h-screen object-contain rounded-lg'
						/>
					</div>
				</div>
			)}
		</div>
	)
}

export default ProjectPage
