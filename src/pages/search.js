import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// 接口
import { GetGamesList } from '../api/index';
// 组件
import GameCard from '../components/game-card';
import GamesWrapper from '../components/games-wrapper';

const SearchWrapper = styled.div`
    width: 80%;
    margin: 50px auto;
    color: #eee;
    font-size: 30px;
`;

const SearchBox = styled.div`
    margin-top: 100px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    input{
        color: rgba(255,255,255,.5);
        height: 46px;
        padding: 0 2vh;
        font-size: 16px;
        background-color: #1c1e22;
        border: 0 solid rgba(0,0,0,.6);
        border-radius: 5px;
    }
    input:focus {
        outline: 0px;
        border: 1px solid rgba(0,0,0,.6);
    }
    // pc
    @media screen and (min-width: 600px) {
        input{
            width: 50%;
        }
    }
    // mobile
    @media screen and (max-width: 600px) {
        input{
            width: 100%;
        }
    }
`;

const Response = styled.div`
    margin-top: 50px;
    color: #eee;
    font-size: 30px;
`;

function Search() {
    const navigate = useNavigate();
    const [keyWord, setKeyWord] = useState(null);
    const [searched, setSearched] = useState(false);
    const [gamesList, setGamesList] = useState([]);
    const [gamesAllList, setGamesAllList] = useState([]);

    useEffect(() => {
        document.title = `Search Games`;
        GetGamesList().then(function (response) {
            setGamesAllList(response.data);
        });
    }, []);

    function gamesFilter() {
        if (!keyWord) {
            setGamesList([]);
            return;
        }
        const list = gamesAllList.filter(game => game.title.includes(keyWord));
        setGamesList(list);
    }

    function startSearch(e) {
        if (e.key === 'Enter') {
            gamesFilter();
            setSearched(true);
        }
    }

    return (
        <SearchWrapper>
            <SearchBox>
                Find Games
                <input type="search"
                    placeholder="Search for games"
                    onKeyDown={(e) => startSearch(e)}
                    onChange={(e) => setKeyWord(e.target.value)} />
            </SearchBox>
            <Response>
                {!gamesList.length && searched &&
                    <span>Sorry, no games found!</span>
                }
                <GamesWrapper>
                    {gamesList.map((item, index) => (
                        <GameCard gameInfo={item} key={index} onClick={() => navigate(`/detail/${item.id}`)} />
                    ))}
                </GamesWrapper>
            </Response>
        </SearchWrapper>
    );
}

export default Search;

