import Hero from "./components/Hero";
import Demo from "./components/Demo";


const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />

        <div className="md:fixed bottom-2 right-8 border py-1 px-3 rounded-md shadow border-zinc-300 cursor-default mb-4 md:mb-1">Made with ❤️ by <a href="https://subhadeep3902-github-io.vercel.app/" target="__blank" className="text-amber-600 font-lora font-semibold">Subhadeep</a></div>
      </div>

    </main>
  );
};

export default App;