const Btn = ({ text, href }) => {
  return (
    <a
      href={href}
      className="cursor-pointer w-auto mb-10 inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-center text-slate-800 rounded-full bg-[#e6ff2b] shadow-xs hover:bg-[#a3af4a] hover:scale-105 transition-all duration-500"
    >
      {text}
      <svg
        className="ml-2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};

export default Btn;
