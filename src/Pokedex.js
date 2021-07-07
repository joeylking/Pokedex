import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let result;
    if (this.props.isWinner) {
      result = <h1 className="winner">Winning hand!</h1>;
    } else {
      result = <h1 className="loser">Losing hand!</h1>;
    }
    return (
      <div className="Pokedex">
        {result}
        <h4>Total Experience: {this.props.exp}</h4>

        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
