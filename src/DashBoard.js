import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'

import TopBar from './components/dashboard/TopBar'
import HierarchyFeed from './components/hierarchy/HierarchyFeed'


const Root = styled.div`
    display: flex;
    flex-wrap: flex;
    flex-direction: column;
    background-color: #f1f1f1;
`
const HierarchyContainer = styled.div`
    display: flex;
    flex-wrap: flex;
    flex-direction: row;
`

const DashBoard  = ({user, corps, profiles}) => {
    const [currUser, setUser] = useState(user)
    const [currCorps, setCorps] = useState(corps)
    const [currList, setList] = useState(profiles)
    useEffect(() => {
        const interval = setInterval(() => {
            window.location.reload(3000)
        }, 1800000);
        setUser(user)
        setCorps(corps)
        setList(profiles)
    }, [corps, profiles, user])
    
    return (
        <Root>
            <TopBar user={currUser} corps={currCorps} />
            <HierarchyContainer>
                <HierarchyFeed list={currList} />
            </HierarchyContainer>
        </Root>
    )
}

export default DashBoard