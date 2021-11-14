import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/macro";
// This will be static so that it is easier to read
const Root = styled.div`
    display: flex;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 5px;
    text-align: center;
    background-color: ${({ status_color }) => (status_color)};
    opacity: 0.9;
    min-height: 50px;
    min-width: 50px;
    margin: auto;
`
const PositionText = styled.div`
    text-align: center;
    margin: auto;
    padding-left: 5px;
    padding-right: 5px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const LineToNext = styled.div`
    display: flex;
    height: 50px;
    width: inherit;
    margin: auto;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
`

const LineToPrev = styled.div`
    display: flex;
    height: 50px;
    width: inherit;
    margin: auto;
    border-right: 1px solid black;
    border-top: 1px solid black;
`

const PrevNextColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const HierarchyNode = ({ user }) => {
    console.log(user)
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("blue")

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
    }, [user.status])

    useEffect(() => {
        switch (user.position) {
            case 0: setPosition("Vice President of Sales")
                break;
            case 1: setPosition(`SM of ${user.continent}`)
                break;
            case 2: setPosition(`SL of ${user.country}`)
                break;
            case 3: setPosition(`SR of ${user.city}`)
                break;
            default: setPosition("")
        }
    }, [user.position])

    return (
        <PrevNextColumn>
            {user.position !== 0 ?
                <Row>
                    <LineToPrev />
                </Row> : null}
            <Root status_color={status}>
                <PositionText>
                    {position}
                </PositionText>
            </Root>
            {user.manages !== null ?
                <Row>
                    <LineToNext />
                </Row> : null}
        </PrevNextColumn>
    );
}

export default HierarchyNode