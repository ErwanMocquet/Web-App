import Cards from "../components/CurrentCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import {Link} from "react-router-dom";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import SecondDeskNav from "../components/SecondDeskNav.js";

export default function CurrentPage () {
    return (
        <div>
            <TopNav />
            <TopDeskNav />
            <BottomNav />
            <div className="current-main">
                <SecondDeskNav />
                <h1 className="first-heading-current">Currently Watching</h1>
                <div className="current-cards-container">
                    <div className="current-cards-couple">
                        <Link to="/description"><Cards /></Link>
                        <Link to="/description"><Cards /></Link>
                    </div>
                    <div className="current-cards-couple">
                        <Link to="/description"><Cards /></Link>
                        <Link to="/description"><Cards /></Link>
                    </div>
                </div>
                <h1 className="heading-current">Not watched for a while</h1>
                <div className="current-cards-container">
                    <div className="current-cards-couple">
                        <Link to="/description"><Cards /></Link>
                        <Link to="/description"><Cards /></Link>
                    </div>
                </div>
                <h1 className="heading-current">Stopped</h1>
                <div className="current-cards-container">
                <Cards />
                <Cards />
                </div>
            </div>
            <Footer />
        </div>
    )
}