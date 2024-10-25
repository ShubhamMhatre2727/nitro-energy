import { useRef } from "react";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Product from "./components/Product";
import Can from "./components/Can";
import { useScroll } from "framer-motion";

function App() {
  const ref = useRef(null);
  const SCREEN_HEIGHT: number =
  document.querySelector(".App")?.clientHeight || 1500;

  const { scrollY } = useScroll({
    container: ref,
  });

  return (
    <div className="App" ref={ref}>
      <Can SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY} animate={true}/>
      <Hero/>
      <Home/>
      <Product SCREEN_HEIGHT={SCREEN_HEIGHT} scrollY={scrollY}/>
    </div>
  );
}

export default App;
