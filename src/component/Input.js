import React , { Component } from 'react';
import '../assets/css/EmailJoin.css';

class Input extends Component {
    render() {
        const {type , id, placeholder, value, onChange } = this.props
        return(
            <input 
                type={type} 
                id={id} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange} 
            />
        );
    }
}

export default Input;
