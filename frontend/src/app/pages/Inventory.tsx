import { useState } from "react";
import { Package, TrendingUp, TrendingDown, Search, Download } from "lucide-react";

const inventoryData = [
  { id: 1, product: "Wireless Mouse", category: "Electronics", inStock: 145, reserved: 12, available: 133, lastUpdated: "2 hours ago" },
  { id: 2, product: "USB Cable", category: "Accessories", inStock: 8, reserved: 3, available: 5, lastUpdated: "5 hours ago" },
  { id: 3, product: "Laptop Stand", category: "Furniture", inStock: 67, reserved: 8, available: 59, lastUpdated: "1 day ago" },
  { id: 4, product: "Keyboard", category: "Electronics", inStock: 92, reserved: 15, available: 77, lastUpdated: "3 hours ago" },
  { id: 5, product: "Monitor 24\"", category: "Electronics", inStock: 34, reserved: 6, available: 28, lastUpdated: "4 hours ago" },
  { id: 6, product: "Office Chair", category: "Furniture", inStock: 5, reserved: 2, available: 3, lastUpdated: "6 hours ago" },
  { id: 7, product: "Desk Lamp", category: "Furniture", inStock: 0, reserved: 0, available: 0, lastUpdated: "2 days ago" },
  { id: 8, product: "Headphones", category: "Electronics", inStock: 88, reserved: 10, available: 78, lastUpdated: "1 hour ago" },
];

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventoryData.filter((item) =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalStock = inventoryData.reduce((sum, item) => sum + item.inStock, 0);
  const totalReserved = inventoryData.reduce((sum, item) => sum + item.reserved, 0);
  const totalAvailable = inventoryData.reduce((sum, item) => sum + item.available, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Inventory Stock</h1>
          <p className="text-gray-600">Monitor and manage your stock levels</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download size={20} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total In Stock</p>
              <p className="text-3xl font-bold">{totalStock}</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp size={16} />
                +12% this month
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Reserved Stock</p>
              <p className="text-3xl font-bold">{totalReserved}</p>
              <p className="text-sm text-orange-600 mt-2 flex items-center gap-1">
                <TrendingUp size={16} />
                Pending orders
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Package className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Available Stock</p>
              <p className="text-3xl font-bold">{totalAvailable}</p>
              <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                <TrendingDown size={16} />
                Ready to sell
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Package className="text-green-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Product</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">In Stock</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Reserved</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Available</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Last Updated</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{item.product}</td>
                  <td className="py-4 px-6 text-gray-600">{item.category}</td>
                  <td className="py-4 px-6">
                    <span className="font-medium">{item.inStock}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-orange-600 font-medium">{item.reserved}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${item.available < 10 ? "text-red-600" : "text-green-600"}`}>
                      {item.available}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-sm">{item.lastUpdated}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.available === 0 ? "bg-red-100 text-red-700" :
                      item.available < 10 ? "bg-orange-100 text-orange-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {item.available === 0 ? "Out of Stock" :
                       item.available < 10 ? "Low Stock" : "In Stock"}
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
