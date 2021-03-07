import React from 'react';
import styles from './Input.module.scss';

interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

function Input({className, ...rest}: InputProps) {
    return <input className={`${styles.input} ${className}`} {...rest} />;
}

export default Input;
