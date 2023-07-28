import { MutableRefObject, useState } from "react";
import Image from "next/image";
import NavButton from "./nav_button";

type DropDownProps = {
    color: string;
    aboutRef: MutableRefObject<HTMLDivElement | null>;
    projectRef: MutableRefObject<HTMLDivElement | null>;
    resumeRef: MutableRefObject<HTMLDivElement | null>;
    contactRef: MutableRefObject<HTMLDivElement | null>;
}

export const DropDown = (props: DropDownProps) => {

    var { color, aboutRef, projectRef, resumeRef, contactRef } = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        // dropdown menu
        <div className="relative inline-block text-left">
            <div>
                <button onClick={toggle} type="button" className="inline-flex justify-center w-full rounded-md" >
                    <img src="/menu.svg" width={30}></img>
                </button>
                { isOpen ? (
                    <div className={"origin-top-right absolute right-[-8vw] mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 " + color}>
                        <div className="py-1 flex flex-col px-6 gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <NavButton text={"About"} active={false} activeColor={"text-cyan-500"} textColor={"text-white"} associatedRef={aboutRef} text_size="text-3xl" />
                            <NavButton text={"Projects"} active={false} activeColor={"text-cyan-500"} textColor={"text-white"} associatedRef={projectRef} text_size="text-3xl" />
                            <NavButton text={"Resume"} active={false} activeColor={"text-cyan-500"} textColor={"text-white"} associatedRef={resumeRef} text_size="text-3xl" />
                            <NavButton text={"Contact"} active={false} activeColor={"text-cyan-500"} textColor={"text-white"} associatedRef={contactRef} text_size="text-3xl" />
                        </div>
                    </div>
                ) : null }
            </div>
        </div>
    )
}