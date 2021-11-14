import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components/macro";
// This will be static so that it is easier to read
const Root = styled.div`
    display: flex;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 5px;
    text-align: center;
    background-color: ${({status_color}) => (status_color)};
    opacity: 0.9;
    min-height: 50px;
    min-width: 100px;
    margin-top: auto;
    margin-bottom: auto;
`
const PositionText = styled.div`
    text-align: center;
    margin: auto;
    padding-left: 5px;
    padding-right: 5px;
`

const CreateLineToNext = styled.div`
    display: flex;
    width: 150px;
    height: 5px;
`

const CreateLineToPrev = styled.div`
    display: flex;
    width: 150px;
    height: 5px;
`

const HierarchyNode = ({user}) => {
    console.log(user)
    const [position, setPosition] = useState("")
    const [status, setStatus] = useState("blue")

    useEffect(() => {
        switch(user.status) {
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
        switch(user.position) {
            case 0: setPosition("Vice President of Sales")
            break;
            case 1: setPosition(`Sales Manager of ${user.continent}`)
            break;
            case 2: setPosition(`Sales Lead of ${user.country}`)
            break;
            case 3: setPosition(`Sales Representative of ${user.city}`)
            break;
            default: setPosition("")
        }
    }, [user.position])

    return (
        <>
            {user.position !== 0 ? <CreateLineToPrev /> : null}
            <Root status_color={status}>
                <PositionText>
                    {position}
                </PositionText>
            </Root>
            {user.manages ? <CreateLineToNext /> : null}
        </>
    );
}

export default HierarchyNode