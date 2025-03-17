import Text from "./Text";
import SingleSkill from "./SingleSkill";

function Skills() {
    return (
        <div className="skillsOuter" id="skills">
            <div className="skillsInner">
                <Text className="skillsHead" text="My Skills"></Text>
                <div className="skill1">
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="html&css.jpg" text="HTML&CSS" color="red" bgColor="rgb(232 82 82 / 7%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="js.png" text="JAVASCRIPT" color="#F7E018" bgColor="rgb(247 224 24 / 7%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="java.png" text="JAVA" color="rgb(0, 115, 150)" bgColor="rgb(0 115 150 / 9%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="node.png" text="NODE" color="#215732" bgColor="rgb(26 87 45 / 14%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="react.png" text="REACT" color="#61DBFB" bgColor="rgb(97 219 251 / 17%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="db.png" text="DATABASE" color="#0082C4" bgColor="rgb(0 130 196 / 25%)" className2="skillName" className3="insideImg"></SingleSkill>
                    <SingleSkill className="singleSkillOuter" className1="skillImage" image="html&css.jpg" text="LINUX" color="rgb(225 95 184)" bgColor="rgb(225 95 184 / 16%)" className2="skillName" className3="insideImg"></SingleSkill>
                </div>
            </div>
        </div>
    )
}

export default Skills;