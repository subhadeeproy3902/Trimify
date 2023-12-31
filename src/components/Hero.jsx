import React from "react";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='px-6 pb-4 sm:px-16 flex justify-between backdrop-blur-md bg-red-500/20 blur-xl items-center w-full mb-10 pt-3'>
        <div className="w-full h-12" />
      </nav>

      <div className="px-6 absolute top-0 pb-4 sm:px-16 flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex gap-2 items-center cursor-pointer">
          <img src="https://i.postimg.cc/23Rb6N2b/logo-6-1.webp" alt='' className='w-10 object-contain' />
          <p className="font-bold font-nova tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500 text-[1.35rem]">Trimify
          </p>
        </div>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/subhadeeproy3902", "_blank")
          }
          className='black_btn'
        >
          My GitHub
        </button>
      </div>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient font-nova text-7xl'>Trimify</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading experience with Trimify, an open-source tool designed to condense lengthy articles into succinct and easy-to-understand summaries.
      </h2>
    </header>
  );
};

export default Hero;