import React, { Component } from 'react';
import axios from 'axios';
import SongForm from './components/SongForm';
import Billboard from './components/Billboard';

class App extends Component {
  state = { songs: [] }

  componentDidMount() {
    axios.get(`/api/items`)
      .then( res => this.setState({ songs: res.data }))
  }

  addTitle = (name) => {
    let title = { name };
    fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(title)
    }).then( res => res.json() )
      .then( song => {
        const { songs } = this.state;
        this.setState({ songs: [...songs, song] });
    })
  }

  updateSong = (id) => {
    axios.put(`/api/songs/${id}`, { method: 'PUT' })
      .then( res => res.json() )
        const songs = this.state.songs.map( t => {
          if (t.id === id)
            return t
          return t
        });

        this.setState({ songs });
  }

  deleteSong = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then ( () => {
        const { songs } = this.state;
        this.setState({ songs: songs.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addTitle} />
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
