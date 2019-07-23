import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // we need to bind the search function either with this ...
    this.handleTheChange = this.handleTheChange.bind(this);

    // or with an arrow function when working with "handleTheChange" ... 
    // since arrow function are automatically binded to the componenet once 
    // being used
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }


  handleTheChange(e) {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1>Creepy Monsters</h1>
        {/* <input
          type="search"
          placeholder="Search for monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        /> */}

        {/* <CardList monsters={this.state.monsters} /> */}
        <SearchBox
          placeholder="Search for monsters"
          handleChange={this.handleTheChange} />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
