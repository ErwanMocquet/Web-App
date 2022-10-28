/* MADE BY ERWAN and Igor */
import { Link } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KateProfile from "../img/karuno.svg";

export default function Cards({ post }) {
    
    let episode = 1;

    function oneUp() {
        episode++;
    }

    return(
        <main className="main-card">
        <section className="card-container">
            <div className="profile-cards-container">
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
            </div>
            <Link to="/description">
            <figure className="image-cards-container">
                <div className="card-gradient">
                    <img className="image-cards" src={post.image_thumbnail_path} alt="Barbarians season 2"></img>
                </div>
            </figure>
            </Link>
            <Link to="/description">
            <article className="content-container">
                <h1 className="text-cards title-content-card">{post.name}</h1>
                <h2 className="text-cards whereat-content-card">S1 | E{episode}</h2>
                <p className="text-cards description-content-card">{post.lastepisode}</p>
                <div className="platform-cards-container">
                    <img className="platform-cards" src={post.source} alt="Netflix logo"></img>
                </div>
            </article>
            </Link>
            <div className="add-series-arrow-container" onClick={oneUp()}>
                <ArrowUpwardIcon className="add-series-arrow"></ArrowUpwardIcon>
            </div>
        </section>
        </main>
    )
}