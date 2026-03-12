import { useEffect, useState } from "react";

const ResumeViewer = ({
  resumePath = "/assets/resume.pdf",
  heading = "Resume",
  description = "One document, carefully crafted to make me sound smarter than I am.",
  documentTitle = "Resume",
}) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsResumeOpen(false);
      }
    };

    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isResumeOpen]);

  return (
    <>
      <div className="grid-special-color grid-4 flex flex-col justify-between">
        <div>
          <p className="headtext">{heading}</p>
          <p className="mt-2 text-white">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsResumeOpen(true)}
          className="self-start px-5 py-2 mt-4 font-medium text-white transition rounded-lg bg-white/20 hover:bg-white/30"
        >
          View Resume
        </button>
      </div>

      {isResumeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-white/15 bg-[#0B1020]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsResumeOpen(false)}
              className="absolute z-10 p-2 text-white rounded-md top-4 right-4 bg-black/60 hover:bg-black/80"
              aria-label="Close resume viewer"
            >
              <img src="assets/close.svg" alt="Close" className="size-5" />
            </button>
            <iframe
              src={resumePath}
              title={documentTitle}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeViewer;
