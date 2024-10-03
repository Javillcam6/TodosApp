import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);  
  const [loading, setLoading] = React.useState(true);  
  const [error, setError] = React.useState(false);  

    
  React.useEffect(() =>{
    setTimeout(() => {
      try{ 
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;  
        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          } 
    
          setLoading(false);
      } catch (error) {
        setLoading(false) ; 
        setError(true);
  
      }
    }, 2000)
    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };
  
    return {
      item,
      saveItem,
      loading,
      error,}
  }

export {  useLocalStorage };


// localStorage.removeItem('MINIMALIST_V1');


// const defaultToDos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Estudiar ingles', completed: false},
//   {text: 'Estudiar react', completed: true},
//   {text: 'Correr 20 min', completed: false},
//   {text: 'Correr 40 min', completed: true},
//   {text: 'Correr 4 min', completed: true},
// ]

// localStorage.setItem('MINIMALIST_V1', JSON.stringify(defaultToDos));
// localStorage.removeItem('MINIMALIST_V1');