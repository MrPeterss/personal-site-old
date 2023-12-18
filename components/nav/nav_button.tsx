import Link from "next/link";
import { MutableRefObject } from "react";

type NavButtonProps = {
    text: string;
    active: boolean;
    link: string;
}

const NavButton = (props: NavButtonProps) => {
    var { text, active, link } = props;

    var toAdd = "";

    if (active) {
        toAdd = "sm:text-cyan-500 sm:underline underline-offset-8";
    } else {
        toAdd = "text-cyan-500 sm:text-white";
    }

    return (
        <Link href={link}>
            <h1 className={"font-serif sm text-3xl text-cyan-500 " + toAdd }>{text}</h1>
        </Link>
    )
}

export default NavButton;