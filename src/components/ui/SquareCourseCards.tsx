import React from "react";

const SquareCourseCard = ({
  title,
  Icon,
}: {
  title: string;
  description?: string;
  Icon: React.ElementType;
}) => {
  return (
    <a href="#techorda">
      <div className="bg-white shadow-lg rounded-lg px-2 hover:shadow-2xl transition-shadow flex flex-col justify-center items-center h-36 w-[360px] sm:w-72 sm:h-44 lg:w-52 xl:h-48 xl:w-64">
        <div className="bg-sky-700 text-white p-3 rounded-full mb-4">
          <Icon size={28} />
        </div>
        <h3 className="text-[20px] font-semibold text-gray-800 text-center mb-2">
          {title}
        </h3>
      </div>
    </a>
  );
};

export default SquareCourseCard;
