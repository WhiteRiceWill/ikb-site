import React, { Component } from 'react';
import styles from './Home.module.css';
import IkbHolderSection from '../IkbHolderSection/IkbHolderSection';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ikbHolders: null,
    };

    this.getIkbHolders = this.getIkbHolders.bind(this);
  }

  componentDidMount() {
    this.getIkbHolders();
  }

  async getIkbHolders() {
    try {
      const response = await fetch('/api/ikb/holders');
      const data = await response.json();

      this.setState({
        ikbHolders: data.holders,
      });
    } catch (err) { };
  }

  render() {
    let ikbHoldersSections;
    const { ikbHolders } = this.state;

    if (ikbHolders) {
      ikbHoldersSections = ikbHolders.map(holder => (
        <IkbHolderSection
          address={holder.address}
          balance={holder.balance}
        />
      ));
    }

    return (
      <div>
        {ikbHolders &&
          ikbHoldersSections
        }
      </div>
    );
  }
}

export default Home;
