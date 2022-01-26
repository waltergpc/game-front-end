import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/SearchBar";
import { usePlayers } from "../Context/PlayerContext";

import "../PagesCss/Players.css";

const Players = () => {
  const {
    fetchPlayers,
    searchPlayers,
    players,
    isPlayersLoading,
    totalCount,
    errorMsg,
  } = usePlayers();
  const [page, setPage] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [searchUrl, setSearchUrl] = useState(null);

  useEffect(() => {
    if (!searchUrl) {
      fetchPlayers(page);
    }
    if (searchUrl) {
      searchPlayers(searchUrl, page);
    }

    //eslint-disable-next-line
  }, [page, searchUrl]);

  if (isPlayersLoading) return <Loading />;

  const resetPlayers = () => {
    setSearchUrl(null);
    setPage(1);
  };

  return (
    <div className="player-container">
      {errorMsg && <section className="error-msg">{errorMsg}</section>}
      <div className="table-container">
        <SearchBar setPage={setPage} setSearchUrl={setSearchUrl} />
        <div className="players-table">
          <table>
            <thead>
              <tr className="header">
                <th>Avatar</th>
                <th>Nickname</th>
                <th>Name</th>
                <th>Ranking</th>
                <th>Status</th>
                <th>Player ID</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr>
                  <td>
                    <img
                      className="image-profile"
                      src={player.avatar}
                      alt={player.nickname}
                    />
                  </td>
                  <td>{player.nickname}</td>
                  <td>{player.name}</td>
                  <td>{player.ranking}</td>
                  <td>
                    {player.status === "oro"
                      ? "Gold"
                      : player.status === "plata"
                      ? "Silver"
                      : "Bronze"}
                  </td>
                  <td>{player._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-all-players-container">
          <button
            className="button-all-players"
            type="button"
            onClick={resetPlayers}
          >
            Back to All Players
          </button>
        </div>
        <Pagination
          totalCount={totalCount}
          page={page}
          maxPageNumberLimit={maxPageNumberLimit}
          minPageNumberLimit={minPageNumberLimit}
          setMaxPageNumberLimit={setMaxPageNumberLimit}
          setMinPageNumberLimit={setMinPageNumberLimit}
          changePage={setPage}
        />
      </div>
    </div>
  );
};

export default Players;
