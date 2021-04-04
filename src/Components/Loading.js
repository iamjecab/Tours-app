import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5%;
`;

const LoadingText = styled.h1`
    @media (min-width: 640px) {
        font-size: 3.5rem;
    }
`;

const Loading = () => {
    return (
        <>
            <Wrapper>
                <LoadingText>Loading...</LoadingText>
            </Wrapper>
        </>
    );
};

export default Loading;
