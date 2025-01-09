import React from 'react';

const Proximamente = ({text}) => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="grid place-items-center bg-[#14272a]/70 rounded-3xl p-6 sm:p-10 mb-20 sm:mb-40 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <img src="/pinguino.gif" alt="gifpinguino" className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64" loading="lazy"/>
        <h1 className="text-main text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 md:mb-8">
          Proximamente...
        </h1>
        <p className="text-center text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md">
          {text}
        </p>
      </section>
    </main>
  );
};

export default Proximamente;
