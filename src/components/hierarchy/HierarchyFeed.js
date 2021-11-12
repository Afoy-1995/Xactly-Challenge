import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";
import HierarchyNode from "./HierarchyNode";

const Root = styled.div`
    display: flex;
    min-height: 100vh;
`

const List = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`

const HierarchyFeed = ({list}) => {
    useEffect(() => {
        createOrgChart(list)
    }, [list])

    function createOrgChart(list) {
        const arr = []
        for (const id in list) {
            const user = list[id]
            arr.push(user)
        }

        const groupContinents = arr.reduce((rv, x) => {
            (rv[x['continent']] = rv[x['continent']] || []).push(x);
            return rv;
        }, {})

        console.log(groupContinents)
    }
    return (
        <Root>
            
        </Root>
    )
}

export default HierarchyFeed