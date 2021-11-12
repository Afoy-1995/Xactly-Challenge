import React, {useState} from "react";
import styled from "styled-components/macro";
// This will be static so that it is easier to read
const Root = styled.div`
    width: 250px;
    height: 75px;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 10%;
    text-align: center
`

const HierarchyNode = ({user}) => {
    const position = useState(user.position)
    const status = useState(user.status)
    const continent = useState(user.continent)
    const country = useState(user.country)
    const city = useState(user.city)
    return (
        <Root color={status}>
            {position}
            {continent !== "N/A" ? continent : ""}
            {country !== "N/A" ? country : ""}
            {city !== "N/A" ? city : ""}
        </Root>
    );
}

export default HierarchyNode