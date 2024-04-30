import "./sidebar.css"
import MainInfo from "./main info section/MainInfo";
import ContactInfo from "./contact info section/ContactInfo";
import Social from "./social section/Social";

function sidebar () {
    return (
        <div className="side-bar">
            <div className="side-bar-container">
                <MainInfo/>
                <div className="sidebar-divider"></div>
                <ContactInfo/>
                <Social/>
            </div>
        </div>
    )
}

export default sidebar;