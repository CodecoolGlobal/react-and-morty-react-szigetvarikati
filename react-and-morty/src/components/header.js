import Button from "./button";

function Header({handlePageChangeCharacter, handlePageChangeLocation, handlePageChangeLandingPage}) {

  return (
  <header>
    <Button text='Characters' hover="Let's see the characters of Rick and Morty series!" onClick={handlePageChangeCharacter} />
    <Button text='Locations'  hover="Let's see the locations of Rick and Morty series!" onClick={handlePageChangeLocation} />
    <Button text='MainPage' onClick={handlePageChangeLandingPage}/>
  </header>
  )
}

export default Header;