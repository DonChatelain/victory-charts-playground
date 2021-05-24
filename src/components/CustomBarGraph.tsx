import { DomainPropType, VictoryChart, VictoryScatter, VictoryTheme, VictoryTooltip, VictoryZoomContainer } from "victory";
import './CustomBarGraph.scss';

interface CustomBarGraphProps {
  data: CustomDataPoint[];
  domain: DomainPropType;
}

export const CustomBarGraph: React.FC<CustomBarGraphProps> = ({
  data,
  domain,
}) => {

  const mapSizeToColor = (size: number): string => {
    size = map(size, 0, 100, 60, 0)
    return `hsl(${size},100%,50%)`;

    function map(n: number, inMin: number, inMax: number, outMin: number, outMax: number) {
      return (n - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  };

  return (
    <div className="CustomBarGraph">
      <VictoryChart
        width={1000}
        height={700}
        theme={VictoryTheme.material}
        domain={domain}
        containerComponent={
          <VictoryZoomContainer/>
        }
      >
        <VictoryScatter
          style={{
            data: { fill: (data) => mapSizeToColor(data.datum.size)}
          }}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onClick: () => [{
                  target: 'data',
                  mutation: (props) => {
                    alert(JSON.stringify(props, undefined, ' '))
                    return null
                  }
                }],
              }
            }
          ]}
          labels={({ datum, label }) => `${label}: ${datum.size}`}
          labelComponent={
            <VictoryTooltip
              dy={({datum}) => datum.size * -0.85} // offsets vertical placement by a negative ratio of the data point's size
              constrainToVisibleArea
            />
          }

          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
        />

      </VictoryChart>
    </div>
  );
};