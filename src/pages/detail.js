import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
// 接口
import { GetGameDetail } from '../api/index';

const textColor = "#aaa";
const subTextColor = "#7a8288";


const DetailWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .detail-content{
        width: 80%;
        display: flex;
    }
    .detail-content:after{
        content: " ";
        width: 100vw;
        height: 60vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: .5;
        background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 0%, #272b30 74%),url(${props => props.background});
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
    }
    .detail-left{
        flex: 30%;
        img{
            width: 300px;
        }
        button{
            margin: 3px 0;
            height: 40px;
            color: #fff;
            border: none;
            font-weight: 600;
            border-radius: 5px;
            background-image: linear-gradient(#4799eb,#4799eb 60%,#49acff);
        }
    }
    // pc
    @media screen and (min-width: 800px) {
        .float-part{
            position: fixed;
            top: 60px;
        }
    }
    // mobile
    @media screen and (max-width: 800px) {
        .detail-content{
            width: 80%;
            display: flex;
            flex-direction: column;
        }
        .detail-left{
            img{
                width: 100%;
            }
        }
    }
    .float-part{
        display: flex;
        flex-direction: column;
    }
    .detail-right{
        flex: 60%;
    }
    .screen-shots{
        width: 200px;
        margin: 2px;
        border-radius: 5px;
    }
`;

const Section = styled.section`
    color: ${subTextColor};
    h2, h3{
        color: ${textColor};
    }
    .detail-description{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
    .additional-list{
        display: flex;
        flex-wrap: wrap;
    }
    .additional-item{
        flex: 30%;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        span:last-child{
            color: ${textColor};
        }
    }
    .read-more{
        color: #fff;
    }
    .read-more:hover{
        cursor: pointer;
    }
`;

const LargeImageWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(39 43 48 / 80%);
    
    img{
        width: 90%;
    }
`;

function Detail() {
    let params = useParams();
    const [detail, setGameDetail] = useState({});
    const [readMore, setReadMore] = useState("+ Read More");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState({});
    const [showLargeImage, setShowLargeImage] = useState(false);
    const [largeImage, setLargeImage] = useState(null);
    const backgroundURL = `https://www.freetogame.com/g/${params.gameId}/background.jpg`;

    useEffect(() => {
        document.title = `Game Details`;
        GetGameDetail({ id: params.gameId }).then(function (response) {
            setGameDetail(response.data);
            setDescription(response.data.short_description);
            setRequirements(response.data.minimum_system_requirements);
        });

    }, [params]);

    // description: "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed. In Lost Ark, players enter the world of Arkesia and embark on a journey across several lands in a quest to locate the Ark of Legends. Stop the demon Kazeros and his army before they seize control. And hurry, the demons are searching for the Ark too.\r\n\r\nChoose to play as one of several classes ranging from the sword-wielding warrior to a mage or even the gunner – each with several advanced class options. Play alone or with friends (or acquaintances) to explore seven vast continents filled with strange cultures and creatures. Fight in PvP, explore dungeons, and work together in raids. Decide what you like to do best and go for it – but don’t forget to save the world.\r\n\r\nLost Ark offers an easy-to-learn system with plenty of room to customize. Use the game’s ‘Tripod’ system to unlock up to three tiers of customization for each ability and create the combat style that works best for you.\r\n\r\nAs for other features, Lost Ark offers crafting, guilds, and other systems players expect from online games. Whatever you want to do, it’s up to you.\r\n"
    // developer: "Smilegate RPG"
    // freetogame_profile_url: "https://www.freetogame.com/lost-ark"
    // game_url: "https://www.freetogame.com/open/lost-ark"
    // genre: "ARPG"
    // id: 517
    // minimum_system_requirements: {os: "Windows 10 (64-bit only)", processor: "Intel i3 or AMD Ryzen 3", memory: "8 GB RAM",…}
    // graphics: "NVIDIA GeForce GTX 460 / AMD HD6850"
    // memory: "8 GB RAM"
    // os: "Windows 10 (64-bit only)"
    // processor: "Intel i3 or AMD Ryzen 3"
    // storage: "50 GB available space"
    // platform: "Windows"
    // publisher: "Amazon Games"
    // release_date: "2022-02-11"
    // screenshots: [{id: 1259, image: "https://www.freetogame.com/g/517/lost-ark-1.jpg"},…]
    // 0: {id: 1259, image: "https://www.freetogame.com/g/517/lost-ark-1.jpg"}
    // 1: {id: 1260, image: "https://www.freetogame.com/g/517/lost-ark-2.jpg"}
    // 2: {id: 1261, image: "https://www.freetogame.com/g/517/lost-ark-3.jpg"}
    // short_description: "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed."
    // status: "Live"
    // thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg"
    // title: "Lost Ark"


    function changeDescription() {
        if (readMore === "+ Read More") {
            setReadMore("- Read Less");
            setDescription(detail.description);
        } else {
            setReadMore("+ Read More");
            setDescription(detail.short_description);
        }
    }

    function toGame(gameUrl) {
        window.open(gameUrl);
    }

    function openLargeImage(imageUrl) {
        setShowLargeImage(true);
        setLargeImage(imageUrl);
    }

    function closeLargeImage() {
        setShowLargeImage(false);
        setLargeImage(null);
    }

    return (
        <DetailWrapper background={backgroundURL}>
            {showLargeImage &&
                <LargeImageWrapper onClick={() => closeLargeImage()}>
                    <img src={largeImage} alt="Large Screenshots" />
                </LargeImageWrapper>
            }
            <div className="detail-content">
                <div className="detail-left">
                    <div className="float-part">
                        <img src={detail.thumbnail} alt="poster" />
                        <button onClick={() => toGame(detail.game_url)}>PLAY NOW</button>
                    </div>
                </div>
                <div className="detail-right">
                    <Section>
                        <h2>{detail.title}</h2>
                    </Section>
                    <Section>
                        <h3>About {detail.title}</h3>
                        <p className="detail-description">{description}</p>
                        <span className="read-more" onClick={() => changeDescription()}>{readMore}</span>
                    </Section>
                    <Section>
                        <h3>Additional Information</h3>
                        <div className="additional-list">
                            <div className="additional-item">
                                <span>Title</span>
                                <span>{detail.title}</span>
                            </div>
                            <div className="additional-item">
                                <span>Developer</span>
                                <span>{detail.developer}</span>
                            </div>
                            <div className="additional-item">
                                <span>Publisher</span>
                                <span>{detail.publisher}</span>
                            </div>
                            <div className="additional-item">
                                <span>Release Date</span>
                                <span>{detail.release_date}</span>
                            </div>
                            <div className="additional-item">
                                <span>Genre</span>
                                <span>{detail.genre}</span>
                            </div>
                            <div className="additional-item">
                                <span>Platform</span>
                                <span>{detail.platform}</span>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <h3>{detail.title} Screenshots</h3>
                        {detail.screenshots?.map(item => (
                            <img className="screen-shots" src={item.image} key={item.id} alt="game screenshots" onClick={() => openLargeImage(item.image)} />
                        ))}
                    </Section>
                    <Section>
                        <h3>Minimum System Requirements (Windows)</h3>
                        <div className="additional-list">
                            <div className="additional-item">
                                <span>OS</span>
                                <span>{requirements.os}</span>
                            </div>
                            <div className="additional-item">
                                <span>Memory</span>
                                <span>{requirements.memory}</span>
                            </div>
                            <div className="additional-item">
                                <span>Storage</span>
                                <span>{requirements.storage}</span>
                            </div>
                            <div className="additional-item">
                                <span>Processor</span>
                                <span>{requirements.processor}</span>
                            </div>
                            <div className="additional-item">
                                <span>Graphics</span>
                                <span>{requirements.graphics}</span>
                            </div>
                            <div className="additional-item">
                                <span>Additional Notes</span>
                                <span>Specifications may change during development</span>
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </DetailWrapper>
    );
}

export default Detail;

