export function getTeamsGoalDiff(data) {
  let output = data.standings
    .filter((item) => item.type === "TOTAL")
    .map((item) => {
      return { [item.group]: item.table };
      //console.log(item.group);
      //console.log(item.table);
    });
  let flatData = Object.assign(...output);
  //console.log(flatData);
  //console.log(Object.keys(flatData));

  let flatDataKeys = Object.keys(flatData);
  let flatDataValues = flatDataKeys.map((key) => {
    let object = flatData[key].reduce((acc, item) => {
      acc[item.team.name] = item.points;
      return acc;
    }, {});
    return { [key]: object };
  });
  console.log(flatDataValues);
}

/* const getTeamMatches = (data) => {
  let output = data.matches
    .filter((item) => item.status === "FINISHED")
    .map((item) => {});
}; 

*/

export const buildAllMatchStats = (data) => {
  let teamIDArr = Array(9999)
    .fill()
    .map((x, i) => i);
  // https://stackoverflow.com/a/6299743/12683933

  let result = teamIDArr.map((teamID) => {
    let teamName = "";
    let teamObject = data.matches
      .filter((item) => item.matchday !== null)
      .find((item) => [item.homeTeam.id, item.awayTeam.id].includes(teamID));
    if (!teamObject) {
      // team not found
      return {};
    }
    if (teamObject.homeTeam.id === teamID) {
      teamName = teamObject.homeTeam.name;
    } else {
      teamName = teamObject.awayTeam.name;
    }
    const teamStats = getMatchStats(data, teamID);
    return { [teamName]: [...teamStats] };
  });
  return Object.assign(...result);
};

export const getMatchStats = (data, teamID) => {
  let matchTable = data.matches
    .filter((item) => item.matchday !== null)
    .filter((item) => [item.homeTeam.id, item.awayTeam.id].includes(teamID))
    .map((item) => {
      let { matchday, score, homeTeam, awayTeam } = item;
      let goalDiff = 0;
      let team = {};
      //let matchDate = utcDate.substr(0, 10);
      //console.log(Date.parse(item.utcDate.substr(0, 10)));
      // {goalDiff: 4, (pos om FC Munchen vann)
      // utcDate: '2020-08-08T13:00:00Z',
      // team: {name: 'FC Munchen', id: 42 } }
      // beroende på om vårt lag spelade hemma eller borta
      // vet vi om goalDiff = homeTeam - awayTeam eller tvärtom
      if (homeTeam.id === teamID) {
        // vårt lag spelade HEMMA
        goalDiff = score.fullTime.homeTeam - score.fullTime.awayTeam;
        team = { ...homeTeam };
      } else {
        //vårt lag spelade borta
        goalDiff = score.fullTime.awayTeam - score.fullTime.homeTeam;
        team = { ...awayTeam };
      }

      return { goalDiff, matchday, team };
    });

  return matchTable;
};
/* export const getAllMatchStats = (data) => {
  let matchTable = data.matches.reduce((acc, cur) => {
    acc[homeTeam.name];
    acc[awayTeam.name];
    return acc;
  }, {}); */
/* 
    .map((item) => {
      let { utcDate, score, homeTeam, awayTeam } = item;
      let goalDiff = 0;
      let team = {};
      //console.log(Date.parse(item.utcDate.substr(0, 10)));
      // {goalDiff: 4, (pos om FC Munchen vann)
      // utcDate: '2020-08-08T13:00:00Z',
      // team: {name: 'FC Munchen', id: 42 } }
      // beroende på om vårt lag spelade hemma eller borta
      // vet vi om goalDiff = homeTeam - awayTeam eller tvärtom
      if (homeTeam.id === teamID) {
        // vårt lag spelade HEMMA
        goalDiff = score.fullTime.homeTeam - score.fullTime.awayTeam;
        team = { ...homeTeam };
      } else {
        //vårt lag spelade borta
        goalDiff = score.fullTime.awayTeam - score.fullTime.homeTeam;
        team = { ...awayTeam };
      }

      return { goalDiff, utcDate, team };
    });
*/
/*   return matchTable;
}; */

//team = {34: 'FC Bayern'}
//team[id] // "FC Bayern"

// GROUP_A: {'FC Bayern': 5, 'Atletico': 10}
//returns a single object corresponding to team id based on standings data
export const getTeamStats = (data, teamId) => {
  console.log(`data: ${data}, teamID:${teamId}`);
  let tables = data.standings
    .filter((item) => item.type === "TOTAL")
    .map((item) => {
      return item.table;
    });

  let mergedTables = [].concat.apply([], tables);

  let idTeam = mergedTables.find((item) => item.team.id === Number(teamId));
  //console.log(idTeam);
  return idTeam;
};

//Match linje: { 'name' : matchday: [1,3,4...] goalDif: [-1, 2, -3...] }
