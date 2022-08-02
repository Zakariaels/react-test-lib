
import React from 'react';
import './Button.less';

export interface ButtonProps {
    label: string;
}
export const Button = ({ label }: ButtonProps) => {

    return  <button className='button'>{ label } </button>
}

// export default Button;