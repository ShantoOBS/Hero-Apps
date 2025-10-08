import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "5 star", value: 12000 },
  { name: "4 star", value: 8000 },
  { name: "3 star", value: 4000 },
  { name: "2 star", value: 2500 },
  { name: "1 star", value: 1500 },
];

export default function AppChart() {
  return (
    <div className="w-full h-80 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#FF9800" barSize={25} radius={[0, 0, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
