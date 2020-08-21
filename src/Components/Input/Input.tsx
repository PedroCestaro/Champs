import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label,name}) =>{
    return(
        <div className="inputBox">
            <label>{label}</label>
            <input type="text" className={name}/>
        </div>
    );
}

export default Input;