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

    return (
        <div className={"flex w-full"}>
            <div className={"flex w-full justify-between px-10 py-4 relative flex-col sm:flex-row sm:fixed " + navColor}>
                <div className="flex gap-6">
                    <h1 className={"font-serif tracking-widest text-4xl font-bold text-center w-full mb-3 text- " + textColor}>Peter Bidoshi</h1>
                </div>
                <div className="flex gap-6 flex-col sm:flex-row">  
                    <NavButton text={"About"} active={aboutRef==active} activeColor={activeColor} textColor={textColor} associatedRef={aboutRef} />
                    <NavButton text={"Projects"} active={projectRef==active} activeColor={activeColor} textColor={textColor} associatedRef={projectRef} />
                    <NavButton text={"Resume"} active={resumeRef==active} activeColor={activeColor} textColor={textColor} associatedRef={resumeRef} />
                    <NavButton text={"Contact"} active={contactRef==active} activeColor={activeColor} textColor={textColor} associatedRef={contactRef} />
                </div>
            </div>
        </div>
    )
}