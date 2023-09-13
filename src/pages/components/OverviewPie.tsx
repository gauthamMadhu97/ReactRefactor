import React, { PureComponent } from "react";
import {
  PieChart,
  Cell,
  Sector,
  Pie,
  ResponsiveContainer,
  PieLabel,
  Customized,
  Label,
  LabelProps,
  Legend,
} from "recharts";

export type PieChartDataType = {
  data: {
    name: any;
    value: number;
  }[];
  legend: boolean;
};

const tmpdata = [
  { name: "Pending", value: 60 },
  { name: "Chat", value: 240 },
  { name: "Email", value: 120 },
  { name: "Calls", value: 180 },
];

const COLORS = ["#0088FE", "#10b981", "#083344", "#0891b2", "#a2c9ea"];

const RADIAN = Math.PI / 180;
//@ts-ignore
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} (${(percent * 100).toFixed(0)}%)`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {payload.name}
      </text>
    </g>
  );
};

export default function OverviewPie(props: PieChartDataType) {
  const renderLegend = (props: { payload: any }) => {
    const { payload } = props;

    return (
      <ul>
        {
          //@ts-ignore
          payload.map((entry, index: any) => (
            <li
              className="flex items-center justify-between py-2 text-sm"
              key={`item-${index}`}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.payload.fill }}
              ></div>
              <div className="truncate px-4 text-left font-light">
                {entry.value}
              </div>
              <div className="font-bold">
                {(entry.payload.percent * 100).toFixed(0)}%
              </div>
            </li>
          ))
        }
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
     
        <PieChart width={900} height={300}>
          <Pie
            data={props.data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={props.legend ? undefined : renderActiveShape}
          >
            {props.data.map((entry, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {props.legend && (
            <Legend
              // @ts-ignore
              content={renderLegend}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          )}
        </PieChart>
 
    </ResponsiveContainer>
  );
}
