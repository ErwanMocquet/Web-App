/* MADE BY MAGDALENA HEAVILY INSPIRED BY KATIE */
import barbarians from "../img/barbarians.jpg";
import netflix from "../img/netflix-icon.png"


export default function HistoryCards () {
    return (
            <section className="history-card-container">
                
                <figure className="image-history-cards-container">
                    <div className="explore-card-gradient">
                        <img className="image-history-cards" src={barbarians} alt="Barbarians season 2"></img>
                    </div>
                </figure>
                <article className="explore-content-container">
                    <h1 className="explore-title-content-card">Series Name</h1>
                    <p className="explore-content-card">A short last episode summary so the users can know what it is about.</p>
                    <div>
                        <img className="platform-icons" src={netflix} alt="Netflix logo"></img>
                    </div>
                </article>
            
            </section>
    )
}