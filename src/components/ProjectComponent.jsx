import { useState } from "react";
import Modal from "./Modal";

const ProjectComponent = ({ imgSrc, altText, projectTitle, estado, description, participantes, urlForm, isFull }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="relative bg-[#14272a]/80 w-80 rounded-xl text-center cursor-pointer"
        onClick={handleOpenModal}
      >
        <img src={imgSrc} alt={altText} className="rounded-xl" />

        <div className="absolute p-10 inset-0 bg-black/80 rounded-xl text-center opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
          <h1 className="important-text text-white text-2xl mt-5">
            {projectTitle}
          </h1>

          <h2 className="important-text text-main text-sm mt-2">{estado}</h2>

          <p className="grid text-wrap mx-auto max-w-60 mt-4">
            <span className="text-xs text-slate-300">
              <b>Participantes: </b> {participantes}
            </span>
            <span className="text-xs text-slate-300">
              <b>Descripción: </b>
              {description}
            </span>
          </p>
        </div>
      </button>

      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        projectTitle={projectTitle}
        estado={estado}
        description={description}
        participantes={participantes}
        urlForm={urlForm}
        isFull={isFull}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default ProjectComponent;
