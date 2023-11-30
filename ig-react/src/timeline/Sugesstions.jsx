import { Avatar } from "@mui/material";
import "./Sugesstions.css"

function Suggestions(){

    return(
        <div className="suggesstions">
            <div className="suggestions__title">Suggestions for you</div>
            <div className="suggestions__usernames">
                <div className="suggestion__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>R</Avatar>
                        </span>
                        <div className="username__info">
                            <div className="username">Uwu</div>
                            <div className="relation">New to Instagram</div>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
            </div>
        </div>
    );
}

export default Suggestions