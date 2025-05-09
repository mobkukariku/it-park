import { z } from 'zod'

export const feedbackSchema = z.object({
	name: z
		.string()
		.min(1, 'Имя обязательно для заполнения')
		.max(100, 'Имя не должно превышать 100 символов'),
	lastName: z
		.string()
		.min(1, 'Фамилия обязательна для заполнения')
		.max(100, 'Фамилия не должна превышать 100 символов'),
	email: z.string().email('Некорректный формат email'),
	phone: z
		.string()
		.regex(/^(\+?[0-9]*)$/, "Телефон может содержать только цифры и знак '+'")
		.max(15, 'Номер телефона не должен превышать 15 символов'),
	message: z
		.string()
		.min(1, 'Сообщение обязательно для заполнения')
		.max(1000, 'Сообщение не должно превышать 1000 символов'),
})

export type FeedbackFormValues = z.infer<typeof feedbackSchema>
