import { Pie } from "react-chartjs-2";

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
