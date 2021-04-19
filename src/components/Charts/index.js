import { Pie, Line } from "react-chartjs-2";
import randomColor from "randomcolor";
import styled from "styled-components";


const Container = styled.div`
  background-color: aqua;
  display: flex;
`

export const PieChart = ({ data, children }) => {
  if (!data) {
    return null;
  }
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <div>
      <h1>Pie chart</h1>
      {children && <h5>{children}</h5>}
      <Pie
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
  );
};

export const LineChart = ({ data, children }) => {
  if (!data) {
    return null;
  }

  const matchDays = () => {
    if (Array.isArray(data)) {
      let matchdays = data.map(({ matchday }) => matchday);
      return matchdays;
    } else {
      let matchdays = Object.values(data).map((item) => {
        return item.map(({ matchday }) => matchday);
      });
      return matchdays;
    }
  };

  let datasets = Object.values(data).map((item) => {
    let data = item.map(({ goalDiff }) => goalDiff);
    let label = item[0].team.name;
    let datasetKeyProvider = item[0].team.id;
    let borderColor = randomColor({ seed: item[0].team.id });
    let fill = false;
    return { data, label, datasetKeyProvider, borderColor, fill };
  });

  let labels = [...new Set([].concat.apply([], matchDays()))];
  return (
    <Container>
      {children && <h5>{children}</h5>}
      <Line
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </Container>
  );
};

export const LineChartNew = (props) => {
  if (!props.data) {
  }

  //Read LEAGUES_DATA from data.js and choose only id and team name from that data and store in an array
  let teamArr = [];
  for (let key of Object.keys(props.data)) {
    teamArr.push({
      name: props.data,
      value: props.data[key],
    });

    teamArr = [];
  }
  return (
    <>
      <h1>Hey test</h1>
      <div>Nothis toosds</div>
    </>
  );
};
