import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// 接口
import { GetGamesList } from '../api/index';
// 组件
// import NavBar from '../components/nav-bar';
import GameCard from '../components/game-card';
// 样式
const GamesWrapper = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Home() {
    const navigate = useNavigate();
    const [games, setGames] = useState([]);

    useEffect(() => {
        document.title = `Free Games`;
        GetGamesList().then(function (response) {
            setGames(response.data);
        });
    }, []);

    function toDetail(url) {
        navigate(url);
    }

    return (
        <GamesWrapper>
            {games.map((item, index) => (
                index < 12 &&
                <GameCard gameInfo={item} key={index} onClick={() => toDetail(`/detail/${item.id}`)} />
            ))}
        </GamesWrapper>
    );
}

export default Home;

