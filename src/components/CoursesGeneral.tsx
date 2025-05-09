import {
  Album,
  BrainCircuit,
  Languages,
  Database,
  FileChartColumn,
} from "lucide-react";
import SquareCourseCard from "./ui/SquareCourseCards";

const CoursesGeneral = () => {
  return (
    <section className="py-6 md:py-16 px-4 md:px-16 lg:px-8 bg-gray-50 min-h-[610px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-center lg:items-start justify-between gap-3">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4">
              Страница Курсов
              <Album size={32} className="text-sky-700" />
            </h2>

            <p className="text-[16px] mt-2 text-center lg:text-start text-gray-600 leading-relaxed max-w-[500px]">
              Изучайте наши специализированные курсы, разработанные для того,
              чтобы помочь вам освоить современные технологии и стать уверенными
              профессионалами в области программирования и разработки
              программного обеспечения.
            </p>
          </div>
          <button className="text-[16px] bg-sky-700 justify-self-end hover:bg-sky-800 text-white py-3 px-5 rounded-[10px] mt-4">
            <a href="#format">Как мы обучаем?</a>
          </button>
        </div>

        <div className="px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-8 gap-y-5 sm:gap-y-10 place-items-center">
            <SquareCourseCard
              title="Natural Language Processing"
              Icon={Languages}
            />
            <SquareCourseCard title="Data Science" Icon={Database} />
            <SquareCourseCard title="Data Science 2.0" Icon={FileChartColumn} />
            <SquareCourseCard title="NLP 2.0" Icon={BrainCircuit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesGeneral;
