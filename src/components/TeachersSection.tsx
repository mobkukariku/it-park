import { GraduationCap } from "lucide-react";
import elnuraTeacher from "../assets/elnuraTeacher.jpeg";
import ardaqTeacher from "../assets/ardaqTeacher.jpeg";
import moreLinkedIn from "../assets/moreLinkedIn.svg";

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-16 px-4 md:px-16 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3 mb-4">
          Наши преподаватели
          <GraduationCap size={34} className="mt-1 text-sky-700" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2 md:mt-12">
          {/* Teacher 1 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 shadow-md rounded-lg">
            <img
              src={elnuraTeacher}
              alt="Teacher 1"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h1 className="text-[24px] font-semibold text-[#1F2937]">
              Эльнура Набигазинова
            </h1>
            <a
              href="https://www.linkedin.com/in/elnura-nabigazinova/"
              className="text-md text-[#0369A1] leading-relaxed flex items-center  mb-4"
            >
              <img src={moreLinkedIn} alt="" className="w-6 mr-0.5" />
              LinkedIn profile
            </a>
            <p className="text-md text-gray-600 leading-relaxed">
              Директор SDU IT PARK, Директор SDU Technopark Магистр Компьютерных
              Наук, Старший преподаватель в Бизнес школе и лектор дисциплин:
              Python и Machine Learning и Big Data Analysis. Ведение
              коммерческих проектов software разработки в SDU IT PARK. Контроль
              и мониторинг проектов в SDU Technopark. Преподаватель курса Data
              Science, DS 2.0 по программе Techorda от AstanaHUB.
            </p>
          </div>

          {/* Teacher 2 */}
          <div className="flex flex-col items-center text-center bg-gray-50 p-6 shadow-md rounded-lg">
            <img
              src={ardaqTeacher}
              alt="Teacher 2"
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h1 className="text-[24px] font-semibold text-[#1F2937]">
              Ардак Шалкарбайулы
            </h1>
            <a
              href="https://www.linkedin.com/in/ardak-shalkarbayuli-41487539/"
              className="text-md text-[#0369A1] leading-relaxed flex items-center mb-4"
            >
              <img src={moreLinkedIn} alt="" className="w-6 mr-0.5" />
              LinkedIn profile
            </a>
            <p className="text-md text-gray-600 leading-relaxed">
              Проектный менеджер по AI, руководил и выполнил несколько проектов
              в сфере AI, Старший преподаватель с опытом более 15 лет на IT
              специальностях. Сфера интересов Deep Learning , Artificial
              Intelligence, Large Language Models. Преподаватель курса Natural
              Language Processing, NLP 2.0 по программе Techorda oт AstanaHUB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
