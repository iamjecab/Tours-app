import React from "react";
import styled from "styled-components";
import Tour from "./Tour";

const ToursContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    text-align: center;
    margin-top: 5%;
`;

const UnderLine = styled.div`
    background-color: #49a6e9;
    height: 4px;
    margin: auto;
    width: 40%;
    margin-bottom: 50%;
`;

const Tours = ({ tours, removeTours }) => {
    return (
        <>
            <ToursContainer>
                <Heading>
                    Our Tours
                    <UnderLine />
                </Heading>
                {tours.map((tourItem) => (
                    <Tour
                        key={tourItem.id}
                        data={tourItem}
                        removeTours={removeTours}
                    />
                ))}
            </ToursContainer>
        </>
    );
};

export default Tours;
