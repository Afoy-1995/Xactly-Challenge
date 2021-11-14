import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/macro";
import { isTvScreen } from "../../utils/utils";
import { ContextMenu, useContextMenu } from "../dashboard/ContextMenu";
// This will be static so that it is easier to read
const Content = styled.div`
    display: flex;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 5px;
    text-align: center;
    background-color: ${({ status_color }) => (status_color)};
    opacity: 0.9;
    min-height: 50px;
    min-width: 50px;
    border-radius: 10px;
    margin: auto;
    padding: 5px;
    box-shadow: 2px 4px #222;

    &:hover {
        cursor: ${({checkScreen}) => checkScreen ? "none" : "pointer"};
    }
`
const TextWrapper = styled.div`
    width: 30px;
    height: 30px;
    background-color: #f6f6f6;
    border-radius: 50%;
    margin: auto;
`

const PositionText = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 5px;
`
const LocationText = styled.div`
    text-align: center;
    margin: auto;
    padding-left: 5px;
    padding-right: 5px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

const Space = styled.div`
    width: inherit;
    height: 50px;
`

const HierarchyNode = ({ user }) => {
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("")
    const [location, setLocation] = useState(null)

    useEffect(() => {
        switch (user.status) {
            case "normal": setStatus("green")
                break;
            case "warning": setStatus("yellow")
                break;
            case "critical": setStatus("red")
                break;
            default: setStatus("blue") // New to role or has no sales goals
        }
    })

    useEffect(() => {
        switch (user.position) {
            case 0: 
                setPosition("VP")
                setLocation(null)
                break;
            case 1: 
                setPosition("SM")
                setLocation(user.continent)
                break;
            case 2: 
                setPosition("SL")
                setLocation(user.country)
                break;
            case 3: 
                setPosition("SR")
                setLocation(user.city)
                break;
            default: setPosition("")
        }
    }, [user.position])

    return (
        <Column>
            <Space />
            <Content status_color={status} checkScreen={isTvScreen()} onClick={(e) => {
                if (!isTvScreen()) {
                    e.preventDefault()
                    setPosition("AD") // to show simple interaction with page
                }
            }}>
                <Column>
                    <TextWrapper>
                        <PositionText>
                            {position}
                        </PositionText>
                    </TextWrapper>
                    <LocationText>
                        {location}
                    </LocationText>
                </Column>
            </Content>
            <Space />
        </Column>
    );
}

export default HierarchyNode