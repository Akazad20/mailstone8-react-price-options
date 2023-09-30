
import { LineChart, Line } from 'recharts';
const Linechat = () => {
    
      const  mathmarks =[
          { "id": 1, "name": "John", mathScore: 90},
          { "id": 2, "name": "Sarah", mathScore: 85},
          {
            "id": 3,
            "name": "Michael",
            mathScore: 78
          },
          {
            "id": 4,
            "name": "Emily",
            mathScore: 92
          },
          {
            "id": 5,
            "name": "Daniel",
            mathScore: 87
          },
          {
            "id": 6,
            "name": "Sophia",
            mathScore: 79
          },
          {
            "id": 7,
            "name": "William",
            mathScore: 88
          },
          {
            "id": 8,
            "name": "Olivia",
            mathScore: 91
          },
          {
            "id": 9,
            "name": "Alexander",
            mathScore: 83
          },
          {
            "id": 10,
            "name": "Ava",
            mathScore: 86
          }
        ]
      
      
    return (
        <div>
        <LineChart width={400} height={400} data={mathmarks}>

            <Line dataKey="mathScore" ></Line>
        </LineChart>
        </div>
    );
};

export default Linechat;