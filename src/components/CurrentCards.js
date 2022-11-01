/* MADE BY ERWAN AND IGOR */
import { Link } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KateProfile from "../img/karuno.svg";
import { useState } from "react";

export default function Cards({ post }) {
    
    // EPISODE UPDATE BUTTON
    const [episode, setCount] = useState(1)

    const updateCount = () => {
        setCount(episode + 1)
    }

    // PASSING DATA TO THE DESCRIPTION PAGE
    const datapass = {
        name: post.name,
        overall: post.overall,
        image: post.image_thumbnail_path,
    };

    return(
        <main className="main-card">
        <section className="card-container">
            <div className="profile-cards-container">
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
            </div>
            <Link to="/description" state={{ datapass }}>
            <figure className="image-cards-container">
                    <img className="image-cards" src={post.image_thumbnail_path} alt="Barbarians season 2"></img>
            </figure>
            </Link>
            <Link to="/description" state={{ datapass }}>
            <article className="content-container">
                <h1 className="text-cards title-content-card">{post.name}</h1>
                <h2 className="text-cards whereat-content-card crntepisode">S1 | E{episode}</h2>
                <p className="text-cards description-content-card">{post.lastepisode}</p>
                <div className="platform-cards-container">
                    <img className="platform-cards" src={post.source} alt="Netflix logo"></img>
                </div>
            </article>
            </Link>
            <button className="add-series-arrow-container desktop" onClick={updateCount}>
                <ArrowUpwardIcon className="add-series-arrow"></ArrowUpwardIcon>
            </button>
            <button className="add-series-arrow-container mobile" onClick={updateCount}>
                <ArrowUpwardIcon className="add-series-arrow" sx={{ fontSize: "2.5rem" }}></ArrowUpwardIcon>
            </button>
        </section>
        </main>
    )
}