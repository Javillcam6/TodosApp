import React from 'react';
import { TodoCounter } from './componets/TodoCounter'
import { TodoSearch } from './componets/TodoSearch'
import { TodoList } from './componets/TodoList'
import { TodoItem } from './componets/TodoItem'
import { CreateTodoButton } from './componets/CreateTodoButton'
import { TodoTittle } from './componets/TodoTittle'
import { TodosError } from './componets/AppUiComponnets/TodosError'
import { TodosLoading } from './componets/AppUiComponnets/TodosLoading'
import { EmptyTodos } from './componets/AppUiComponnets/EmptyTodos'
import './App.css'
import { TodoContext } from './TodoContext';
import { Modal } from './Modal';
import { TodoForm } from './componets/TodoForm/TodoForm'


function AppUI() {
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
        <TodoTittle/>
        <TodoCounter />
        <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length ===0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} 
                    />
                ))}
            </TodoList>
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />

        {openModal && (
            <Modal> 
            <TodoForm />
            </Modal>
        )}
        </>
    )
}

export { AppUI };