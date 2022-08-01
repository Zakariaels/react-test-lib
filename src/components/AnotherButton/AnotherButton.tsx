
import React from 'react';

interface AnotherButtonProps {
    label: string;
}
const AnotherButton = ({ label }: AnotherButtonProps) => {

    return  <button>{ label } </button>
}

export default AnotherButton;