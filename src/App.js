import './css/index.css';
import "./css/components.css";
import {Route, Navigate, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.js"
import SignupPage from "./pages/SignUpPage.js"
import LoginPage from "./pages/LoginPage.js"
import WelcomePage from "./pages/WelcomePage.js"
import CurrentPage from "./pages/CurrentPage.js"
import UpcomingPage from "./pages/UpcomingPage.js"
import WishlistPage from "./pages/WishlistPage.js"
import DescriptionPage from "./pages/DescriptionPage.js"
import ExplorePage from "./pages/ExplorePage.js"
import SearchedPage from "./pages/SearchedPage.js"
import ProfilePage from "./pages/ProfilePage.js"
import FollowersPage from "./pages/FollowersPage.js"
import FollowingPage from "./pages/FollowingPage.js"
import SettingsPage from "./pages/SettingsPage.js"


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/welcome" element={<WelcomePage/>} />
        <Route path="/current" element={<CurrentPage/>} />
        <Route path="/upcoming" element={<UpcomingPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/description" element={<DescriptionPage/>} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/searched" element={<SearchedPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/followers" element={<FollowersPage/>} />
        <Route path="/following" element={<FollowingPage/>} />
        <Route path="/settings" element={<SettingsPage/>} />
        <Route path='*' element={<Navigate to="/current"/>} />
      </Routes>
    </main>
  );
}

export default App;