import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import HierarchyNode from "./HierarchyNode";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    max-width: 100%;
    height: 25%;
`

const List = styled.table`
    display: flex;
    flex-direction: column;
    list-style: none;
    border-collapse: collapse
`

const ListItem = styled.tr`
    display: flex;
    flex-direction: row;
    margin: auto;

    &:first-child {
        border-top: 1px solid black;
    }
`

const HierarchyFeed = ({ list }) => {
    const [listModel, setListModel] = useState({})

    useEffect(() => {
        setListModel(list)
    }, [list])

    // create a dynamic ordered list
    return (
        <Root>
            <List>
                {listModel  ? <ListItem><HierarchyNode user={listModel}/></ListItem> : null}
                <ListItem>
                    {listModel.manages !== undefined && listModel.manages !== null && listModel.manages.length > 0 ? listModel.manages.map((elem) => {
                        return <HierarchyFeed key={`${elem.position}-${elem.continent}-${elem.country}-${elem.city}`} list={elem} />
                    }): null}
                </ListItem>
            </List>
        </Root>
    )
}

export default HierarchyFeed