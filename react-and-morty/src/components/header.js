import Button from "./button";

function Header({handlePageChangeCharacter, handlePageChangeLocation, handlePageChangeLandingPage}) {

  return (
  <header>
    <Button text='Characters' hover="Let's see the characters of Rick and Morty series!" onClick={handlePageChangeCharacter} />
    <Button text='MainPage' onClick={handlePageChangeLandingPage}/>
    <Button text='Locations'  hover="Let's see the locations of Rick and Morty series!" onClick={handlePageChangeLocation} />
  </header>
  )
}

export default Header;