/* MADE BY ERWAN */
import barbarians from "../img/barbarians.jpg";
import netflix from "../img/netflix-icon.png"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import KateProfile from "../img/karuno.svg"

export default function CurrentPage() {

    return(
        <main className="main-card">
        <section className="card-container">
            <div className="profile-cards-container">
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
            </div>
            <figure className="image-cards-container">
                <div className="card-gradient">
                    <img className="image-cards" src={barbarians} alt="Barbarians season 2"></img>
                </div>
            </figure>
            <article className="content-container">
                <h1 className="text-cards title-content-card">Series Name</h1>
                <h2 className="text-cards whereat-content-card">S1 | EP8</h2>
                <p className="text-cards description-content-card">This is a small description of the episode and what's happening in it.</p>
                <div className="platform-cards-container">
                    <img className="platform-cards" src={netflix} alt="Netflix logo"></img>
                </div>
            </article>
            <div className="add-series-arrow-container">
                <ArrowUpwardIcon className="add-series-arrow"></ArrowUpwardIcon>
            </div>
        </section>
        </main>
    )
}