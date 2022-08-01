import Section from "./Section";

const Sections = ({ choice1, setChoice1, choice2, setChoice2 }) => {
  return (
    <>
      <div className="bloc-car">
        <Section
          title="Sélectionnner votre véhicule"
          title1="Grande Autonomie - 90700$"
          title2="Performance - 106700$"
          choice={choice1}
          setChoice={setChoice1}
        />
      </div>
      <div className="bloc-color">
        <Section
          title="Sélectionnner la couleur"
          title1="Blanc nacre multicouches 0$"
          title2="Noir Uni - 1000$"
          choice={choice2}
          setChoice={setChoice2}
        />
      </div>

      <div className="configuration">
        {choice1 && choice2 && <p>90 700$</p>}
        {choice1 && !choice2 && <p>91 700$</p>}
        {!choice1 && choice2 && <p>106 700$</p>}
        {!choice1 && !choice2 && <p>107 700$</p>}

        <div className="buy">
          <button>Buy</button>
        </div>
      </div>
    </>
  );
};

export default Sections;
