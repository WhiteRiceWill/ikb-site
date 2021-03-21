import React, { Component } from 'react';
import styles from './IkbHolderSection.module.css';

class IkbHolderSection extends Component {
  render() {
    return (
      <div>
        <span>{`${this.props.address} has ${this.props.balance} IKB tokens`}</span>
      </div>
    );
  }
}

export default IkbHolderSection;
