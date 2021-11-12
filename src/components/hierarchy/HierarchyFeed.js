import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";
import HierarchyNode from "./HierarchyNode";

const Root = styled.div`
    display: flex;
    min-height: 100vh;
`

const List = styled.div`
    display: flex;
    flex-direction: column;
`

const HierarchyFeed = ({list}) => {
    const [positionGroups, setPositionGroups] = useState({})
    
    useEffect(() => {
        createOrgChart(list)
    }, [list])

    function createOrgChart(list) {
        let arr = []
        for (const id in list) {
            const user = list[id]
            arr.push(user)
        }
        arr = arr.sort()
        const groupPositions = arr.reduce((rv, x) => {
            (rv[x['position']] = rv[x['position']] || []).push(x);
            return rv
        }, {})

        setPositionGroups(groupPositions)
    }

    return (
        <Root>
            {Object.keys(positionGroups).map((v) => {
                if (v !== "-1") {
                    return(  
                        <List key={v}>
                            {positionGroups[v].map((user) => {
                               return ( <HierarchyNode user={user} /> )
                            })}
                        </List>
                    )
                }
            })}
        </Root>
    )
}

export default HierarchyFeed