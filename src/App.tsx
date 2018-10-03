import * as React from 'react';
import './App.css';
import Hello from './components/StatefulHello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Hello name={"Fiskbil"} enthusiasmLevel={25}/>
      </div>
    );
  }
}

export default App;
