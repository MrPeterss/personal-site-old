import Link from "next/link";

type ButtonProps = {
    link: string;
    text: string;
    src: string;
    bg: string;
    text_color: string;
}

const Button = (props: ButtonProps) => {
    var { link, text, src, bg, text_color } = props;

    return (
        <Link href={link} className={"flex rounded-md py-2 px-4 my-3 " + bg} target="_blank" rel="noopener noreferrer"> 
            <h1 className={"font-sans text-xl pr-2 self-center tracking-wide text-center " + text_color}>{text}</h1>
            <img src={src} alt="in" width={25} height={25} className="self-center"/>
        </Link>
    )
}

export default Button;