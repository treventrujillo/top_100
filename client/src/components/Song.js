import React from 'react';

const Song = ({ id, name, updateSong, deleteSong }) => (
  <div className="col s12">
    <div className="col m8">
      <div className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <button>This doesnt do anything yet.</button>
    </div>
    <div className="col m2"  onClick={ () => deleteSong(id)}>
      X
    </div>
  </div>

)

export default Song;
