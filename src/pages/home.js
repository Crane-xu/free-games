import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// 接口
import { GetGamesList } from '../api/index';
// 组件
// import NavBar from '../components/nav-bar';
import GameCard from '../components/game-card';
import GamesWrapper from '../components/games-wrapper';

function Home() {
    const navigate = useNavigate();
    const [total, setTotal] = useState(12);
    const [games, setGames] = useState([]);

    useEffect(() => {
        document.title = `Free Games`;
        GetGamesList().then(function (response) {
            setGames(response.data);
        });
    }, []);
    // 给 useEffect 传递第二个参数，它是 effect 所依赖的值数组。第二个参数改变时调用
    // 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。

    function isTouchBottom() {
        // 文档显示区域高度
        const showHeight = window.innerHeight;
        // 网页卷曲高度
        const scrollTopHeight =
            document.body.scrollTop || document.documentElement.scrollTop;
        // 所有内容高度
        const allHeight = document.body.scrollHeight;
        // (所有内容高度 = 文档显示区域高度 + 网页卷曲高度) 时即为触底
        if (allHeight <= showHeight + scrollTopHeight) {
            // 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。
            // 该函数将接收先前的 state，并返回一个更新后的值。
            setTotal(prevTotal => prevTotal + 12);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", isTouchBottom);
        // useEffect 函数返回一个清除函数 清除函数会在组件卸载前执行
        return () => { window.removeEventListener("scroll", isTouchBottom) };
        // eslint-disable-next-line
    }, []);

    return (
        <GamesWrapper>
            {games?.map((item, index) => (
                index < total &&
                <GameCard gameInfo={item} key={index} onClick={() => navigate(`/detail/${item.id}`)} />
            ))}
        </GamesWrapper>
    );
}

export default Home;

