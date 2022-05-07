import './App.css';
import UseEffectHook from './UseEffectHook';
import UseLayoutEffect from './UseLayoutEffect';
import UseReducerHook from './UseReducerHook';
import UseRefHook from './UseRefHook';
import UseStateHook from './UseStateHook';

function App() {
  return (
    <div className="App">
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseReducerHook></UseReducerHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <UseRefHook></UseRefHook> */}
      <UseLayoutEffect></UseLayoutEffect>
    </div>
  );
}

export default App;
