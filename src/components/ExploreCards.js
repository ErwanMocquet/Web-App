/* MADE BY KATE, IGOR (data) */
import KateProfile from "../img/karuno.svg";
import more from "../img/more.png";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";


export default function ExploreCards ({ post }) {

    // PASSING DATA TO THE DESCRIPTION PAGE
    const datapass = {
        name: post.name,
        overall: post.overall,
        image: post.image_thumbnail_path,
    };


    return (
            <section className="explore-card-container">
                <div className="explore-profile-cards-container">
                    <img className="explore-profile-cards" src={KateProfile} alt="Follower's profile"></img>
                    <img className="explore-profile-cards" src={KateProfile} alt="Follower's profile"></img>
                    <img className="explore-profile-cards" src={more} alt="Follower's profile"></img>
                </div>
                <Link to="/description" state={{ datapass }}>
                    <figure className="image-explore-cards-container">
                        <div className="explore-card-gradient">
                            <img className="image-explore-cards" src={post.image_thumbnail_path} alt="Series"></img>
                        </div>
                    </figure>
                </Link>
                <Link to="/description" state={{ datapass }}>
                    <article className="explore-content-container">
                        <h1 className="explore-title-content-card">{post.name}</h1>
                        <p className="explore-content-card">{post.overall}</p>
                        <div>
                            <img className="platform-icons" src={post.source} alt="Netflix logo"></img>
                            <p></p>
                        </div>
                    </article>
                </Link>
                <div className="plus-button-container">
                    <AddButton post={post} />
                </div>
            </section>
    )
}