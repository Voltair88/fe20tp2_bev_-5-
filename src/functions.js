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

//team = {34: 'FC Bayern'}
//team[id] // "FC Bayern"

// GROUP_A: {'FC Bayern': 5, 'Atletico': 10}

//Match linje: { 'name' : matchday: [1,3,4...] goalDif: [-1, 2, -3...] }
export function getMatchGoalDiff(data) {
  let output = data.matches
    .filter((item) => item.status === "FINISHED")
    .filter((item) => item.stage === "GROUP_STAGE")
    .map((item) => {
      return item.matchday;
      //return Date.parse(item.lastUpdated);
    });
  console.log(output);
}
