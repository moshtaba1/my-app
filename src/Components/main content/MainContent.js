import "./MainContent.css"
import Menu from "./menu section/Menu";
import About from "./about section/About";
import ServicesSection from "./services section/Services-section";
import WorksSection from "./works section/WorksSection";
import SkillsSection from "./skills section/SkillsSection";
import Contact from "./contactMe section/Contact";


function MainContent () {
    return (
        <div className="main-content">
            <div className="main-content-container">
                <Menu/>

                <About/>

                <ServicesSection/>

                <WorksSection/>

                {/* <SkillsSection/> */}

                {/* <Contact/> */}
            </div>
        </div>
    )
}

export default MainContent;