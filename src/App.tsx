import TodoProvider from "./context/TodoProvider";
import TodoForm from "./Components/todo/TodoForm";
import TodoLiat from "./Components/todo/TodoLiat";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoLiat />
    </TodoProvider>
  );
}

export default App;
