import React from "react";
import { useRef } from "react";
//import quoteAnimation from "../animation-hooks/quoteAnimation";

const quotes = [
  {
    index: 1,
    quote:
      "I want nights so deep and wild they echo in our souls, where every touch is a rebellion and every breath is poetry.",
  },
  {
    index: 2,
    quote:
      "In your arms, I am the storm and the calm, the wildfire and the ash, the sinner and the saint.",
  },
  {
    index: 3,
    quote:
      "Let me drown in the chaos of your love, where darkness and desire entwine like a dangerous dance.",
  },
  {
    index: 4,
    quote:
      "Your love is the edge I’m not afraid to fall from, wild, reckless, and beautifully untamed.",
  },
  {
    index: 5,
    quote:
      "In the shadows of the night, our hearts beat like untamed drums, calling for chaos and passion.",
  },
  {
    index: 6,
    quote:
      "We are a riot in the dark, a symphony of lust and longing, fierce yet tender, wild yet eternal.",
  },
  {
    index: 7,
    quote:
      "Take my hand and lead me into the abyss of your love, where pleasure and danger blur into one.",
  },
  {
    index: 8,
    quote:
      "You are my favorite sin and my only salvation, a beautiful contradiction I can’t resist.",
  },
  {
    index: 9,
    quote:
      "Let’s create a fire they’ll write legends about, where every kiss is a spark, and every touch is a flame.",
  },
  {
    index: 10,
    quote:
      "In the darkness, we find the truth—raw, wild, and naked, love stripped of all pretenses.",
  },
  {
    index: 11,
    quote: "I desire the things that will destroy me in the end.",
  },
  {
    index: 12,
    quote:
      "I want to taste dark, wild, and infinite nights with you, where every whisper is a promise and every touch sets the world on fire.",
  },
];

function Quote() {
  const quoteRef = useRef(null);
  //quoteAnimation({ quoteRef });
  const random = Math.floor(Math.random() * 13);
  console.log(random);
  // return (
  //   <div className="w-full h-full flex justify-center items-center">
  //     <div className="w-[50%] text-center">
  //       <p ref={quoteRef} className="font-RedHatText font-thin italic text-xl">
  //         {`"${quotes[random].quote}"`}
  //       </p>
  //       <p className="text-center font-montserrat mt-10 text-lg">
  //         Feeling the heat for tonight?
  //       </p>
  //       <p>Let's make it unforgettable.</p>
  //       <button className="start-btn px-4 py-1">Start</button>
  //     </div>
  //   </div>
  // );
}

export default Quote;
