import Contact from "./contact info/Contact"
function ContactInfo () {
    const ContactDetail = [
        {Title : "Email", Link : "moshtabathi@gmail.com", Href : "mailto:moshtabathi@gmail.com",Icon:"./images/icons8-email-48.png"},
        {Title : "Phone", Link : "09215745628", Href : "tel:+989215745628",Icon:"./images/icons8-phone-50.png" },
        {Title : "DATE OF BIRTH", Link : "2003-11-09", Href : "#" ,Icon:"./images/icons8-calender-64.png"},
    ]
    return (
        <div className="contact-info">
            <Contact {...ContactDetail[0]}/>
            <Contact {...ContactDetail[1]}/>
            <Contact {...ContactDetail[2]}/>
        </div>
    )
}

export default ContactInfo;