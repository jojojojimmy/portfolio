import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { mySocials } from "../constants";

const SocialCards = () => {
  const socials = useMemo(() => mySocials.filter((item) => item.href), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (socials.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socials.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [socials.length]);

  if (!socials.length) {
    return (
      <div className="grid-default-color grid-2 flex items-center justify-center">
        <p className="subtext">Add social links to display cards.</p>
      </div>
    );
  }

  const activeSocial = socials[activeIndex];
  const isExternal = activeSocial.href.startsWith("http");

  return (
    <div className="grid-default-color grid-2 flex flex-col justify-between">
      <div>
        <p className="headtext">Socials</p>
        {/* <p className="subtext">Let&apos;s connect through my profiles.</p> */}
      </div>

      <div className="relative flex items-center justify-center flex-1 mt-4">
        <div className="absolute h-36 w-[88%] rounded-2xl border border-white/10 bg-black/20 rotate-[-8deg]" />
        <div className="absolute h-36 w-[88%] rounded-2xl border border-white/10 bg-black/25 rotate-[7deg]" />

        <AnimatePresence mode="wait">
          <motion.a
            key={activeSocial.name}
            href={activeSocial.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="relative z-10 flex h-36 w-[88%] items-center justify-between rounded-2xl border border-white/20 bg-black/40 px-5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 12, rotateX: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, rotateX: 20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <img
                src={activeSocial.icon}
                alt={activeSocial.name}
                className="p-2 rounded-xl size-12 bg-white/10"
              />
              <div>
                <p className="text-lg font-semibold text-white">{activeSocial.name}</p>
                <p className="text-sm text-neutral-300">
                  {isExternal ? "Open profile" : "Send me an email"}
                </p>
              </div>
            </div>
            <img src="assets/arrow-up.svg" alt="Open link" className="opacity-90 size-5" />
          </motion.a>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {socials.map((social, index) => (
          <button
            key={social.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${social.name}`}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialCards;
