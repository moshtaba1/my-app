import "./Contact.css"

function Contact ({Title,Link,Href,Icon}) {
    return (
        <div className="contact-box">
            <div className="contact-icon-box">
                <img className="contact-icon" src={Icon}></img>
            </div>
            <div className="contact-info-box">
                <h4 className="contact-title">{Title}</h4>
                <a className="content-link" href={Href}>{Link}</a>
            </div>
        </div>
    )
}

export default Contact;