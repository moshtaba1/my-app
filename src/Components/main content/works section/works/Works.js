import "./works.css"
function Works ({title,img,made,href}) {
    return (
        <div className="works-container">
            <a className="work-link" target="blank" href={href}>
            <img className="work-img" src={img}/>
            <h4 className="work-title">{title}</h4>
            <p className="works-p">{made}</p>
            </a>
        </div>
    )
}

export default Works;