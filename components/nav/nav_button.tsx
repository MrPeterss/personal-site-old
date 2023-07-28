import { MutableRefObject } from "react";

type NavButtonProps = {
    text: string;
    active: boolean;
    activeColor: string;
    textColor: string;
    associatedRef: MutableRefObject<HTMLDivElement | null>
}

const NavButton = (props: NavButtonProps) => {
    var { text, active, activeColor, textColor, associatedRef } = props;

    var toAdd = "";

    if (active) {
        toAdd = activeColor +" underline underline-offset-8";
    } else {
        toAdd = textColor;
    }

    const handleClick = () => {
        associatedRef.current!.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button onClick={handleClick}> 
            <h1 className={"font-serif text-[2vw] " + toAdd }>{text}</h1>
        </button>
    )
}

export default NavButton;