import React, {useRef, useEffect} from "react";
import styled from "styled-components/macro";
// This will be static so that it is easier to read
const Root = styled.div`
    width: 250px;
    height: 75px;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 10%;
    background-color: ${(status) =>{status !== "normal" ? status !== "warning" ? "critical" }}
`

const Node = ({position, status, continent = "N/A", country = "N/A", city = "N/A"}) => {
    
}