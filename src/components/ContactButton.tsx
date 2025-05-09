import { Phone } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const ContactButton = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const handleNavigation = (e: React.MouseEvent) => {
		e.preventDefault()

		if (location.pathname !== '/') {
			navigate('/')
		}

		setTimeout(() => {
			const feedbackSection = document.getElementById('feedback')
			if (feedbackSection) {
				feedbackSection.scrollIntoView({ behavior: 'smooth' })
			}
		}, 100)
	}


	return (
		<a
			href='#feedback'
			onClick={handleNavigation}
			className='transition flex items-center gap-2 px-3 py-2 rounded-md hover:bg-sky-700 hover:text-white active:bg-sky-700 active:text-white'
		>
			<Phone className='hover:text-white active:text-white' />
			Свяжитесь с нами
		</a>
	)
}

export default ContactButton
