import React from 'react';
import './styles/App.css';
import TileComponent from './components/TileComponent';

interface AppProps 
{

};

interface AppState
{

};

export default class App extends React.Component<AppProps, AppState>
{

  render(): React.ReactNode
  {
    return (
      <div className="App">
        <header>
        </header>
        <TileComponent />
      </div>
    );
  }

};


