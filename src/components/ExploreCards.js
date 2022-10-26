/* MADE BY KATIE, IGOR (data) */
//import barbarians from "../img/barbarians.jpg";
//import netflix from "../img/netflix-icon.png"
import AddIcon from '@mui/icons-material/Add';
import KateProfile from "../img/karuno.svg";
import more from "../img/more.png";

export default function ExploreCards ({ post }) {
    return (
            <section className="explore-card-container">
                <div className="explore-profile-cards-container">
                    <img className="explore-profile-cards" src={KateProfile} alt="Follower's profile"></img>
                    <img className="explore-profile-cards" src={KateProfile} alt="Follower's profile"></img>
                    <img className="explore-profile-cards" src={more} alt="Follower's profile"></img>
                </div>
                <figure className="image-explore-cards-container">
                    <div className="explore-card-gradient">
                        <img className="image-explore-cards" src={post.image_thumbnail_path} alt="Barbarians season 2"></img>
                    </div>
                </figure>
                <article className="explore-content-container">
                    <h1 className="explore-title-content-card">{post.name}</h1>
                    <p className="explore-content-card">{post.overall}</p>
                    <div>
                        <img className="platform-icons" src={post.source} alt="Netflix logo"></img>
                        <p></p>
                    </div>
                </article>
            <div className="plus-button-container">
                <AddIcon className="plus-button" sx={{ fontSize: "2.5rem" }}></AddIcon>
            </div>
            </section>
    )
}