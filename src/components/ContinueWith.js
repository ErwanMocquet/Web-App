/* MADE BY IGOR */
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContinueWith() {
    return (
        <div className="continue-container">
            <div className="continue-text-cont">
                <h2 className="continue-text">Continue with</h2>
            </div>
            <div className="continue-logos-cont">
                <GoogleIcon className='icon' sx={{ fontSize: "2.5rem" }} />
                <FacebookIcon className='icon' sx={{ fontSize: "2.5rem" }} />
            </div>
        </div>
    )
};