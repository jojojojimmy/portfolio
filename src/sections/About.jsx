import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import ResumeViewer from "../components/ResumeViewer";
import SocialCards from "../components/SocialCards";

const About = () => {
  return (
    <section id="about" className = "scroll-mt-24 c-space section-spacing">
        <h2 className = "text-heading"> About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className = "flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"/>
                <div className="z-10">
                    <p className = "headtext"> Hi, My name is Joshua Jimmy</p>
                    <p className="text-white">
                        I am a new graduate from the University of Alberta with a BSc in Computer Science. 
                        I have a passion for building products that solve real-world problems and have experience 
                        in full-stack development, product management, and Data Science. 
                    </p>
                </div>
                <div className = "absolute inset-x-0 pointer-events-none bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>
            {/* Grid 2 */}
            <SocialCards />
            {/* Grid 3 */}
            <div className = "grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="text-white">
                        I'm based in Canada, and open to remote work worldwide
                    </p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>
            {/* Grid 4 */}
            <ResumeViewer
                resumePath="/assets/Joshua_Resume.pdf"
                documentTitle="Joshua Jimmy Resume"
            />
            {/* Grid 5 */}
            <div className = "grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Teck Stack</p>
                    <p className="text-white">
                    I specialize in a variety of languages, frameworks, and tools that
                    allow me to build robust and scalable applications
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Frameworks />
                </div>
                </div>
            </div>
    </section>
  )
}

export default About