import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ isOpen, handleClose, projectTitle, estado, description, participantes, urlForm, isFull, imgSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#14272a]/80 flex justify-center items-center z-50">
      <div className="bg-[#14272a] text-white rounded-xl w-[90vw] h-[80vh] flex relative">

        {/* Botón para cerrar */}
        <button onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} className="absolute top-4 right-4 text-white text-xl hover:text-main transition-all duration-300" />
        </button>

        {/* Imagen a la izquierda, ocupando más ancho */}
        <div className="w-2/3 h-full">
          <img src={imgSrc} alt={altText} className="w-full h-full object-cover rounded-l-xl" />
        </div>

        {/* Información a la derecha, con menos padding y más junta */}
        <div className="flex flex-col justify-between p-4 w-1/3 h-full">
          <h1 className="text-3xl font-bold mb-2">{projectTitle}</h1>
          <p className="mb-2">
            <strong>Estado: </strong>
            {estado}
          </p>
          <p className="mb-2">
            <strong>Descripción: </strong>
            {description}
          </p>
          <p className="mb-2">
            <strong>Participantes: </strong>
            {participantes}
          </p>

          <p className="mt-4 text-center">
            {isFull ? (
              <span className="text-red-500 font-bold">Proyecto cerrado</span>
            ) : (
              <a
                href={urlForm}
                className="bg-[#a3af4a] shadow-2xl text-black p-2 rounded-full hover:bg-[#8a9938] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Apúntate al proyecto!
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
