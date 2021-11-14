import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import HierarchyNode from "./HierarchyNode";

const Root = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
`

const List = styled.ol`
    display: flex;
    flex-direction: column;
`

const HierarchyFeed = ({ list }) => {
    const [listModel, setListModel] = useState(list)

    useEffect(() => {
        setListModel(list)
    }, [list])

    


    // create a dynamic ordered list
    return (
        <Root>
            <List>
                {listModel ? <li><HierarchyNode user={listModel}/></li> : null}
                {listModel.manages !== undefined && listModel.manages !== null && listModel.manages.length > 0 ? listModel.manages.map((elem) => {
                    return <li><HierarchyFeed list={elem} /> </li>
                }): null}
            </List>
        </Root>
    )
}

export default HierarchyFeed