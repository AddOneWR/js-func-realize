const App = () => (
  <ChildRenderer render={name => <div>Hello, {name}</div>}
)

class ChildRenderer extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  state = {
    name: ''
  }

  ComponentDidMount() {
    fetch()
        .then(name => this.setState({ name }));
  }
  render() {
    return (
        <div className='child-wrapper'>
          {this.props.render(this.state.name)}
      </div>
    )
  }
}
