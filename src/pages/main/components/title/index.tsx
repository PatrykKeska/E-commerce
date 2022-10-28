import React from "react";
import {Props} from "./types/props";
import {State} from "./types/state";


export class Title extends React.Component<Props, State> {

    state: State = {
        value :this.props.content
    }
    render() {
        return(
            <h2 className='title'>{this.state.value}</h2>
        )
    }
}