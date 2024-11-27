import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faDiscord,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import SocialLink from "./SocialLink";
import LogoAula from "./LogoAula";
import Modal from "./Modal";

const Footer = () => {
  return (
    <footer className="bg-[#14272a] w-full h-[18rem] md:h-[18rem] text-base">
      <div
        title="logo"
        className="flex items-center gap-4 justify-center mt-3 mb-10 pt-10"
      >
        <LogoAula />
        <h1 className="hidden md:flex font-bold text-white text-xs">
          Aula de Software Libre - FP Córdoba
        </h1>
      </div>

      <div>
        <ul className="flex items-center gap-6 justify-center text-slate-300">
          <SocialLink
            href="https://www.linkedin.com/company/aula-de-software-libre-lope-de-vega/"
            icon={faLinkedin}
            label="Visita nuestro perfil de LinkedIn"
            title="LinkedIn"
          />
          <SocialLink
            href="https://github.com/AulaSoftwareLibreCordoba"
            icon={faGithubSquare}
            label="Visita nuestro perfil de GitHub"
            title="GitHub"
          />
          <SocialLink
            href="https://discord.gg/p6bE7uJCK2"
            icon={faDiscord}
            label="Únete a nuestro servidor de Discord"
            title="Discord"
          />
          <SocialLink
            href="https://t.me/+buqc7nlJ4oM2MzJk"
            icon={faTelegram}
            label="Únete a nuestro canal de Telegram"
            title="Telegram"
          />
          <SocialLink
            href="https://x.com/SoftwareLibreFP"
            icon={faXTwitter}
            label="Visita nuestro perfil de X"
            title="X"
          />
        </ul>
      </div>

      <div className="flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faCode} className="size-3 text-slate-300" />
        <p className="mt-10 mb-10 text-center text-xs text-slate-300">
          Diseñado y desarrollado por el Aula de Software Libre
        </p>
        <a href="/juan.jpeg" >
          <FontAwesomeIcon icon={faCode} className="size-3 text-slate-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
