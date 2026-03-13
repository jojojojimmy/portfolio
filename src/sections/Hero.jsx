import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section id="home" className = "scroll-mt-24 flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBackground />
        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 pointer-events-none"
        >
          <svg
            className="w-5 h-5 text-orange-200/85 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
    </section>
  );
};

export default Hero;