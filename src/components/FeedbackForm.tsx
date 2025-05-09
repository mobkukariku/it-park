import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import toast from "react-hot-toast";
import { FeedbackFormValues, feedbackSchema } from "../schemas/formSchema";

const FeedbackForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      const response = await fetch("https://it-park.onrender.com/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          surname: data.lastName,
          phone: data.phone,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error");
      }

      const result = await response.json();
      console.log("Server response:", result);

      toast.success("Успешно отправлено!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при отправке запроса!");
    }
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div
        id="feedback"
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <Send className="text-sky-700 translate-y-[2px]" size={26} />
          Свяжитесь с нами
        </h2>
        <p className="text-gray-600 mb-6">
          Мы всегда рады вашим отзывам и вопросам. Пожалуйста, заполните форму
          ниже, чтобы оставить отзыв, задать вопрос или обсудить с нами проекты.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <User
                className="mr-2 bg-sky-700 text-white p-1 rounded"
                size={20}
              />
              Имя
            </label>
            <input
              {...register("name")}
              type="text"
              autoComplete="given-name"
              placeholder="Введите ваше имя"
              aria-invalid={errors.name ? "true" : "false"}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <Edit
                className="mr-2 bg-sky-700 text-white p-1 rounded"
                size={20}
              />
              Фамилия
            </label>
            <input
              {...register("lastName")}
              type="text"
              autoComplete="family-name"
              placeholder="Введите вашу фамилию"
              aria-invalid={errors.lastName ? "true" : "false"}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <Phone
                className="mr-2 bg-sky-700 text-white p-1 rounded"
                size={20}
              />
              Телефон
            </label>
            <input
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              placeholder="Введите ваш телефон"
              aria-invalid={errors.phone ? "true" : "false"}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <Mail
                className="mr-2 bg-sky-700 text-white p-1 rounded"
                size={20}
              />
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="Введите ваш email"
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <MessageSquare
                className="mr-2 bg-sky-700 text-white p-1 rounded"
                size={20}
              />
              Сообщение
            </label>
            <textarea
              {...register("message")}
              placeholder="Напишите ваше сообщение"
              rows={4}
              aria-invalid={errors.message ? "true" : "false"}
              className={`w-full px-4 py-2 border rounded-lg resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-sky-700 text-white py-3 px-4 rounded-lg hover:bg-sky-800 transition duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Отправка..." : "Отправить сообщение"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
