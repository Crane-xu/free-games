import styled, { keyframes } from "styled-components";

const dance = keyframes`
    0%{
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(2);
    }
`;

const GameCardStyle = styled.div`
    width: 300px;
    height: 260px;
    margin: 10px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 10px #222;
    background: #32383e;

    &:after{
        content:" "; 
        width: 20px;
        height: 20px;
        display: none;
        border-radius: 50%;
        background: #aaf;
        position: relative;
        top: -50%;
        left: 47%;
        animation: ${dance} 1s ease-out infinite;
    }

    &:hover{
        filter: opacity(0.6);
        transition: all 0.2s;
        transform: scale(1.02);
        background: rgba(0,47,255,.247); 

        &:after{
            display: block;
        }
    }

    img{
        width: 100%;
    }

    .title{
        margin: 10px;
        color: #ffe;
        font-size: 20px;
        font-weight: 600;
    }

    .description{
        padding: 0 10px 0px 10px;
        color: #ccc;
        font-size: 15px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

const GameCard = (props) => {
    const gameInfo = props.gameInfo;

    return (
        <GameCardStyle>
            <img src={gameInfo.thumbnail} alt={gameInfo.title} />
            <div className="title">{gameInfo.title}</div>
            <p className="description">{gameInfo.short_description}</p>
        </GameCardStyle>
    );
}

export default GameCard;