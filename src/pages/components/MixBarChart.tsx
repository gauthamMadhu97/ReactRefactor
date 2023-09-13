import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Week 1',
    mails: 4000,
    calls: 2400,
    replies: 2400,
  },
  {
    name: 'Week 2',
    mails: 3000,
    calls: 1398,
    replies: 2210,
  },
  {
    name: 'Week 3',
    mails: 2000,
    calls: 9800,
    replies: 2290,
  },
  {
    name: 'Week 4',
    mails: 2780,
    calls: 3908,
    replies: 2000,
  },
  {
    name: 'Week 5',
    mails: 1890,
    calls: 4800,
    replies: 2181,
  },
  {
    name: 'Week 6',
    mails: 2390,
    calls: 3800,
    replies: 2500,
  },
  {
    name: 'Week 7',
    mails: 3490,
    calls: 4300,
    replies: 2100,
  },
];

export default class MixBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
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
          <Bar dataKey="calls" stackId="a" fill="#8884d8" />
          <Bar dataKey="replies" stackId="a" fill="#82ca9d" />
          <Bar dataKey="mails" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
