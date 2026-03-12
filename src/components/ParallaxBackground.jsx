import { motion, useScroll, useTransform, useSpring } from "motion/react";


const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, { damping: 60 });
    const backgroundY = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const moutainsY = useTransform(x, [0, 0.5], ["0%", "50%"]);
    const logoLandY = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const jungle1Y = useTransform(x, [0, 0.5], ["0%", "60%"]);
    const jungle2Y = useTransform(x, [0, 0.5], ["0%", "60%"]);
    const jungle3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const jungle4Y = useTransform(x, [0, 0.5], ["0%", "60%"]);
    const jungle5Y = useTransform(x, [0, 0.5], ["0%", "10%"]);
    const manOnMountainY = useTransform(x, [0, 0.5], ["0%", "0%"]);
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* background */}
                <motion.div className = "absolute inset-0 w-full h-screen -z-80"
                style = {{
                    backgroundImage: "url('/assets/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : backgroundY,
                    willChange: "transform",
                }}/>
                {/* moutains */}
                <motion.div className = "absolute inset-0 -z-80" 
                style = {{
                    backgroundImage: "url('/assets/mountains.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : moutainsY,
                    willChange: "transform",
                }}/>
                {/* logo_land */}
                <motion.div className = "absolute inset-0 -z-70" 
                style = {{
                    backgroundImage: "url('/assets/logo_land.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : logoLandY,
                    willChange: "transform",
                }}/>
                {/* jungle 1 */}
                <motion.div className = "absolute inset-0 -z-60" 
                style = {{
                    backgroundImage: "url('/assets/jungle1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : jungle1Y,
                    willChange: "transform",
                }}/>
                {/* jungle 2 */}
                <motion.div className = "absolute inset-0 -z-50" 
                style = {{
                    backgroundImage: "url('/assets/jungle2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : jungle2Y,
                    willChange: "transform",
                }}/>
                {/* jungle 3 */}
                <motion.div className = "absolute inset-0 -z-40" 
                style = {{
                    backgroundImage: "url('/assets/jungle3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : jungle3Y,
                    willChange: "transform",
                }}/>
                {/* jungle 4 */}
                <motion.div className = "absolute inset-0 -z-30" 
                style = {{
                    backgroundImage: "url('/assets/jungle4.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : jungle4Y,
                    willChange: "transform",
                }}/>
                {/* jungle 5 */}
                <motion.div className = "absolute inset-0 -z-20" 
                style = {{
                    backgroundImage: "url('/assets/jungle5.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : jungle5Y,
                    willChange: "transform",
                }}/>
                {/* man on mountain */}
                <motion.div className = "absolute inset-0 -z-10" 
                style = {{
                    backgroundImage: "url('/assets/man_on_mountain.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    y : manOnMountainY,
                    willChange: "transform",
                }}/>
            </div>

        </section>
    )
}

export default ParallaxBackground