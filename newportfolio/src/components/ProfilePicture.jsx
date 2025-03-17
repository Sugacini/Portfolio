import Image from "./Image";
import Text from "./Text";

function ProfilePicture() {
    return (
        <>
            <div className="photoOuter2">
                <Text className="photoOuter" text="Hello, I'm Sugacini" />
                <Text className="photoOuter1" text="I am a curious and ambitious frontend developer who loves exploring new technologies and building creative projects" />
            </div>
            <div className="imageOuter">
                <Image image="sugu.jpg" className="photo"></Image>
            </div>
        </>
    )
}

export default ProfilePicture;