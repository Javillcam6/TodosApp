import React from "react";
import { Iconos } from './Iconos'


function DeleteIcon({ onDelete }) {
    return (
        <Iconos
        type="delete"
        color='gray'
        onClick={onDelete}
        />
    );
}

export { DeleteIcon };