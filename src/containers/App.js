import React, { Component } from 'react';
import '../css/App.css';
import { Header } from '../components';
import { Content } from '../components';
import { Footer } from '../components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header>
        </Header>
        <Content>
        </Content>
        <Footer>
        </Footer>
      </div>
    );
  }
}

export default App;
