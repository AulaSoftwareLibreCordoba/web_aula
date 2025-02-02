import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import LogoAula from "./LogoAula";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-[#14272a] to-transparent w-screen h-20 fixed z-50">
      <div className="flex items-center h-full justify-between px-6 relative">
        <ul className="flex gap-5 text-slate-300 justify-center w-full">
          <li>
            <LogoAula />
          </li>
        </ul>

        <nav className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <ul className="hidden lg:flex gap-5 xl:gap-7 text-slate-300 text-sm mr-4">
            <li>
              <a
                href="/"
                className="hover:text-main transition-all duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/proyectos"
                className="hover:text-main transition-all duration-300"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/eventos"
                className="hover:text-main transition-all duration-300"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                href="/talleres"
                className="hover:text-main transition-all duration-300"
              >
                Talleres
              </a>
            </li>
            <li>
              <a
                href="/#Nosotros"
                className="hover:text-main transition-all duration-300"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/#contacto"
                className="hover:text-main transition-all duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>

          <div className="lg:hidden relative">
            <button
              onClick={toggleMenu}
              className="text-slate-300 text-2xl hover:text-main transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            {isMenuOpen && (
              <ul className="flex-col absolute right-0 top-12 bg-[#14272a]/90 text-slate-300 text-base w-80 p-6 rounded-lg text-end shadow-lg z-50">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/proyectos"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="/eventos"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="/talleres"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Talleres
                  </a>
                </li>
                <li>
                  <a
                    href="/#nosotros"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/#contacto"
                    className="block px-4 py-2 hover:text-main hover:bg-[#23454a] transition-all duration-300"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
