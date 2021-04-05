import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
`;

const Btn = styled.button`
    margin: auto;
    font-size: 1.5rem;
    border: none;
    background-color: #49a6e9;
    color: white;
    padding: 2px;
    cursor: pointer;
`;

const Heading = styled.h1`
    margin: 30px 0;
    font-size: 2rem;
`;

const Refresh = ({ fetchData }) => {
    return (
        <>
            <Wrapper>
                <Heading>No Tours Left</Heading>
                <Btn onClick={fetchData}>Refresh</Btn>
            </Wrapper>
        </>
    );
};

export default Refresh;
