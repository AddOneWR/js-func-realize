const handler = {
  onBlur(e) {
    editOnBlue(e);
  },

  onCopy(e) {
    editOnCopy(e);
  },

  onFocus(e) {
    editOnFocus(e);
  }
}

class Editor extends Component {
  constructor() {
    this._onBlur = this._buildHandler('onBlue');
    this._onCopy = this._buildHandler('onCopy');
    this._onFocus = this._buildHandler('onFocus');
  }

  _buildHandler(eventName) {
    return e => {
      const method = this.handler && this.hanlder[eventName];

      method && method(e);
    }
  }
}