import Works from "./works/Works"

function WorksSection () {
    const worksInfo = [
        {title: "Primer", img:"./images/project-1.jpg" , made:"Made With Webflow", href:"https://webflow.com"},
        {title: "Apple", img:"./images/project-1.jpg" , made:"Made With React", href:"https://webflow.com"},
        {title: "Krypto", img:"./images/project-1.jpg" , made:"Made With Framer", href:"https://webflow.com"},
        {title: "Real State", img:"./images/project-1.jpg" , made:"Made With Wordpress", href:"https://webflow.com"},
    ]


    return (
        <div id="portfolio" className="works">
        <div className="title">
            <h2>Portfolio</h2>
            <div className="divider"></div>
        </div>
        <div className="works-grid">
            <Works {...worksInfo[0]}/>
            <Works {...worksInfo[1]}/>
            <Works {...worksInfo[2]}/>
            <Works {...worksInfo[3]}/>
            <Works {...worksInfo[3]}/>
            <Works {...worksInfo[3]}/>
            <Works {...worksInfo[3]}/>
            <Works {...worksInfo[3]}/>
            <Works {...worksInfo[3]}/>

        </div>
    </div>
    )
}

export default WorksSection