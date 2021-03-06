import React from 'react';
import Song from './Song';

const Billboard = ({ songs, updateSong, deleteSong }) => (
  <div className="row">
    { songs.map( song =>
    <Song
      key={song.id}
      {...song}
      updateSong={updateSong}
      deleteSong={deleteSong}
    />
  )}
  </div>
)
export default Billboard;
