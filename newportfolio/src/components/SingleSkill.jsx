import Image from "./Image";
import Text from "./Text";

function SingleSkill(props) {
    return (
        (props.className == "project" ? <div className={props.className} style={{ border: `3px solid ${props.color}`, backgroundColor: props.bgColor, borderBottom: `3px solid ${props.borderColor}` }}>
            <div className={props.className1}>
                <Image className={props.className3} image={props.image} />
            </div>
            <Text className={props.className2} text={props.text} />
            <a href={props.link} target="_blank"><button className={props.btnClass}>Click here..</button></a>
        </div> : <div className={props.className} style={{ border: `3px solid ${props.color}`, backgroundColor: props.bgColor }}>
            <div className={props.className1}>
                <Image className={props.className3} image={props.image} />
            </div>
            <Text className={props.className2} text={props.text} />
        </div>)

    )
}

export default SingleSkill;