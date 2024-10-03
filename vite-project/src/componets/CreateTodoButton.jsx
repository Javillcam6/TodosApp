import '../componets/CreateTodoButton.css'
import { Modal } from '../Modal'


function CreateTodoButton ({ setOpenModal }) {
    return(
        <button className='CreateTodoButton' 
        onClick={(event) => {
            setOpenModal(state => !state);
        }}>+</button>
    )
}

export {CreateTodoButton};