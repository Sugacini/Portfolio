import Text from "./Text";
import ProjectHeader from "./ProjectHeader";
import SingleOtherProjects from "./SingleOtherProjects";

function OtherProjects({component}){
    return(
        <div className="otherProjectOuter" id="others">
            <Text text = "Other Projects" className="otherProjectHead"></Text>
            <ProjectHeader />
            <SingleOtherProjects />
        </div>
    )
}

export default OtherProjects;