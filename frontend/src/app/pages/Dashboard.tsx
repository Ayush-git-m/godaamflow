import { Package, Warehouse, AlertTriangle, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import KPICard from "../components/KPICard";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { date: "Mon", sales: 4200 },
  { date: "Tue", sales: 3800 },
  { date: "Wed", sales: 5100 },
  { date: "Thu", sales: 4600 },
  { date: "Fri", sales: 6200 },
  { date: "Sat", sales: 7100 },
  { date: "Sun", sales: 5800 },
];

const inventoryData = [
  { month: "Jan", usage: 320 },
  { month: "Feb", usage: 280 },
  { month: "Mar", usage: 410 },
  { month: "Apr", usage: 380 },
  { month: "May", usage: 490 },
  { month: "Jun", usage: 520 },
];

const recentActivities = [
  { id: 1, product: "Wireless Mouse", action: "Stock Added", quantity: "+50", time: "2 mins ago", type: "add" },
  { id: 2, product: "USB Cable", action: "Stock Sold", quantity: "-25", time: "15 mins ago", type: "sale" },
  { id: 3, product: "Laptop Stand", action: "Stock Added", quantity: "+30", time: "1 hour ago", type: "add" },
  { id: 4, product: "Keyboard", action: "Stock Updated", quantity: "100", time: "2 hours ago", type: "update" },
  { id: 5, product: "Monitor", action: "Stock Sold", quantity: "-5", time: "3 hours ago", type: "sale" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Products"
          value="1,254"
          icon={Package}
          trend="+12% from last month"
          trendUp={true}
          bgColor="bg-blue-500"
        />
        <KPICard
          title="Total Stock"
          value="8,432"
          icon={Warehouse}
          trend="+8% from last month"
          trendUp={true}
          bgColor="bg-green-500"
        />
        <KPICard
          title="Low Stock Items"
          value="23"
          icon={AlertTriangle}
          trend="-5% from last month"
          trendUp={false}
          bgColor="bg-orange-500"
        />
        <KPICard
          title="Today's Sales"
          value="$5,842"
          icon={DollarSign}
          trend="+18% from yesterday"
          trendUp={true}
          bgColor="bg-purple-500"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg">Sales Trend</h3>
              <p className="text-sm text-gray-500">Last 7 days</p>
            </div>
            <TrendingUp className="text-green-500" size={20} />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: "#3b82f6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Inventory Usage Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg">Inventory Usage</h3>
              <p className="text-sm text-gray-500">Last 6 months</p>
            </div>
            <TrendingDown className="text-blue-500" size={20} />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="usage" 
                stroke="#8b5cf6" 
                fill="#c4b5fd" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities Table */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Recent Inventory Activities</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Product</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Action</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Quantity</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Time</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">{activity.product}</td>
                  <td className="py-4 px-4 text-gray-600">{activity.action}</td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${
                      activity.type === "add" ? "text-green-600" :
                      activity.type === "sale" ? "text-red-600" :
                      "text-blue-600"
                    }`}>
                      {activity.quantity}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-sm">{activity.time}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.type === "add" ? "bg-green-100 text-green-700" :
                      activity.type === "sale" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {activity.type === "add" ? "Added" : activity.type === "sale" ? "Sold" : "Updated"}
                    </span>
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
