import "./App.css";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="../public/c.png" alt="logo" />;
}
function Intro() {
  return (
    <div>
      <h1>Ciro Finiello</h1>
      <p>Full Stack Web Developer, when i'm not coding i'd like to workout!</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default App;
