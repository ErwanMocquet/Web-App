import Cards from "../components/WishlistCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

export default function WishlistPage () {
    return (
        <div>
            <TopNav />
            <BottomNav />
            <div className="current-main">
                <Cards />
            </div>
        </div>
    )
}