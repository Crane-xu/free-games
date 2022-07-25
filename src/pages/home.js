import React, { useState, useEffect } from 'react';
import styled from "styled-components";
// 接口
import { GetGamesList } from '../api/index';
// 组件
import NavBar from '../components/nav-bar';
import GameCard from '../components/game-card';
// 样式
const GamesWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        document.title = `Free Games`;
        GetGamesList().then(function (response) {
            setGames(response.data);
        });
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <GamesWrapper>
                {games.map((item, index) => (
                    index < 12 && <GameCard gameInfo={item} key={index}></GameCard>
                ))}
            </GamesWrapper>
        </>
    );
}

export default Home;

