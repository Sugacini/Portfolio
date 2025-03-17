import "../style.css";
import SingleSkill from "./SingleSkill";
import Text from "./Text";
import {useRef, useState} from "react"

function Project() {
    return (
        <div className="projectOuter" id="projects">
            <Text className="projectHead" text="Best Projects"/>
            <div className="latestproject">
               <SingleSkill className="project" image="logo4.jpg" className1="projectImg" text="My Project" className2="projectName" className3="insideImg" btnClass="btn"></SingleSkill>
                <SingleSkill className="project" image="logo4.jpg" className1="projectImg" text="My Project" className2="projectName" className3="insideImg" btnClass="btn"></SingleSkill>
                <SingleSkill className="project" image="sumplete.png" className1="projectImg" text="Sumplete/Bingo" className2="projectName" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/sumplete/" btnClass="btn"></SingleSkill>
                <SingleSkill className="project" image="logo4.jpg" className1="projectImg" text="UnarvAI" className2="projectName" className3="insideImg" link="https://github.com/Sugacini/MoodBasedApplication" btnClass="btn"></SingleSkill>
            </div>
        </div>
    )
}

export default Project;