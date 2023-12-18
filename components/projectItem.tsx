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
        <div className="bg-stone-900 rounded-md shrink-0 snap-center p-5 w-[calc(33%-26px)] flex-wrap">
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex">
                {/* image */}
                <img src={image} alt={title} className="w-[33%] aspect-square bg-stone-700 rounded-md" />
                {/* other stuff */}
                <div className="flex flex-col">
                    <div className="rounded-md p-2 flex">
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
                    <h4 className="text-center text-stone-700">
                        click to learn more
                    </h4>
                </div>
            </Link>
        </div>
    )
}

export default ProjectItem;