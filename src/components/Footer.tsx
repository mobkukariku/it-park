import instaIcon from "../assets/instaIcon.svg";
import teleIcon from "../assets/teleIcon.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-white py-12 font-inter px-6 md:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://astanahub.com/static/img/logo.svg"
              alt="AstanaHUB Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-900">© TOO “SDUITPark”</p>
          </div>
          <div className="flex gap-10">
            <div className="text-center md:text-left flex flex-col gap-1">
              <p className="text-lg font-semibold mb-3 text-gray-900">
                Наши социальные сети
              </p>
              <a
                href="https://www.instagram.com/itpark.it/"
                className="text-sm text-gray-900 font-medium flex gap-1 items-center"
              >
                <img src={instaIcon} alt="instagram" className="w-6" />
                instagram: itpark.it
              </a>
              <a
                href="https://t.me/itparksdu/"
                className="text-sm text-gray-900 font-medium flex gap-1 items-center"
              >
                <img src={teleIcon} alt="instagram" className="w-6" />
                telegram: itparksdu
              </a>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-4 text-gray-900">
                Контактные данные
              </p>
              <p className="text-sm text-gray-900 font-medium">
                +7 727 307 95 65
              </p>
              <p className="text-sm text-gray-900 font-medium">
                itpark@sdu.edu.kz
              </p>
              <p className="text-sm text-gray-900 font-medium">
                ул. Абылай хана, 1/1, г. Каскелен
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>
        <div className="text-center text-sm text-gray-900">
          Все права защищены. AstanaHUB © {new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
