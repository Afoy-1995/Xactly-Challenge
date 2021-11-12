import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #7e909a;
    align-items: center;
    font-size: 24px;
    margin-right: 10px;
    margin-top: auto;
    margin-bottom: auto;
`
const InitialText = styled.div`
    text-align: center;
    font-size: 24px;
    margin: auto;
    align-items: center;
    width: inherit;
    height: inherit;
    padding-top: 7px;
`
const AvatarContainer = ({initials = "VP", picture = null}) => {
    return (
        <Container>
            <InitialText>
                {initials}
            </InitialText>
        </Container>
    )
}

export default AvatarContainer