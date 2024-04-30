import "./skill.css"

function Skill ({skill}) {
    return (
        <div id="skils" className="skils-container">
            <h3 className="skill-title">{skill}</h3>
        </div>
    )
}

export default Skill;