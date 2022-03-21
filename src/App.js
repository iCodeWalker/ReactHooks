import logo from "./logo.svg";
import "./App.css";
import UseMemoHook from "./hooks/useMemoHook";
import UseContextHook from "./hooks/useContextHook";
import UseCallbackHook from "./hooks/useCallbackHook";
import UseLayoutEffectHook from "./hooks/useLayoutEffectHook";
import UseReducerHook from "./hooks/useReducerHook";

function App() {
  return (
    <div className='App'>
      <UseReducerHook />
    </div>
  );
}

export default App;
