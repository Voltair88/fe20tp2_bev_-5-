import styled from "styled-components";

const PlayerItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 90%;
  height: auto;
  margin: 0 auto;
  overflow: hidden; // Or flex might break
  list-style: none;
  border-bottom: solid 1px black;
  span {
    width: 20%;
    padding: 1em;
    box-sizing: border-box;
    flex-grow: 1;
  }
`;

const Player = ({ player }) => (
  <PlayerItem>
    <span>{player.name}</span>
    {!player.position ? (
      <span>Role: {player.role}</span>
    ) : (
      <span>Role: {player.position}</span>
    )}
    <span>Nationality: {player.nationality}</span>
  </PlayerItem>
);

export default Player;
