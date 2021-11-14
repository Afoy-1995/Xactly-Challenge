import React,{useState, useEffect, useCallback} from 'react'
import styled from 'styled-components/macro'
import { isTvScreen } from '../../utils/utils'

const Menu = styled.ul`
    font-size: 14px;
    background-color: #fff;
    border-radius: 2px;
    padding: 5px 0 5px 0;
    width: 150px;
    height: auto;
    margin: 0;
    position: absolute;
    list-style: none;
    box-shadow: 0 0 20px 0 #ccc;
    opacity: 1;
    transition: opacity 0.5s linear;
    top: ${({yPos}) => (yPos)}px;
    left: ${({xPos}) => (xPos)}px;
`
const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    
    &:hover {
        cursor: pointer;
        border: 1px solid black;
    }
`

const useContextMenu = () => {
        const [coordinates, setCoords] = useState({x: 0, y: 0})
        const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        document.addEventListener("click", handleClick)
        document.addEventListener("contextmenu", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleClick)
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    })

    const handleContextMenu = useCallback((e) => {
        e.preventDefault()

        setCoords({x: e.pageX, y: e.pageY})
        setShowMenu(true)
    }, [setCoords ,setShowMenu])

    const handleClick = useCallback((e) => {
        e.preventDefault();
        showMenu && setShowMenu(false)
    }, [showMenu])

    return {xPos: coordinates.x, yPos: coordinates.y ,showMenu, handleClick, handleContextMenu}
}

const ContextMenu = ({menuItems}) => {
    const {xPos, yPos, showMenu} = useContextMenu()
    return (
       <>
            {showMenu && !isTvScreen() ? 
                <Menu className="menu" xPos={xPos} yPos={yPos}>
                    {menuItems.map((item) => {
                        return <MenuItem onClick={() => item.func()}>{item.cmd}</MenuItem>  
                    })}
                </Menu>
            : null}   
       </>
    )
}

export {useContextMenu, ContextMenu}