/* MADE BY ERWAN */
import barbarians from "../img/barbarians.jpg";
import netflix from "../img/netflix-icon.png"
import KateProfile from "../img/karuno.svg"


export default function UpcomingPage() {

    return(
        <main className="main-card">
        <section className="card-container-upcoming">
            <div className="profile-cards-container">
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
                <img className="profile-cards" src={KateProfile} alt="Follower's profile"></img>
            </div>
            <figure className="upcoming-image-cards-container">
                    <img className="image-cards-upcoming" src={barbarians} alt="Barbarians season 2"></img>
            </figure>
            <article className="upcoming-content-container">
                <h1 className="text-cards title-content-card">Series Name</h1>
                <h2 className="text-cards whereat-content-card">Coming in October 2022</h2>
                <p className="text-cards description-content-card">This is a small description of the episode and what's happening in it.</p>
                <div className="platform-cards-container upcomingplatform">
                    <img className="platform-cards" src={netflix} alt="Netflix logo"></img>
                </div>
            </article>
        </section>
        </main>
    )
}