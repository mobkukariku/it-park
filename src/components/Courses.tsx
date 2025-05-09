import {
  BarChart3,
  BookOpen,
  MessageSquareText,
  ChartLine,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Natural Language Processing",
    description:
      "Наш курс по Natural Language Processing разработан для того, чтобы вы могли освоить навыки обработки естественного языка и стать уверенным компетентным профессионалом в этой области.",
    icon: <BookOpen size={40} className="text-sky-700" />,
  },
  {
    id: 2,
    title: "Data Science",
    description:
      "Мы предоставляем программу по направлению Data Science, которая поможет получить знания в этой области, создать собственные проекты и стать компетентным специалистом.",
    icon: <BarChart3 size={40} className="text-sky-700" />,
  },
  {
    id: 3,
    title: "Data Science 2.0",
    description:
      "Курс охватывает темы сбора, очистки, анализа и визуализацию данных с использованием Python, SQL, MS Excel и Power BI, включая методыискусственного интеллекта.",
    icon: <ChartLine size={40} className="text-sky-700" />,
  },
  {
    id: 4,
    title: "NLP 2.0",
    description:
      "Курс предназначен для специалистов в ML, разработчиков и исследователей, охватывая весь спектр NLP — от классических методов до передовых моделей, включая GPT и RAG, с упором на теорию и практическую реализацию.",
    icon: <MessageSquareText size={40} className="text-sky-700" />,
  },
];

const Courses = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-12 flex flex-col items-center gap-2 md:gap-4">
          <h2 className="text-3xl md:text-4xl  font-extrabold text-gray-800 mb-2">
            Наши Курсы 
          </h2>
          <p className="text-lg text-gray-600">
            Освойте новые навыки и станьте профессионалом в IT индустрии.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-center bg-gray-50 p-6">
                {course.icon}
              </div>

              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Link to="/courses">
                  <button className="px-6 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition">
                    Узнать подробнее
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
