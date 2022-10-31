/* MADE BY IGOR */
import { Link } from "react-router-dom";

export default function SecondDeskNav() {
    return (
        <div className="snd-desknav desktop">
            <div className="snd-desknav-cont">
            <Link to="/current">
                    <div className="snd-desknav-single-cont">
                        <h2 className="snd-desknav-link">Current</h2>
                    </div>
                </Link>
                <Link to="/upcoming">
                    <div className="snd-desknav-single-cont">
                        <h2 className="snd-desknav-link">Upcoming</h2>
                    </div>
                </Link>
                <Link to="/wishlist">
                    <div className="snd-desknav-single-cont">
                        <h2 className="snd-desknav-link">Wishlist</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}