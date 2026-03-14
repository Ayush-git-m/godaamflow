import { Download, Calendar, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlySalesData = [
  { month: "Jan", sales: 4200, revenue: 12600 },
  { month: "Feb", sales: 3800, revenue: 11400 },
  { month: "Mar", sales: 5100, revenue: 15300 },
  { month: "Apr", sales: 4600, revenue: 13800 },
  { month: "May", sales: 6200, revenue: 18600 },
  { month: "Jun", sales: 7100, revenue: 21300 },
];

const categoryData = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Furniture", value: 25, color: "#8b5cf6" },
  { name: "Accessories", value: 20, color: "#10b981" },
  { name: "Stationery", value: 10, color: "#f59e0b" },
];

const inventoryUsageData = [
  { week: "Week 1", used: 320, added: 400 },
  { week: "Week 2", used: 280, added: 350 },
  { week: "Week 3", used: 410, added: 450 },
  { week: "Week 4", used: 380, added: 420 },
];

const topProducts = [
  { name: "Wireless Mouse", sold: 245, revenue: "$7,335" },
  { name: "Keyboard", sold: 198, revenue: "$15,840" },
  { name: "Monitor 24\"", sold: 156, revenue: "$38,988" },
  { name: "USB Cable", sold: 432, revenue: "$4,316" },
  { name: "Headphones", sold: 187, revenue: "$18,681" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Reports & Analytics</h1>
          <p className="text-gray-600">View detailed insights and analytics</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar size={20} />
            <span>Last 6 Months</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={20} />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
          <p className="text-2xl font-bold mb-1">$93,000</p>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp size={14} />
            +24% vs last period
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Total Sales</p>
          <p className="text-2xl font-bold mb-1">31,000</p>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp size={14} />
            +18% vs last period
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Avg. Order Value</p>
          <p className="text-2xl font-bold mb-1">$156</p>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp size={14} />
            +8% vs last period
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 text-sm mb-2">Products Sold</p>
          <p className="text-2xl font-bold mb-1">1,218</p>
          <p className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp size={14} />
            +15% vs last period
          </p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Sales Bar Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Monthly Sales & Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3b82f6" name="Sales (units)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue ($)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-semibold text-lg mb-4">Product Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Inventory Usage Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Inventory Usage vs. Stock Added</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={inventoryUsageData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="week" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="used" 
              stroke="#ef4444" 
              strokeWidth={3}
              name="Stock Used"
              dot={{ fill: "#ef4444", r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="added" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Stock Added"
              dot={{ fill: "#10b981", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products Table */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rank</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Units Sold</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Revenue</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                      {index + 1}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium">{product.name}</td>
                  <td className="py-4 px-4">
                    <span className="font-semibold">{product.sold}</span> units
                  </td>
                  <td className="py-4 px-4 font-semibold text-green-600">{product.revenue}</td>
                  <td className="py-4 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(product.sold / 450) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
