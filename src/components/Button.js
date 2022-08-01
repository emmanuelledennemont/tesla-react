const Button = ({ choice, setChoice, title1, title2 }) => {
  return (
    <>
    <div className="choice-one">
      <button
        className={choice ? "blue" : "black"}
        onClick={() => setChoice(true)}
      >
        {title1}
      </button>
      </div>
      <div className="choice-two">
      <button
        className={choice ? "black" : "blue"}
        onClick={() => setChoice(false)}
      >
        {title2}
      </button>
      </div>
    </>
  );
};

export default Button;
