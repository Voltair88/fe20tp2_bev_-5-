import { Pie, Line } from "react-chartjs-2";

export const PieChart = ({ data, children }) => {
  if (!data) {
    return null;
  }
  const labels = Object.keys(data);
  const values = Object.values(data);
  console.log(Object)

  return (
    <div>
      <h1>Pie chart</h1>
      {children && <h5>{children}</h5>}
      {/* <Pie
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
      /> */}
    </div>
  );
};

export const LineChart = ({ data, children }) => {
  if (!data) {
    return null;
  }

  const labels = Object.keys(data);
  const dataSets = Object.values(data).map((item) => {
    Object.assign(...item);
  });
  console.log(dataSets);
  return (
    <div>
      {children && <h5>{children}</h5>}
      <Line data={{}} />
    </div>
  );
};


export const LineChartNew = (props) => {

  if (!props.data) {
    /* return null; */
  }

  console.log(props.data)
  //Read LEAGUES_DATA from data.js and choose only id and team name from that data and store in an array
  let teamArr = [];
  for (let key of Object.keys(props.data)) {
    teamArr.push({
      name: props.data,
      value: props.data[key]
      /* label: LEAGUES_DATA.competitions[key].name, */
    });

    console.log(teamArr)
    teamArr = [];
  }

  /* console.log(teamArr) */
  //setTeam_array(teamArr);
  //End LEAGUES_DATA team

  return (
    <>
      <h1>Hey test</h1>
      <div>Nothis toosds</div>
    </>
  );
}

