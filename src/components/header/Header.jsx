import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from"../../assets/logo.png";

const Header =()=>{

    return(
<container >
    <img src={logo} alt="logo" width="200px" /> <br />
    <h1 className="my-2 title">Football Legends</h1>
</container>
    )
}

export default Header;