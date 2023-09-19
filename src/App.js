//import React from "react";
//function App() {
//    const containers = []; // Create an array to hold the container elements
//    for (let i = 0; i < 5; i++) {
//        containers.push(
//<div key={i}> {/* Add a unique key to each element */}
//   <h1>Container {i + 1}</h1>
//</div>
//        );
//    }
//    return <div>{containers}</div>; // Render the array of container elements
//}
//export default App;
/** Exercício 1: Componente de Saudação Crie um componente chamado Greeting que recebe um nome como prop e exiba uma mensagem de saudação personalizada. Por exemplo, se a prop fornecida for "João", o componente deve exibir "Olá, João!".
//INICIO
import React from "react";
const element = <Greeting name="React Dev"/>
function Greeting(props) {
    return (<p>Hello, {props.name}!</p>);
}
function App () {
    return(
        element
    )
}
export default App;
//FIM
*/

/*Exercício 2: Contador Crie um componente Counter que exiba um número inicial e dois botões: "Incrementar" e "Decrementar". Ao clicar nesses botões, o número exibido deve aumentar ou diminuir em 1, respectivamente. */

/*import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter;
*/

/**
 * Exercício 3: Lista de Tarefas
 * 
 *
Crie um componente TodoList que exiba uma lista de tarefas. Você deve criar um estado que contenha um arrQay de tarefas e, em seguida, renderizar essa lista na tela. Adicione a capacidade de marcar tarefas como concluídas e removê-las da lista.
 */

import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Estudar Parâmetros' },
    { id: '2', text: 'Estudar Componentes' }
  ]);

  const toggleTodoCompletion = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, concluido: !todo.concluido } : todo
      )
    );
  };

  const removerTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const itemsRenderizados = todos.map(todo => (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.concluido}
        onChange={() => toggleTodoCompletion(todo.id)}
      />
      {todo.text}
      <button onClick={() => removerTodo(todo.id)}>Remover</button>
    </li>
  ));

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>{itemsRenderizados}</ul>
    </div>
  );
};

export default TodoList;
