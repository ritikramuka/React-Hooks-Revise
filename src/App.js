import './App.css';
import UseEffectHook from './UseEffectHook';
import UseReducerHook from './UseReducerHook';
import UseRefHook from './UseRefHook';
import UseStateHook from './UseStateHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseReducerHook></UseReducerHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      <UseRefHook></UseRefHook>
    </div>
  );
}

export default App;
