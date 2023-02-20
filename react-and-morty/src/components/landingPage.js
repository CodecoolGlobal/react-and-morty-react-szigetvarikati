import Header from "./header";
import logoText from "./logo_text.png";
import logoPic from "./logo_pic.png";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <div className="pictures">
      <img className="logo" src={logoText} alt="Ricky and Morty titel"></img>
      <img className="logo" src={logoPic} alt="logo of Ricky and Morty"></img>
      </div>
    </div>
  )
}

export default LandingPage;