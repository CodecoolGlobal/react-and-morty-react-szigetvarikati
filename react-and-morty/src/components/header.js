import Button from "./button";

function Header({handlePageChangeCharacter, handlePageChangeLocation, handlePageChangeLandingPage, handlePageChangeNewCharacter, handlePageChangeNewLocation}) {

  return (
  <header>
    <Button text='Characters' className='button' onClick={handlePageChangeCharacter} />
    <Button text='Create New Character' className='button' onClick={handlePageChangeNewCharacter} />
    <Button text='MainPage' className='button' onClick={handlePageChangeLandingPage} />
    <Button text='Locations'  className='button' onClick={handlePageChangeLocation} />
    <Button text='Discover new Location' className='button' onClick={handlePageChangeNewLocation} />
  </header>
  )
}

export default Header;