/*MADE BY KATIE AND IGOR (data) */
import DescriptionTop from "../components/DescriptionTop.js";
import BottomNav from "../components/BottomNav";
import Episodes from "../components/Episodes";
import Actor from "../components/Actor";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import { useLocation } from "react-router-dom";

export default function DescriptionPage() {

    // GETTING THE DATA PASSED FROM CARDS
    const location = useLocation();
    const datapass = location.state
    console.log(datapass)
    
    return (
        <section>
            <TopDeskNav />
            <div className="back-button-container">
                <Link to="/explore"><ArrowBackIosNewIcon className="back-button" sx={{ fontSize: "2.5rem" }}/></Link>
            </div>
            <DescriptionTop datapass={datapass}/>
            <div className="background1 mobile">
                <h1 className="header-description">Rating: 86%</h1>
                <p className="text-description">Imported from Rotten tomato</p>
            </div>
            <div className="background2">
                <h1 className="header-description">Season 1 (2022)</h1>
                <div className="episodes-cards-container">
                    <div>
                        <Episodes/>
                        <Episodes/>
                        <Episodes/>
                    </div>
                    <div className="desktop-only">
                        <Episodes/>
                        <Episodes/>
                        <Episodes/>
                    </div>
                </div>
            </div>
            <div className="background3">
                <h1 className="header-description">Cast:</h1>
                <div className="actors-content">
                    <div>
                        <Actor/>
                        <Actor/>
                        <Actor/>
                    </div>
                    <div className="desktop-only">
                        <Actor/>
                        <Actor/>
                        <Actor/>
                    </div>
                    <div className="desktop-only">
                        <Actor/>
                        <Actor/>
                        <Actor/>
                    </div>
                </div>
            </div>
            <BottomNav/>
            <Footer />
        </section>
    )
}