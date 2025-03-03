import React, { useEffect } from "react";
import gsap from "gsap";
import IntroAnimation from "./IntroAnimation";
import NavBar from "./NavBar";
import Hero from "./Hero";
import SocialProof from "./SocialProof";
import About from "./About";
import Services from "./Services";
import ChooseUs from "./ChooseUs";
import Portfolio from "./Portfolio";
import RiskSection from "./RiskSection"

const App = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    gsap.to([blocks[0], blocks[4]],
      {
        y: "-100vh",
        duration: 1.2,
        delay: 0.2,
        onComplete: () => {
          blocks[0].style.visibility = "hidden";
          blocks[4].style.display = "hidden";
        }
      });

    gsap.to([blocks[1], blocks[2], blocks[3]],
      {
        y: "-100vh",
        stagger: 0.4,
        duration: 1.8,
        delay: 0.5,
        onStart: () => {
          blocks[0].style.border = "none";
          blocks[3].style.border = "none";
        },
        onComplete: () => {
          gsap.to([blocks[1], blocks[2], blocks[3]],
            {
              height: "70px",
              position: "absolute",
              duration: 1,
              onComplete: () => {
                gsap.to(".intro", { display: "none" });
              }
            });
        }
      });
  }, []);


  return (
    <div>
      <IntroAnimation />
      <NavBar />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      <RiskSection />
    </div>
  );

}; export default App;