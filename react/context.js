const DataContext = React.createContext({
  name: 'Tom',
  age: 20
});

class App extends Component {
  render() {
    return (
        <DataContext.Provider value={{ name: 'Bob', age: 20}}>
          <Family />
      </DataContext.Provider>
    )
  }
}

const Family = () => <Person />;

class Person extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {context => (
          <p>Hello, My name is {context.name}, I'm {context.age} years old.</p>
        )}
      </DataContext.Consumer>
    )
  }
}