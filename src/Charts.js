import React  from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'TV', value: 15 },
  { name: 'Movie', value: 17  },
  { name: 'OVA', value: 6 },
  { name: 'Special', value: 10 },
  { name: 'OTHERS', value: 2 },
  
];

const Charts = () => {
    return ( 
        
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="red"
            label
          />
          <Tooltip />
        </PieChart>
      
     );
}
 
export default Charts;

