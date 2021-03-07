import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps
    extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > { }

function Button({ className, children, ...rest }: ButtonProps) {
    return (
        <button className={`${styles.button} ${className}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;