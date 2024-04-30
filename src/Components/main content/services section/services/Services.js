import "./services.css"
function Services ({title,p,icon}){
    return (
        <div className="services-container">
            <img className="services-img" src={icon}></img>
            <div>
                <h3 className="services-title">{title}</h3>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default Services;