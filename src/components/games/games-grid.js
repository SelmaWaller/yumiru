import React from "react";
import {Link} from 'react-router-dom';
import gameObjects from "../../lib/game-objects";
import OverviewGames from "../styles/wrappers/overview-games";

const GamesGrid = () => {
  return (
    <>
      {gameObjects.map((game, index) => {
        return (
          <OverviewGames key={index}>
         <Link to="/">
              <div key={index}>
             <h1>{game.japName}</h1> 
            <h2>{game.furigana1}</h2>
            <h3>{game.engName}</h3>
            </div>
          </Link>
          </OverviewGames>
        );
      })}
    </>
  );
};

export default GamesGrid;
