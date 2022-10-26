import Cards from "../components/WishlistCards.js";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer.js";
import TopDeskNav from "../components/TopDeskNav.js";
import SecondDeskNav from "../components/SecondDeskNav.js";

export default function WishlistPage () {
    return (
        <div>
            <TopDeskNav />
            <TopNav />
            <BottomNav />
            <SecondDeskNav />
            <div className="wishlist-main">
                <div className="container-desktop-current-cards">
                    <Cards />
                    <Cards />
                </div>
            </div>
            <Footer />
        </div>
    )
}