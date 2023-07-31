import Link from "next/link";

type ProjectItemProps = {
    title: string;
    description: string;
    link: string;
    image: string;
    langs: string[];
}

const ProjectItem = (props: ProjectItemProps) => {
    const { title, description, link, image, langs } = props;

    return (
        <div className="w-80 bg-stone-800 rounded-md shrink-0 snap-center p-3 max-h-[512px]">
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                {/* image */}
                <img src={image} alt={title} className="w-full aspect-square bg-stone-700 rounded-md" />
                {/* other stuff */}
                <div className="bg-stone-800 rounded-md p-2 flex">
                    <h3 className="text-2xl font-serif text-cyan-400 grow-[4]">{title}</h3>
                    <div className="flex-col items-end">
                        { langs.map((lang, index) => {
                            return (
                                <div key={index} className="bg-cyan-500 px-1 rounded-md font-serif my-1 text-white text-center min-w-12">{lang}</div>
                            )
                        })}
                    </div>
                </div>
                <p className="tracking-widest font-thin text-white font-sans text-sm px-2 line-clamp-4">{description}</p>
                <div className="flex flex-col-reverse grow-[2]">
                    <h4 className="text-center text-stone-700">
                        click to learn more
                    </h4>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem;