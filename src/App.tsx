import  React from 'react';
import './App.css';
import FCCounter from "./components/FCCounter"
export default class App extends React.Component<{}, { count: number }> {
  state = { count: 0 };

  render() {
    return (
      <div className='App'>
      <FCCounter 
        label={'Counter'}
        count={this.state.count}
        onIncrement={() => { this.setState({ count: this.state.count + 1 }); }}
        onDecrement={()=>{this.setState({count:this.state.count-1})}}
      />
      </div>
    );
  }
}