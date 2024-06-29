import { Provider } from "react-redux";
import { store } from "./app/store";

import "./App.css";
import Todo from "./components/Todo";
import AddForm from "./components/AddForm";

function App() {
  return (
    <>
      <Provider store={store}>
        <AddForm />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
