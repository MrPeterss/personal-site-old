import { MutableRefObject } from "react";

type NavButtonProps = {
    text: string;
    active: boolean;
    activeColor: string;
    textColor: string;
    associatedRef: MutableRefObject<HTMLDivElement | null>
    text_size?: string;
}

const NavButton = (props: NavButtonProps) => {
    var { text, active, activeColor, textColor, associatedRef } = props;

    var toAdd = "";

    if (active) {
        toAdd = "sm:" + activeColor + " sm:underline underline-offset-8";
    } else {
        toAdd = "text-cyan-500 sm:text-white";
    }

    const handleClick = () => {
        associatedRef.current!.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button onClick={handleClick}>
            <h1 className={"font-serif sm text-3xl text-cyan-500 " + toAdd }>{text}</h1>
        </button>
    )
}

export default NavButton;