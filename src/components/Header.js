import tesla from "../images/tesla.png"

const Header = ({ titleProject }) => {
  return (
    <header>
      <div className="logo">
      <img className='logo-tesla' src={tesla} alt="icon telsa"/>
        <h1>{titleProject}</h1>
      </div>
    </header>
  );
};

export default Header;
