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
  /*   padding: 0.2rem;
 */
  overflow: hidden; // Or flex might break
  list-style: none;
  border-bottom: solid 1px black;
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
