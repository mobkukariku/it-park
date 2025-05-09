import { Album } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-6 md:py-16 px-4 md:px-16 lg:px-8 bg-gray-50 min-h-[610px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full h-full">
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            О нас
            <Album size={32} className="text-sky-700" />
          </h2>
          <p className="text-[16px] text-gray-600 leading-relaxed max-w-[600px]">
            Мы команда профессионалов, стремящихся создать уникальные
            возможности для обучения и развития. Наша цель — помочь вам достичь
            высот в вашей карьере, предлагая качественное образование, поддержку
            и вдохновение на каждом этапе вашего пути.
          </p>
          <p className="text-[16px] text-gray-600 leading-relaxed max-w-[600px]">
            С нами вы можете рассчитывать на лучшие методики обучения, экспертов
            мирового уровня и доступ к практическим знаниям, которые сделают вас
            уверенным специалистом в выбранной области.
          </p>
          <a
            href="#contact"
            className="bg-sky-700 text-white py-3 px-6 rounded-[10px] hover:bg-sky-800 transition-all"
          >
            Свяжитесь с нами
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
