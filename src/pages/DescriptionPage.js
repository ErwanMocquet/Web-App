/*MADE BY KATIE */
import DescriptionTop from "../components/DescriptionTop.js";
import BottomNav from "../components/BottomNav";
import Episodes from "../components/Episodes";
import Actor from "../components/Actor";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";

export default function DescriptionPage() {
    return (
        <section>
            <div className="back-button-container">
                <Link to="/current"><ArrowBackIosNewIcon className="back-button" sx={{ fontSize: "2.5rem" }}/></Link>
            </div>
            <DescriptionTop/>
            <div className="background1">
                <h1 className="header-description">Rating: 86%</h1>
                <p className="text-description">Imported from Rotten tomato</p>
            </div>
            <div className="background2">
                <h1 className="header-description">Season 1 (2022)</h1>
                <Episodes/>
                <Episodes/>
                <Episodes/>
            </div>
            <div className="background3">
                <h1 className="header-description">Cast:</h1>
                <Actor/>
                <Actor/>
                <Actor/>
            </div>
            <BottomNav/>
        </section>
    )
}