import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import menu from "../static/imgs/menu.png";
import logo from "../static/imgs/freetogame-logo.png";

const NavBarHeight = '50px';
const NavBarStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${NavBarHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,.5);
    background-color: #272b30;
    border-bottom: 1px solid rgba(28,28,28,.6);
    text-shadow: 1px 1px 1px rgb(0 0 0 / 30%);

    .content{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .img{
        height: fit-content;
    }

    ul li{
        font-size: 30px;
        list-style: none;
    }

    ul li: hover{
        cursor: pointer;
        color: rgba(255,255,255,1);
    }

    button{
        width: 60px;
        border-radius: 3px;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid rgba(255,255,255,.1);
    }

    .menu-hide{
        display: none;
    }

    .menu-show{
        display: block;
    }

    // pc
    @media screen and (min-width: 600px) {
        ul{
            display: block !important;
            li {     
                float: left;
                padding-left: 20px;
            }
        }
        button{
            display: none;
        }
    }
    
    // mobile
    @media screen and (max-width: 600px) {
        ul{
            display: none;
            margin: 2px 0 0 0;
            width: 100%;
            position: absolute;
            top: ${NavBarHeight};
            left: 0;
            text-align: left;
            padding-bottom: 10px;
            transition: max-height .25s;
            border-bottom: 1px solid rgba(255,255,255,.3);
            z-index: 10;
            background-color: #272b30;
        }
        button{
            display: flex;
        }
    }
`;

function NavBar() {
    const navigate = useNavigate();
    const [menuClass, setMenuClass] = useState('menu-hide');

    function linkTo(targetPage) {
        navigate(targetPage);
    }

    function toggleMenu() {
        if (menuClass === 'menu-hide') {
            setMenuClass('menu-show');
        } else {
            setMenuClass('menu-hide');
        }
    }

    return (
        <NavBarStyle>
            <div className="content">
                <img src={logo} alt="logo" />
                <button onClick={() => toggleMenu()}>
                    <img src={menu} alt="menu button" />
                </button>
                <ul className={menuClass}>
                    <li onClick={() => linkTo("/")}>Home</li>
                    <li onClick={() => linkTo("/detail")}>Detail</li>
                    <li onClick={() => linkTo("/topics")}>topics</li>
                </ul>
            </div>
        </NavBarStyle>
    );
}

export default NavBar;