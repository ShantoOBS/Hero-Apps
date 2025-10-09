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

export default function AppChart({ ratings = [] }) {
  return (
    <div className="w-full h-80 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF9800" barSize={25} radius={[0, 0, 0, 0]}>
            {ratings?.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
