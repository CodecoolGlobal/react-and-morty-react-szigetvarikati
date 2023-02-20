import Button from "./button";

function Header() {
  return (
  <header>
    <Button text='Characters' hover="Let's see the characters of Rick and Morty series!"/>
    <Button text='Locations'  hover="Let's see the locations of Rick and Morty series!" />
  </header>
  )
}

export default Header;