import React from "react";
import styled from "styled-components/macro";

import AvatarContainer from "./AvatarContainer";

const Root = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: #202020;
    flex-flow: row;
`

const CompanyTitle = styled.div`
    display: flex;
    font-size: 48px;
    margin: auto;
    color: #f1f1f1;
`

const TopBar = ({user, corps}) => {
    
    function convertPositionToInitials(user) {
        switch(user.position) {
            case 0: return "VP"
            case 1: return "SM"
            case 2: return "SL"
            case 3: return "SR"
            default: return "AD"
        }
    }

    return (
        <Root>
            <CompanyTitle>{corps}</CompanyTitle>
            <AvatarContainer initials={convertPositionToInitials(user)}/>
        </Root>
    )
}

export default TopBar