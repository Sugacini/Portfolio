import "../style.css";
import Text from "./Text";
import SingleSkill from "./SingleSkill";
import Image from "./Image";

function Contact(){
    return(
        <div className="contactOuter">
            <Image className="decorate" image="bgFlower.svg"></Image>
            <Image className="decorate1" image="bgFlower.svg"></Image>
            <div className="contactInner">
                <Text className="contactText" text="Contact Us"></Text>
                <div className="contact">
                    <SingleSkill className="contact1" image="mail.png" text="sugacini.l@zohocorp.com" className3="insideImg1" className1="skillImage1" className2="insideTxt"></SingleSkill>
                    <SingleSkill className="contact2" image="id1.png" text="Zsttk-385" className3="insideImg1" className1="skillImage2" className2="insideTxt"></SingleSkill>
                </div>
            </div>
        </div>
    )
}

export default Contact;