import type { NextPage } from "next";
import ProjectItem from "../components/projectItem";
import NavBar, { Pages } from "../components/nav/navbar";

const Projects: NextPage = () => {
    
    return (
        <div className="h-[100vh]">
            <div>
                <NavBar active={Pages.PROJECTS} relative={true} />
            </div>

            <div className="flex gap-[20px] bg-stone-800 p-[20px] h-fill flex-wrap justify-center">
                <ProjectItem title={"Healthy Eating In Dining Halls"} description={"Machine Learning Project utilizing lineaer regression to predict healthiness of food items in dining halls."} link={"https://github.com/MrPeterss/healthy-dining#readme"} image={"/healthy-eating.jpg"} langs={["Python", "Jupyter"]} />
                <ProjectItem title={"Where Is My Rep | NY"} description={"Project voluntarily created for the New York State Department of Labor that displays all New York State assemblymen on a map."} link={"https://github.com/MrPeterss/where-is-my-rep-ny#readme"} image={"/where-is-my-rep.png"} langs={["TS/Next"]} />
                <ProjectItem title={"Minecraft Terra Mapper"} description={"A tool that can generate real-world terrain in the video game Minecraft."} link={"https://github.com/MrPeterss/minecraft-terra-mapper#readme"} image={"/terra-mapper.png"} langs={["Java", "TS/Next"]} />
                <ProjectItem title={"Trashy Mail"} description={"Video Game developed in Unity and C# designed for mobile devices"} link={"hello"} image={"/trashy-mail.png"} langs={["C#", "Unity"]} />
                <ProjectItem title={"NU Registration Notifications"} description={"Python project that notifies a user when a seat in a class is open at Northeastern University."} link={"https://github.com/MrPeterss/nu-registration-notifs#readme"} image={"/registration-notifications.png"} langs={["Python", "Jupyter"]} />
                <ProjectItem title={"Minecraft Client Installer"} description={".NET Console App that can automatically install Minecraft mods and launchers in one click using an executable file"} link={"https://github.com/MrPeterss/minecraft-client-installer#readme"} image={"/client-installer.png"} langs={["C#", ".NET"]} />
            </div>
        </div>
        
    )
}

export default Projects;