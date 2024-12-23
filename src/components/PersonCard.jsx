const PersonCard = ({ imgSrc, altText, name }) => {
  return (
    <div className="relative bg-[#14272a] cursor-pointer text-white rounded-lg w-40 h-56 xl:w-60 md:w-32 md:h-48 xl:h-80 flex justify-center items-center group">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-100"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-[#0a1416] opacity-0 lg:opacity-60 transition-all duration-300 group-hover:opacity-0 rounded"></div>
      <div className="bg-[#14272a] w-full important-text absolute bottom-4 text-white text-xs xl:text-sm text-wrap opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100">
        {name}
      </div>
    </div>
  );
};

export default PersonCard;




