import Button from "./button";

function Header({handlePageChangeCharacter, handlePageChangeLocation, handlePageChangeLandingPage}) {

  return (
  <header>
    <Button text='Characters' className='button' hover="Let's see the characters of Rick and Morty series!" onClick={handlePageChangeCharacter} />
    <Button text='MainPage' className='button' onClick={handlePageChangeLandingPage}/>
    <Button text='Locations'  className='button' hover="Let's see the locations of Rick and Morty series!" onClick={handlePageChangeLocation} />
  </header>
  )
}

export default Header;