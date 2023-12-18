import { MutableRefObject } from "react";
import NavButton from "./nav_button";

type NavBarProps = {
    active: Pages;
    relative?: boolean;
}

export enum Pages {
    ABOUT,
    PROJECTS,
    FREELANCING,
    CONTACT
}

export default function NavBar(props: NavBarProps) {

    var { active, relative } = props;

    var toAdd = "";

    if (relative) {
        toAdd = "relative";
    } else {
        toAdd = "fixed";
    }

    return (
        <div className={"flex w-full"}>
            <div className={"flex w-full justify-between px-10 py-4 flex-col bg-stone-900 sm:flex-row sm:" + toAdd}>
                <div className="flex gap-6 content-center">
                    <h1 className={"font-serif tracking-widest text-4xl font-bold text-center w-full text-white"}>Peter Bidoshi</h1>
                </div>
                <div className="flex gap-6 flex-col sm:flex-row">  
                    <NavButton text={"About"} active={Pages.ABOUT==active} link={"/"} />
                    <NavButton text={"Projects"} active={Pages.PROJECTS==active} link={"/projects"} />
                    <NavButton text={"Freelance"} active={Pages.FREELANCING==active} link={"/freelancing"}/>
                    <NavButton text={"Contact"} active={Pages.CONTACT==active} link={"/contact"} />
                </div>
            </div>
        </div>
    )
}