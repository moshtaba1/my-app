import Skill from "./Skills/Skill";

function SkillsSection () {
    let skillTitle = [
        {skill:"javaScript"},
        {skill:"wordpress"},
        {skill:"bootstrap"},
        {skill:"framer"},
        {skill:"react"},
        {skill:"git&github"},
        {skill:"responsive"},
        {skill:"webflow"},
        {skill:"css"},
        {skill:"html"},
    ]
    return (
        <div className="skils">
        <div className="title">
            <h2>Skils</h2>
            <div className="divider"></div>
        </div>
        <div className="marquee">
            <Skill {...skillTitle[0]}/>
            <Skill {...skillTitle[1]}/>
            <Skill {...skillTitle[2]}/>
            <Skill {...skillTitle[3]}/>
            <Skill {...skillTitle[4]}/>
            <Skill {...skillTitle[5]}/>
            <Skill {...skillTitle[6]}/>
            <Skill {...skillTitle[7]}/>
            <Skill {...skillTitle[8]}/>
            <Skill {...skillTitle[9]}/>


        </div>
    </div>
    )
}

export default SkillsSection;