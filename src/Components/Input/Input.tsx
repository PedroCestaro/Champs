import React, {InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label,name, ...rest}) =>{
    return(
        <div className="inputBox">
            <label>{label}</label>
            <input type="" name={name} {...rest}/>
        </div>
    );
}

export default Input;