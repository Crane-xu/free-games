import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../static/imgs/freetogame-logo.png";

const NavBarStyle = styled.div`
    color: rgba(255,255,255,.5);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img{
        height: fit-content;
    }
    ul li{
        font-size: 30px;
        float: left;
        padding-left: 20px;
        list-style: none;
    }
    ul li:hover{
        color: rgba(255,255,255,1);
    }
`;

function NavBar() {
    const navigate = useNavigate();

    function linkTo(targetPage) {
        navigate(targetPage);
    }

    return (
        <NavBarStyle>
            <img src={logo} alt="logo" />
            <ul>
                <li onClick={() => linkTo("/")}>Home</li>
                <li onClick={() => linkTo("/about")}>about</li>
                <li onClick={() => linkTo("/topics")}>topics</li>
            </ul>
        </NavBarStyle>
    );
}

export default NavBar;