import { MutableRefObject } from "react";
import NavButton from "./nav_button";
import { DropDown } from "./dropdown";

type NavBarProps = {
    navColor: string;
    activeColor: string;
    textColor: string;
    aboutRef: MutableRefObject<HTMLDivElement | null>;
    projectRef: MutableRefObject<HTMLDivElement | null>;
    resumeRef: MutableRefObject<HTMLDivElement | null>;
    contactRef: MutableRefObject<HTMLDivElement | null>;
    active: MutableRefObject<HTMLDivElement | null>;
    isMobile: boolean;
}

export default function NavBar(props: NavBarProps) {

    var { navColor, activeColor, textColor, aboutRef, projectRef, resumeRef, contactRef, active, isMobile } = props;

    if (isMobile) {
        return (
        <div className={"flex w-full"}>
            <div className={"flex w-full justify-between px-10 py-4 fixed " + navColor}>
                <div className="flex gap-6">
                    <h1 className={"text-sans text-2xl font-bold " + textColor}>Peter Bidoshi</h1>
                </div>
                <DropDown color="bg-stone-900" aboutRef={aboutRef} projectRef={projectRef} resumeRef={resumeRef} contactRef={contactRef} />
            </div>
        </div>
        )
    }

    return (
        <div className={"flex w-full"}>
            <div className={"flex w-full justify-between px-10 py-4 fixed " + navColor}>
                <div className="flex gap-6">
                    <h1 className={"font-serif tracking-widest text-3xl font-bold " + textColor}>Peter Bidoshi</h1>
                </div>
                <div className="flex gap-6">  
                    <NavButton text={"About"} active={aboutRef==active} activeColor={activeColor} textColor={textColor} associatedRef={aboutRef} />
                    <NavButton text={"Projects"} active={projectRef==active} activeColor={activeColor} textColor={textColor} associatedRef={projectRef} />
                    <NavButton text={"Resume"} active={resumeRef==active} activeColor={activeColor} textColor={textColor} associatedRef={resumeRef} />
                    <NavButton text={"Contact"} active={contactRef==active} activeColor={activeColor} textColor={textColor} associatedRef={contactRef} />
                </div>
            </div>
        </div>
    )
}