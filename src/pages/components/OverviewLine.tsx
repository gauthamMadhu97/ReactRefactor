import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    crossell: 4000,
    upsell: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    crossell: 3000,
    upsell: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    crossell: 2000,
    upsell: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    crossell: 2780,
    upsell: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    crossell: 1890,
    upsell: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    crossell: 2390,
    upsell: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    crossell: 3490,
    upsell: 4300,
    amt: 2100,
  },
];

export default class OverviewLine extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="300">
        <div>
            <LineChart
                width={1500}
                height={400}
                data={data}
                margin={{
                    top: 35,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="crossell" stroke="#1e40af" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="upsell" stroke="#82ca9d" />
            </LineChart>
        </div>
      </ResponsiveContainer>
    );
  }
}
