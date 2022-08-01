import Title from "./Title";
import Button from "./Button";

const Section = ({ choice, setChoice, title, title1, title2 }) => {
  return (
    <>
    <div className="subtitle">
      <Title title={title} />
      </div>
      <div className="btn-grp">
      <Button
        title1={title1}
        title2={title2}
        choice={choice}
        setChoice={setChoice}
      />
      </div>
    </>
  );
};

export default Section;
