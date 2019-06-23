import React from 'react';
import { createPortal } from 'react-dom';

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }

  render() {
    return createPortal(
      <div class="dialog">
        {this.props.children}
      </div>,  //塞进传送门的JSX
      this.node  //传送门的另一端DOM node
    );
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
}