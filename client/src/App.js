import React, { Component } from 'react';
import SongForm from './components/SongForm';
import Billboard from './components/Billboard';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    //TODO make call to server to get songs
  }

  addSong = (name) => {
    
  }

  updateSong = (id) => {

  }

  deleteSong = (id) => {

  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong} />
        <Billboard
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
