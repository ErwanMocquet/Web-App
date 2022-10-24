import Cards from "../components/WishlistCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

export default function WishlistPage () {
    return (
        <div>
            <TopNav />
            <BottomNav />
            <div className="wishlist-main">
                <Cards />
            </div>
        </div>
    )
}