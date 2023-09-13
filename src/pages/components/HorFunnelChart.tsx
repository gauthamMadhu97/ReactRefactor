import React from 'react';
import { FunnelChart, Funnel, Legend, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const FunnelChartComponent = (props: any) => {
  // const data = [
  //   { name: 'Prospects', value: 100, fill: '#10b981' },
  //   { name: 'Qualified Prospects', value: 80, fill: '#0088FE' },
  //   { name: 'Needs Analysis', value: 60, fill: '#083344' },
  //   { name: 'Proposal/Quote', value: 40, fill: '#0891b2' },
  //   { name: 'Negotiations', value: 20, fill: '#a2c9ea' },
  //   { name: 'Closed', value: 10, fill: '#1e40af' },
  // ];

console.log(props,"dataaaaaaaaaaaaaaaaaaaaaaa")

  // // Set the value and fill color for the last segment
  // const lastIndex = data.length - 1;
  // data[lastIndex].value = data[lastIndex - 1].value; // Set value same as second-to-last segment
  // data[lastIndex].fill = data[lastIndex - 1].fill; // Set fill color same as second-to-last segment

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <FunnelChart layout='radial'>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            content={({ payload }: any) => (
              <div className='flex flex-row flex-wrap gap-x-16 justify-center'>
                {payload[0].payload.data.map((entry: any, index: number) => (
                  <span
                    key={`legend-${index}`}
                    style={{ color: entry.fill }}
                    className="flex flex-row items-center"
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: props.data[index].fill,
                        marginRight: '5px',
                        borderRadius:'20px'
                      }}
                    ></div>
                    {props.data[index].name}
                  </span>
                ))}
              </div>
            )}
          />
          <Funnel
          onClick={(data)=> { props.setFunnelPart(data["name"]);props.setFill(data["fill"]) }}
            orientation="left"
            dataKey="value"
            data={props.data}
            isAnimationActive={true}
          >
            <LabelList
              onClick={(data)=> { console.log(data) }}
              position="center"
              fill="#fff"
              stroke="none"
              dataKey="value"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelChartComponent;
