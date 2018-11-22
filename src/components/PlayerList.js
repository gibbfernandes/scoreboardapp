import React from 'react';
//import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { ({ players, actions }) => (
          <React.Fragment>
          {players.map( (player, index) =>
            <Player
              key={player.id.toString()}
              index={index}
              isHighScore={actions.highScore === player.score}
            />
          )}
          </React.Fragment>
        )}
    </Consumer>
  );
}

// PlayerList.propTypes = {
//   highScore: PropTypes.number
// };

export default PlayerList;
