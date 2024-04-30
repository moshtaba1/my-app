import Services from "./services/Services";

function ServicesSection () {
    const servicesInfo = [
        {title:"Webflow",icon:"./images/webflow.png", p:"The most modern and high-quality design made at a professional level."},
        {title:"React",icon:"./images/react.png", p:"The most modern and high-quality design made at a professional level."},
        {title:"WordPress",icon:"./images/wordpress.png", p:"The most modern and high-quality design made at a professional level."},
        {title:"Framer",icon:"./images/framer.png", p:"The most modern and high-quality design made at a professional level."},
    ]


    return (
        <div id="services" className="services">
            <div className="title">
                <h2>What I'm Doing</h2>
                <div className="divider"></div>
            </div>
            <div className="services-grid">
            <Services {...servicesInfo[0]}/>
            <Services {...servicesInfo[1]}/>
            <Services {...servicesInfo[2]}/>
            <Services {...servicesInfo[3]}/>
            </div>

        </div>
    )
}

export default ServicesSection;