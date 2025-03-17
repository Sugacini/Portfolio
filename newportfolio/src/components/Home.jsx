import "../style.css";
import ProfilePicture from "./ProfilePicture";

function Home(){
    return(
        <div className="homeOuter" id="home">
            <ProfilePicture />
        </div>
    )
}

export default Home;