import React, {Component} from 'react'
import styled from 'styled-components/macro'


class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.profiles = props.profiles
        this.corps = props.corp
    }
}

export default DashBoard