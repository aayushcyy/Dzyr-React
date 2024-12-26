import { useRef } from "react";
import "./App.css";
import rose from "../public/rose.png";
//import heroImg from "../public/hero-img.png";
import logo from "../public/logo.png";
import heroAnimation from "./animation-hooks/heroAnimation";
import Quote from "./Component/Quote";

function App() {
  const roseRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const shadowRef = useRef(null);
  heroAnimation({ roseRef, h1Ref, pRef, shadowRef });

  return (
    <div
      ref={shadowRef}
      className="background-div w-full h-screen items-center flex justify-center relative"
    >
      {/* <div className=" w-full h-screen items-center flex justify-center absolute z-10"></div> */}
      <div
        ref={roseRef}
        className="absolute rotate-[35deg] right-96 top-36 z-20"
      >
        <img src={rose} />
      </div>
      <div className="absolute top-10 opacity-95 z-20">
        <h1 ref={h1Ref} className="font-aref text-[300px] text-[#ffffff] logo">
          Dzyr
        </h1>
      </div>
      <p
        ref={pRef}
        className="font-bonheurroyale text-5xl -rotate-0 bottom-[150px] absolute text-[#ffffff] z-20"
      >
        dare to desire
      </p>
      <Quote />
    </div>
  );
}

export default App;
