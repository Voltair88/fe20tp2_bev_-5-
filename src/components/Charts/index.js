import { Pie, Line } from "react-chartjs-2";
import randomColor from "randomcolor";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 90%;
  padding: 3%;
  margin: 0 auto;
  h5 {
    width: 100%;
  }
`;

export const PieChart = ({ data, children }) => {
  if (!data) {
    return null;
  }
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <Container>
      <h1>Pie chart</h1>
      {children && <h5>{children}</h5>}
      <div>
        <Pie
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
          data={{
            datasets: [
              {
                data: values,
                backgroundColor: ["green", "yellow", "red"],
              },
            ],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: labels,
          }}
        />
      </div>
    </Container>
  );
};

export const LineChart = ({ matchData }) => {
  if (!matchData) {
    return null;
  }

  const matchDays = () => {
    if (Array.isArray(matchData)) {
      let matchdays = matchData.map(({ matchday }) => `Matchday: ${matchday}`);
      return matchdays;
    } else {
      let matchdays = Object.values(matchData).map((item) => {
        return item.map(({ matchday }) => `Matchday: ${matchday}`);
      });
      return matchdays;
    }
  };

  const getData = () => {
    if (Array.isArray(matchData)) {
      let data = matchData.map(({ goalDiff }) => goalDiff);
      let label = matchData[0].team.name;
      let datasetKeyProvider = matchData[0].team.id;
      let borderColor = randomColor({ seed: matchData[0].team.id });
      let backgroundColor = randomColor({ seed: matchData[0].team.id });
      let fill = true;
      return [
        { data, label, datasetKeyProvider, borderColor, backgroundColor, fill },
      ];
    } else {
      let sets = Object.values(matchData).map((item) => {
        let data = item.map(({ goalDiff }) => goalDiff);
        let label = item[0].team.name;
        let datasetKeyProvider = item[0].team.id;
        let borderColor = randomColor({ seed: item[0].team.id });
        let backgroundColor = randomColor({ seed: item[0].team.id });
        let fill = false;
        return {
          data,
          label,
          datasetKeyProvider,
          borderColor,
          backgroundColor,
          fill,
        };
      });
      return sets;
    }
  };
  let datasets = getData();
  console.log(datasets);
  let labels = [...new Set([].concat.apply([], matchDays()))];
  return (
    <Container>
      <h5>Goal Difference per match</h5>
      <Line
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        }}
      />
    </Container>
  );
};
