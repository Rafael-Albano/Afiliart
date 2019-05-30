import React, {Component} from 'react';


export default class InputCustomizado extends Component {

    render(){
        return(
            <input id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} required/>
        );
    }

}