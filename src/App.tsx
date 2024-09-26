import TodoProvider from "./context/TodoProvider";
import TodoForm from "./Components/todo/TodoForm";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
    </TodoProvider>
  );
}

export default App;
