import { Pie, Line } from "react-chartjs-2";

export const PieChart = ({ data, children }) => {
  if (!data) {
    return null;
  }
  const labels = Object.keys(data);
  const values = Object.values(data);

  return (
    <div>
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
  let matchdays = Object.values(data).map((item) => {
    return item.map(({ matchday }) => matchday);
  });

  let datasets = Object.values(data).map((item) => {
    let data = item.map(({ goalDiff }) => goalDiff);
    let label = item[0].team.name;
    let datasetKeyProvider = item[0].team.id;

    return { data, label, datasetKeyProvider };
  });
  console.log(datasets);
  let labels = [...new Set([].concat.apply([], matchdays))];
  console.log(datasets);
  return (
    <div>
      {children && <h5>{children}</h5>}
      <Line
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </div>
  );
};
