import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--filled', 'btn--empty']
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    to,
    type = 'button',
    onClick,
    buttonStyle,
    buttonSize,
    className=''
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZE.includes(buttonSize)
    ? buttonSize : SIZE[0]

    const buttonClasses = `btn ${checkButtonStyle} ${checkButtonSize} ${className}`.trim();
    if (to) {
        return (
            <Link to={to} className = "btn-mobile">
                <button
                 className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                 onClick={onClick}
                 type={type}>
                    {children}
                </button>
            </Link>
        );
    }
    return (
            <button 
            className={buttonClasses} 
            onClick={onClick} 
            type={type}>
                {children}
            </button>
    );
};
