import React, { useState } from "react";
import styled from "styled-components";

const TourContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 14px 5px gray;
    width: 90%;
    max-width: 700px;
    margin-bottom: 30px;
`;

const Img = styled.img`
    width: 100%;
    height: 25rem;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Name = styled.h4``;

const Price = styled.h4`
    color: #49a6e9;
    background-color: #ebf7ff;
    padding: 2px;
`;

const Info = styled.p`
    margin: 20px 0;
`;

const ReadMoreBtn = styled.button`
    border: none;
    outline: none;
    color: #49a6e9;
    font-size: 1rem;
    cursor: pointer;
`;

const Btn = styled.button`
    margin: auto;
    padding: 5px 35px;
    font-size: 1rem;
    border: 1px solid #bb2525;
    color: #bb2525;
    cursor: pointer;
    border-radius: 5px;
    background-color: white;
`;

const Tour = ({ data, removeTours }) => {
    const { image, name, info, price, id } = data;

    const [readMore, setreadMore] = useState(false);

    const toggle = () => {
        setreadMore(!readMore);
    };

    return (
        <>
            <TourContainer>
                <Img src={image} />
                <InfoContainer>
                    <TitleContainer>
                        <Name>{name}</Name>
                        <Price>${price}</Price>
                    </TitleContainer>
                    <Info>
                        {readMore ? info : `${info.slice(0, 200)}...`}
                        <ReadMoreBtn onClick={toggle}>
                            {readMore ? "  Read less" : "  Read more"}
                        </ReadMoreBtn>
                    </Info>
                    <Btn
                        onClick={() => {
                            removeTours(id);
                        }}
                    >
                        Not Interested
                    </Btn>
                </InfoContainer>
            </TourContainer>
        </>
    );
};

export default Tour;
