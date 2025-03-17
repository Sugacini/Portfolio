import Menu from "./Menu";
import SingleSkill from "./SingleSkill";
import OtherProjects from "./OtherProjects";
import { useEffect, useState } from "react";
import SingleOtherProjects from "./SingleOtherProjects";

const arrOfStyle = [];
function ProjectHeader() {

    const [isVisible, setIsVisible] = useState(true);
    const [value, setValue] = useState();

    function project(e) {
        console.log(e.target.textContent);
        console.log("Enter");
        setIsVisible(true);
        setValue(e.target.textContent);
    }

    return (
        <>
            <ul className="projectHeaderOuter">
                <button className="menu" onClick={project} ><Menu menuName="Scratch" id="menu5" className="menuOfProject"></Menu></button>
                <button className="menu" onClick={project}><Menu menuName="Html/Css" id="menu6" className="menuOfProject"></Menu></button>
                <button className="menu" onClick={project}><Menu menuName="JavaScript" id="menu7" className="menuOfProject"></Menu></button>
                {/* <button className="menu" onClick={project}><Menu menuName="Java"></Menu></button> */}
                <button className="menu" onClick={project}><Menu menuName="Node" id="menu8" className="menuOfProject"></Menu></button>
                {/* <button className="menu" onClick={project}><Menu menuName="React"></Menu></button> */}
            </ul>

            <SingleOtherProjects text={value} isVisible={isVisible}></SingleOtherProjects>
        </>
    )
}

export default ProjectHeader;