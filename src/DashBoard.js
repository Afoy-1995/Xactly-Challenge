import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import { ContextMenu } from './components/dashboard/ContextMenu'

import TopBar from './components/dashboard/TopBar'
import HierarchyFeed from './components/hierarchy/HierarchyFeed'

import { isTvScreen } from './utils/utils'


const Root = styled.div`
    display: flex;
    flex-wrap: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    min-height: 100vh;
    overflow: auto;

    &:hover {
        cursor: ${({checkScreen}) => checkScreen ? "none" : "default"}
    }
`
const HierarchyContainer = styled.div`
    flex-direction: column;
`

const DashBoard  = ({user, corps, profiles}) => {
    const [currUser, setUser] = useState(user)
    const [currCorps, setCorps] = useState(corps)
    const [currList, setList] = useState(profiles)
    useEffect(() => {
        setUser(user)
        setCorps(corps)
    }, [corps, user])

    useEffect(() => {
        setList(profiles)
    })
    
    return (
        <Root checkScreen={isTvScreen()} >
            <ContextMenu menuItems={[{cmd: "Refresh page", func: () => window.location.reload(false)}, {cmd: "Check diagnostics", func: () => console.log(profiles)}]}/>
            <TopBar user={currUser} corps={currCorps} />
            <HierarchyContainer>
                <HierarchyFeed list={currList} />
            </HierarchyContainer>
        </Root>
    )
}

export default DashBoard