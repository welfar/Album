import { useState } from "react";

import { Sheet } from "../components/Sheet";

export const Album = () => {
  const [initialCharacters, setInitialCharacters] = useState(
    new Array(826).fill(1)
  );
  const [initialEpisodes, setInitialEpisodes] = useState(new Array(51).fill(1));
  const [viewCharacters, setViewCharacters] = useState(true);

  return (
    <>
      <h2 className="title">Mi álbum</h2>

      <div className="subTitle_container">
        <button
          className="subTitle_content"
          onClick={() => setViewCharacters(true)}
        >
          Personajes
        </button>
        <button
          className="subTitle_content"
          onClick={() => setViewCharacters(false)}
        >
          Episodios
        </button>
      </div>

      {viewCharacters ? (
        <div className="sheet_container">
          {initialCharacters.map((item, index) => {
            return (
              <div>
                <Sheet key={index} num={index + 1} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="sheet_container">
          {initialEpisodes.map((item, index) => {
            return (
              <div>
                <Sheet key={index} num={index + 1} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
