import React from "react";
import { Iconos } from './Iconos'


function CompleteIcon ({ completed, onComplete }) {
    return (
        <Iconos
        type='check'
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };