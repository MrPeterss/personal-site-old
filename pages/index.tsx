import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll } from "framer-motion"
import { MutableRefObject, useEffect, useRef, useState } from "react";
import NavButton from "../components/nav/nav_button";
import { text } from "stream/consumers";
import Button from "../components/button";
import { headers } from "next/headers";
import NavBar from "../components/nav/navbar";
import useWindowDimensions from "../@hooks/useWindowDimension";
import ProjectItem from "../components/projectItem";

const Home: NextPage = () => {

    const {width, height} = useWindowDimensions();

    var isUpright = width! < height!;

    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
	useEffect(() => {
		setInitialRenderComplete(true);
	}, []);

    const aboutRef = useRef<null | HTMLDivElement>(null);
    const projectRef = useRef<null | HTMLDivElement>(null);
    const resumeRef = useRef<null | HTMLDivElement>(null);
    const contactRef = useRef<null | HTMLDivElement>(null);

    const [navColor, setNavColor] = useState("bg-stone-800");
    const [activeColor, setActiveColor] = useState("text-cyan-500");
    const [active, setActive] = useState<MutableRefObject<HTMLDivElement | null>>(aboutRef);
    const [textColor, setTextColor] = useState("text-white");

    const handleClick = (ref: MutableRefObject<HTMLDivElement | null>) => {
        ref.current!.scrollIntoView({ behavior: 'smooth' });
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (aboutRef.current && projectRef.current && resumeRef.current && contactRef.current) {
                if (window.scrollY > aboutRef.current.offsetHeight + projectRef.current.offsetHeight + resumeRef.current.offsetHeight) {
                    setNavColor("bg-stone-900");
                    setActive(contactRef);
                }
                else if (window.scrollY > aboutRef.current.offsetHeight + projectRef.current.offsetHeight) {
                    setNavColor("bg-stone-800");
                    setActive(resumeRef);
                }
                else if (window.scrollY > aboutRef.current.offsetHeight) {
                    setNavColor("bg-stone-900");
                    setActive(projectRef);
                }
                else {
                    setNavColor("bg-stone-800");
                    setActive(aboutRef);
                }
            }
        })
    }

    // if the initial render is not complete, don't render anything
    if (!initialRenderComplete) return (
        <div className="min-h-screen w-full items-center justify-center bg-stone-900">
            <Head>
                <title>Peter Bidoshi</title>
                <meta name='description' content='The personal website of student Peter Bidoshi'/>
                <link rel="icon" href="/bidoshi.com-ico.png" />
            </Head>
        </div>
    );

    if (isUpright) {
        return (
            <div className="min-h-screen w-full items-center justify-center bg-stone-900" >
                <Head>
                    <title>Peter Bidoshi</title>
                    <link rel="icon" href="/bidoshi.com-ico.png" />
                </Head>
                
                <main>
                    {/* navbar */}
                    <motion.div initial={{y:-200}} animate={{ y: 0 }} transition={{delay: 0.2}}>
                        <NavBar navColor={navColor} activeColor={activeColor} textColor={textColor} aboutRef={aboutRef} projectRef={projectRef} resumeRef={resumeRef} contactRef={contactRef} active={active} isMobile={isUpright} />
                    </motion.div>
                    {/* content */}
                    <div className="flex flex-col w-full gap-6 px-4 pt-20 min-h-screen bg-stone-800" ref={aboutRef}>
                        <motion.div className="grow-[2] self-center p-4"
                            initial={{ opacity: 0, scale: 0.25 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Image src="/personalpic.png" width={1920} height={1080} quality={100} alt={"Peter Bidoshi"} className={"rounded-full bg-cyan-600"} />
                        </motion.div>
                        <motion.div className="grow-[2] self-center flex flex-col"
                            initial={{ opacity: 0, scale: 0.25 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.6,
                                ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <h3 className="font-serif text-cyan-400 text-xl text-center">Cornell University Information Science Student</h3>
                        </motion.div>
                        <motion.div className="grow-[2] self-center flex flex-col"
                            initial={{ opacity: 0, scale: 0.25 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <h3 className="font-serif text-cyan-400 text-xl">Freelance Developer</h3>
                        </motion.div>
                        <motion.div className="grow-[2] self-center flex flex-col"
                            initial={{ opacity: 0, scale: 0.25 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 1.0,
                                ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <h4 className="font-sans tracking-widest font-thin text-white text-md text-center">I am a Cornell University Information Science Student that has a passion coding and a love for learning languages and frameworks. I started coding young, developing Minecraft Plugins for popular YouTubers in Java. Today, I have experience in different fields such as machine learning (sklearn/pandas/numpy), web applications (next.js/react), as well as console applications (.NET/c#).</h4>
                            <div className="flex gap-4 py-3 self-center">
                                <Button link={"https://www.linkedin.com/in/peter-bidoshi-228023226/"} text={"Linkedin"} src={"/linkedin.svg"} bg="bg-cyan-600" text_color="text-white" />
                                <Button link={"https://github.com/MrPeterss"} text={"GitHub"} src={"/github.svg"} bg="bg-stone-700" text_color="text-white" />
                            </div>
                        </motion.div>
                    </div>  
                    <div className="flex flex-col w-full gap-6 px-3 py-20 min-h-screen" ref={projectRef}>
                        <h1 className="font-serif text-cyan-400 text-4xl">Projects</h1>
                        <div className="flex w-full gap-4 bg-stone-900 overflow-x-scroll no-scrollbar snap-x ">
                            <ProjectItem title={"Healthy Eating In Dining Halls"} description={"Machine Learning Project utilizing lineaer regression to predict healthiness of food items in dining halls."} link={"https://github.com/MrPeterss/healthy-dining#readme"} image={"/healthy-eating.jpg"} langs={["Python", "Jupyter"]} />
                            <ProjectItem title={"Where Is My Rep | NY"} description={"Project voluntarily created for the New York State Department of Labor that displays all New York State assemblymen on a map."} link={"https://github.com/MrPeterss/where-is-my-rep-ny#readme"} image={"/where-is-my-rep.png"} langs={["TS/Next"]} />
                            <ProjectItem title={"Minecraft Terra Mapper"} description={"A tool that can generate real-world terrain in the video game Minecraft."} link={"https://github.com/MrPeterss/minecraft-terra-mapper#readme"} image={"/terra-mapper.png"} langs={["Java", "TS/Next"]} />
                            <ProjectItem title={"Trashy Mail"} description={"Video Game developed in Unity and C# designed for mobile devices"} link={"hello"} image={"/trashy-mail.png"} langs={["C#", "Unity"]} />
                            <ProjectItem title={"NU Registration Notifications"} description={"Python project that notifies a user when a seat in a class is open at Northeastern University."} link={"https://github.com/MrPeterss/nu-registration-notifs#readme"} image={"/registration-notifications.png"} langs={["Python", "Jupyter"]} />
                            <ProjectItem title={"Minecraft Client Installer"} description={".NET Console App that can automatically install Minecraft mods and launchers in one click using an executable file"} link={"https://github.com/MrPeterss/minecraft-client-installer#readme"} image={"/client-installer.png"} langs={["C#", ".NET"]} />
                        </div>
                        <h1 className="text-2xl text-white text-center font-serif">{"Swipe to view more > > >"}</h1>

                    </div>
                    <div className="w-full px-4 pt-20 pb-5 bg-stone-800 min-h-screen" ref={resumeRef}>
                        <h1 className="font-serif text-cyan-400 text-4xl">Resume</h1>
                        <div className="w-full h-fit py-10">
                            <object
                                data="/resume.pdf"
                                type="application/pdf"
                                width="100%"
                                height="100%"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-2 px-4 py-2 bg-stone-900 items-center justify-center" ref={contactRef}>
                        <Button link={"https://www.linkedin.com/in/peter-bidoshi-228023226/"} text={"Linkedin"} src={"/linkedin.svg"} bg="bg-cyan-600" text_color="text-white" />
                        <Button link={"https://github.com/MrPeterss"} text={"GitHub"} src={"/github.svg"} bg="bg-stone-700" text_color="text-white" />
                        <Button link={"mailto:pbidoshi@gmail.com"} text={"Email"} src={"/email.svg"} bg="bg-white" text_color="text-black" />
                    </div>
                </main>
            </div>
        )
    }
    else {
        return (
            <div className="min-h-screen items-center justify-center bg-stone-800 w-full" suppressHydrationWarning >
                <Head>
                    <title>Peter Bidoshi</title>
                    <link rel="icon" href="/bidoshi.com-ico.png" />
                </Head>
                
                <main>
                    {/* navbar */}
                    <NavBar navColor={navColor} activeColor={activeColor} textColor={textColor} aboutRef={aboutRef} projectRef={projectRef} resumeRef={resumeRef} contactRef={contactRef} active={active} isMobile={false} />
                    {/* content */}
                    {/* about */}
                    <div className="flex w-full gap-6 px-10 py-16 min-h-screen" ref={aboutRef}>
                        <motion.div className="self-center grow-[3]" initial={{x:-1000}} animate={{ x: 0 }} transition={{delay: 0.4}}>
                            <h3 className="font-serif text-cyan-400 text-3xl px-2">Cornell University Information Science Student</h3>
                            <h3 className="font-serif text-cyan-400 text-3xl px-2">Freelance Developer</h3>
                            <h4 className="font-sans tracking-widest font-thin text-white text-2xl px-6 py-6">I am a Cornell University Information Science Student that has a passion coding and a love for learning languages and frameworks. I started coding young, developing Minecraft Plugins for popular YouTubers in Java. Today, I have experience in different fields such as machine learning (sklearn/pandas/numpy), web applications (next.js/react), as well as console applications (.NET/c#).</h4>
                            <div className="flex gap-4">
                                <motion.div initial={{x:-1000}} animate={{ x: 0 }} transition={{delay: 0.8}}>
                                    <Button link={"https://www.linkedin.com/in/peter-bidoshi-228023226/"} text={"Linkedin"} src={"/linkedin.svg"} bg="bg-cyan-600" text_color="text-white" />
                                </motion.div>
                                <motion.div initial={{x:-1000}} animate={{ x: 0 }} transition={{delay: 1}}>
                                    <Button link={"https://github.com/MrPeterss"} text={"GitHub"} src={"/github.svg"} bg="bg-stone-700" text_color="text-white"/>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div className="grow-[2] self-center"
                        initial={{ opacity: 0, scale: 0.25 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                            <Image src="/personalpic.png" width={1920} height={1080} quality={100} alt={"Peter Bidoshi"} className={"rounded-full bg-cyan-600"} />
                        </motion.div>
                    </div>  
                    {/* proj */}
                    <div className="flex w-full gap-6 px-10 pt-20 pb-5 bg-stone-900 min-h-screen overflow-x-scroll no-scrollbar snap-x" ref={projectRef}>
                        <ProjectItem title={"Healthy Eating In Dining Halls"} description={"Machine Learning Project utilizing lineaer regression to predict healthiness of food items in dining halls."} link={"https://github.com/MrPeterss/healthy-dining#readme"} image={"/healthy-eating.jpg"} langs={["Python", "Jupyter"]} />
                        <ProjectItem title={"Where Is My Rep | NY"} description={"Project voluntarily created for the New York State Department of Labor that displays all New York State assemblymen on a map."} link={"https://github.com/MrPeterss/where-is-my-rep-ny#readme"} image={"/where-is-my-rep.png"} langs={["TS/Next"]} />
                        <ProjectItem title={"Minecraft Terra Mapper"} description={"A tool that can generate real-world terrain in the video game Minecraft."} link={"https://github.com/MrPeterss/minecraft-terra-mapper#readme"} image={"/terra-mapper.png"} langs={["Java", "TS/Next"]} />
                        <ProjectItem title={"Trashy Mail"} description={"Video Game developed in Unity and C# designed for mobile devices"} link={"hello"} image={"/trashy-mail.png"} langs={["C#", "Unity"]} />
                        <ProjectItem title={"NU Registration Notifications"} description={"Python project that notifies a user when a seat in a class is open at Northeastern University."} link={"https://github.com/MrPeterss/nu-registration-notifs#readme"} image={"/registration-notifications.png"} langs={["Python", "Jupyter"]} />
                        <ProjectItem title={"Minecraft Client Installer"} description={".NET Console App that can automatically install Minecraft mods and launchers in one click using an executable file"} link={"https://github.com/MrPeterss/minecraft-client-installer#readme"} image={"/client-installer.png"} langs={["C#", ".NET"]} />
                    </div>
                    <div className="flex w-full px-10 pt-20 pb-5 min-h-screen" ref={resumeRef}>
                        <div className="self-stretch w-full">
                            <object
                                data="/resume.pdf"
                                type="application/pdf"
                                width="100%"
                                height="100%"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-2 px-10 py-2 bg-stone-900 items-center justify-center" ref={contactRef}>
                        <Button link={"https://www.linkedin.com/in/peter-bidoshi-228023226/"} text={"Linkedin"} src={"/linkedin.svg"} bg="bg-cyan-600" text_color="text-white" />
                        <Button link={"https://github.com/MrPeterss"} text={"GitHub"} src={"/github.svg"} bg="bg-stone-700" text_color="text-white" />
                        <Button link={"mailto:pbidoshi@gmail.com"} text={"Email"} src={"/email.svg"} bg="bg-white" text_color="text-black" />
                    </div>
                </main>
            </div>
        )
    }
};

export default Home;
