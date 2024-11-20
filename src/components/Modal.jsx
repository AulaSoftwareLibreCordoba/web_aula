import { motion } from "framer-motion";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({
  isOpen,
  handleClose,
  projectTitle,
  estado,
  description,
  participantes,
  urlForm,
  isFull,
  imgSrc,
  altText,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#14272a]/80 flex justify-center items-center z-50"
      onClick={handleBackdropClick}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-[#0b1516] text-white rounded-xl w-[90vw] h-[80vh] md:h-[70vh] flex flex-col md:flex-row relative overflow-hidden shadow-xl"
        variants={modalVariants}
      >
        <button onClick={handleClose}>
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute top-4 right-4 text-white text-2xl hover:text-main transition-all duration-300"
          />
        </button>

        <div className="w-full md:w-2/3 h-1/3 md:h-full">
          <img
            src={imgSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        <div className="flex flex-col justify-between p-6 w-full md:w-2/3 h-2/3 md:h-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            {projectTitle}
          </h1>
          <div className="text-sm md:text-base text-start space-y-4">
            <p>
              <strong className="text-main">Estado:</strong> {estado}
            </p>
            <p>
              <strong className="text-main">Descripción:</strong> {description}
            </p>
            <p>
              <strong className="text-main">Participantes:</strong> {participantes}
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            {isFull ? (
              <span className="text-red-500 font-bold">Proyecto cerrado</span>
            ) : (
              <a
                href={urlForm}
                className="bg-main text-black px-4 py-2 rounded-full hover:bg-[#8a9938] transition-all duration-300 shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Apúntate al proyecto!
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
