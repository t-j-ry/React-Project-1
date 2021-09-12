import './App.css';
import { Component } from 'react';
import Listitem from './Listitem';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shoppingInput: '',
      shoppingList: [],
      sortFunc: 'DESC'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state.shoppingInput.trim().length > 0 &&  (
      
      this.setState({
        shoppingList: this.state.shoppingList.concat({ id: Math.random(), name: this.state.shoppingInput, timeStamp: e.timeStamp }),
        shoppingInput: ''
      })
    
    )
  };

  handleKeypress = (e) => {
  if (e.keyCode === 13) {
    this.handleSubmit();
  }
};

  handleAdd = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
      [name]: value
    });

  };

  handleDelete = (id) => {
    const newList = this.state.shoppingList.filter((item) => item.id !== id);
    
    this.setState({
      shoppingList: newList
    })
  };

  handleSort = (bar) => {
      bar === 'DESC' ? (
        this.sortDesc()    
      ) : ( 
        this.sortAsc()
      )
  }

  sortDesc = () => {
    this.setState({
      sortFunc: 'ASC'
    })
    this.setState(
      this.state.shoppingList.sort((x,y) => {
        return y.timeStamp - x.timeStamp
      })
    )
  };

  sortAsc = () => {
    this.setState({
      sortFunc: 'DESC'
    })
    this.setState(
      this.state.shoppingList.sort((x,y) => {
        return x.timeStamp - y.timeStamp
      })
    )
  };


  render() {
    return (
      <div className="App" style={{marginTop: "1rem"}}>
        <Form 
          onSubmit={this.handleSubmit}
          name="shoppingInput"
          value={this.state.shoppingInput}
          onChange={this.handleAdd}
          onKeyPress={this.handleKeypress}
        />
        <button onClick={() => this.handleSort(this.state.sortFunc)}>Sort: {this.state.sortFunc}</button>
        <ul>
          {this.state.shoppingList.map((item) => { 
            return (
              <Listitem 
                key={item.id} 
                value={item.name} 
                timeStamp={item.timeStamp} 
                onClick={() => this.handleDelete(item.id)}
              />
            )
          })
          }
        </ul>
      </div>
    );
  }
}

export default App;
