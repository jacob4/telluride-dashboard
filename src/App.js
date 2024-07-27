import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Camera, Car, Fuel, Cog, DollarSign } from 'lucide-react';

const TellurideDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const specs = {
    "Engine": "3.8L V6 GDI",
    "Horsepower": "291 hp @ 6,000 rpm",
    "Torque": "262 lb-ft @ 5,200 rpm",
    "Transmission": "8-speed automatic",
    "Drivetrain": "FWD (AWD available)",
    "Fuel economy": "20 city / 26 highway / 23 combined mpg",
    "Seating": "Up to 8 passengers",
    "Cargo space": "21 cu. ft. (behind 3rd row) / 87 cu. ft. (maximum)",
    "Towing": "Up to 5,500 lbs",
    "Ground clearance": "8.0 inches (8.4 inches for X-Line/X-Pro)",
  };

  const trims = [
    { name: 'LX', price: 35990, features: ['18-inch alloy wheels', 'LED headlights', '8-inch touchscreen'] },
    { name: 'S', price: 38390, features: ['20-inch alloy wheels', 'Sunroof', 'Heated front seats'] },
    { name: 'EX', price: 43290, features: ['Leather seats', 'Wireless phone charger', 'Highway Driving Assist'] },
    { name: 'SX', price: 45590, features: ['20-inch black alloy wheels', '10.25-inch touchscreen', 'Harman Kardon audio'] },
    { name: 'X-Pro', price: 51990, features: ['All-terrain tires', 'Increased towing capacity', '110V power inverter'] },
  ];

  const cargoData = [
    { configuration: 'Behind 3rd row', space: 21 },
    { configuration: 'Behind 2nd row', space: 46 },
    { configuration: 'Maximum capacity', space: 87 },
  ];

  const radarData = [
    { feature: 'Performance', value: 85 },
    { feature: 'Comfort', value: 90 },
    { feature: 'Technology', value: 88 },
    { feature: 'Safety', value: 95 },
    { feature: 'Cargo space', value: 87 },
    { feature: 'Value', value: 92 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Kia Telluride Dashboard</h2>
      
      <div className="mb-6">
        {['Overview', 'Trims', 'Cargo Space', 'Ratings'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())} 
            className={`mr-4 px-4 py-2 ${
              activeTab === tab.toLowerCase() 
                ? 'text-[#00A6E2] font-semibold border-b-2 border-[#00A6E2]' 
                : 'text-black hover:text-[#00A6E2]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 mb-4">
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <Cog className="mr-2 text-[#00A6E2]" />
                  <span className="font-semibold">{key}: </span>
                  <span className="ml-1">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Safety Features</h3>
            <ul className="list-disc list-inside">
              <li>Forward Collision-Avoidance Assist</li>
              <li>Blind-Spot Collision-Avoidance Assist</li>
              <li>Rear Cross-Traffic Collision-Avoidance Assist</li>
              <li>Lane Keeping Assist</li>
              <li>Safe Exit Assist</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Technology Features</h3>
            <ul className="list-disc list-inside">
              <li>10.25-inch touchscreen infotainment system</li>
              <li>Apple CarPlay and Android Auto integration</li>
              <li>Harman Kardon premium audio system</li>
              <li>Wireless phone charging</li>
              <li>Head-Up Display (HUD)</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'trims' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Trim Levels and Pricing</h3>
          {trims.map((trim) => (
            <div key={trim.name} className="mb-4 p-4 border rounded">
              <h4 className="text-lg font-semibold">{trim.name} - ${trim.price.toLocaleString()}</h4>
              <ul className="list-disc list-inside mt-2">
                {trim.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'cargo space' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Cargo Space</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cargoData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="configuration" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="space" fill="#00A6E2" name="Cubic Feet" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === 'ratings' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Telluride Ratings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="feature" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Telluride" dataKey="value" stroke="#00A6E2" fill="#00A6E2" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TellurideDashboard;