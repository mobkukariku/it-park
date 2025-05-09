import { api } from '../controllers/api'
import { IFeedback } from '../types'

class FeedbackService {
	async sendFeedback(data: IFeedback): Promise<void> {
		try {
			await api.post('/feedback', data)
			console.log('Feedback successfully sent!')
		} catch (error) {
			console.error('Failed to send feedback:', error)
			throw error
		}
	}
	async getFeedbacks(): Promise<IFeedback[]> {
		try {
			const response = await api.get('/feedback')
			console.log('Feedbacks successfully fetched!')
			return response.data
		} catch (error) {
			console.error('Failed to fetch feedbacks:', error)
			throw error
		}
	}
}

export const feedbackService = new FeedbackService()
