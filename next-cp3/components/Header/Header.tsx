import Image from "next/image";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
        <Image className="img"
        src= "/cinema-logo.png"
        width={200}
        height={200}
        alt="Cinema logo"
        />
      <h1>Os melhores filmes estão aqui!</h1>
    </header>
  );
}

export default Header;
