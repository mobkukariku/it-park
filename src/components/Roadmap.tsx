const steps = [
  {
    title: "Онлайн лекции",
    description:
      "Изучение ключевых тем через короткие и содержательные видеоуроки.",
  },
  {
    title: "Тестовые задания",
    description:
      "Закрепление знаний с помощью интерактивных тестов и проверочных заданий.",
  },
  {
    title: "Дополнительные материалы",
    description:
      "Расширение понимания темы благодаря дополнительным статьям и полезным ресурсам.",
  },
  {
    title: "Проектная работа",
    description:
      "Применение полученных знаний на практике в формате мини-проектов.",
  },
  {
    title: "Доступ к гостевым лекциям в SDU University",
    description:
      "Вдохновение и новые знания от приглашённых экспертов и преподавателей SDU.",
  },
  {
    title: "Финальный проект",
    description:
      "Завершение обучения реализацией итогового проекта для демонстрации своих компетенций.",
  },
];

const Roadmap = () => {
  return (
    <div className="relative max-w-3xl mx-auto p-4 sm:p-6">
      <div className="hidden md:block absolute top-0 left-1/2 w-1 h-[83%] mt-10 bg-gray-300 transform -translate-x-1/2" />

      <div className="md:hidden absolute top-0 left-[14px] sm:left-[22px] w-1 h-[82%] sm:h-[80%] md:h-[95%] mt-8 sm:mt-10 bg-gray-300" />

      <div className="space-y-8 md:space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row md:items-start"
          >
            <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
              {index % 2 === 0 ? (
                <>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </>
              ) : null}
            </div>

            <div className="relative">
              <div className="md:hidden absolute -left-4 top-1 w-4 h-4 bg-black rounded-full transform translate-x-1/2" />
              <div className="hidden md:block w-4 h-4 bg-black rounded-full absolute left-1/2 top-1 transform -translate-x-1/2" />
            </div>

            <div className="pl-6 md:pl-8 md:w-1/2 md:text-left">
              <div className="md:hidden">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>

              <div className="hidden md:block">
                {index % 2 !== 0 ? (
                  <>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
