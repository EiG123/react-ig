import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from "@mui/material";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logOutUser, loginUser } from "../features/userSlice";
import { signOut } from "firebase/auth";

function Sidenav(){
    const user = useSelector(state => state.data.user.user)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutUser());
        signOut(auth);
    }
    return(
        <div className="sidenav">
            <img 
                className="sidenav__logo" 
                src="https://pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                alt="" 
            />
            <div className="sidenav__buttons">
                <button className="sidenav__button">
                    <HomeIcon />
                    <span>Home</span>
                </button>

                <button className="sidenav__button">
                    <SearchIcon />
                    <span>Search</span>
                </button>

                <button className="sidenav__button">
                    <ExploreIcon />
                    <span>Explore</span>
                </button>

                <button className="sidenav__button">
                    <SlideshowIcon />
                    <span>Reels</span>
                </button>

                <button className="sidenav__button">
                    <ChatIcon />
                    <span>Messages</span>
                </button>

                <button className="sidenav__button">
                    <FavoriteBorderIcon />
                    <span>Notifications</span>
                </button>

                <button className="sidenav__button">
                    <AddCircleOutlineIcon />
                    <span>Create</span>
                </button>

                <button className="sidenav__button">
                    <Avatar>{user.username ? user.username.charAt(0).toUpperCase() : "X"}</Avatar>
                    <span>
                        {user.username}
                        <button onClick={handleLogout} className="logout__button">Log out</button>
                    </span>
                </button>

            </div>
            <div className="sidenav__more">
                <button className="sidenav__button">
                    <MenuIcon />
                    <span>More</span>
                </button>
            </div>
        </div>
    );
}

export default Sidenav