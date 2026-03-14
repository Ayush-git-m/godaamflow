import { AlertTriangle, Package, ShoppingCart, Bell } from "lucide-react";

const lowStockItems = [
  {
    id: 1,
    product: "USB Cable",
    category: "Accessories",
    currentStock: 8,
    minStock: 20,
    reorderQty: 50,
    supplier: "TechSupply Co.",
    lastOrdered: "2 weeks ago",
    priority: "high",
  },
  {
    id: 2,
    product: "Office Chair",
    category: "Furniture",
    currentStock: 5,
    minStock: 15,
    reorderQty: 30,
    supplier: "Office Depot",
    lastOrdered: "1 week ago",
    priority: "high",
  },
  {
    id: 3,
    product: "Desk Lamp",
    category: "Furniture",
    currentStock: 0,
    minStock: 10,
    reorderQty: 25,
    supplier: "Lighting Plus",
    lastOrdered: "3 weeks ago",
    priority: "critical",
  },
  {
    id: 4,
    product: "Notebook A5",
    category: "Stationery",
    currentStock: 12,
    minStock: 30,
    reorderQty: 100,
    supplier: "Paper Goods Inc.",
    lastOrdered: "1 month ago",
    priority: "medium",
  },
  {
    id: 5,
    product: "Stapler",
    category: "Office Supplies",
    currentStock: 7,
    minStock: 20,
    reorderQty: 40,
    supplier: "Office Depot",
    lastOrdered: "2 weeks ago",
    priority: "medium",
  },
];

export default function LowStockAlerts() {
  const criticalCount = lowStockItems.filter((item) => item.priority === "critical").length;
  const highCount = lowStockItems.filter((item) => item.priority === "high").length;
  const mediumCount = lowStockItems.filter((item) => item.priority === "medium").length;

  const getPriorityColor = (priority: string) => {
    if (priority === "critical") return "bg-red-100 text-red-700 border-red-200";
    if (priority === "high") return "bg-orange-100 text-orange-700 border-orange-200";
    return "bg-yellow-100 text-yellow-700 border-yellow-200";
  };

  const getPriorityBadge = (priority: string) => {
    if (priority === "critical") return "bg-red-500";
    if (priority === "high") return "bg-orange-500";
    return "bg-yellow-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Low Stock Alerts</h1>
          <p className="text-gray-600">Products that need to be restocked</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Bell size={20} />
          <span>Configure Alerts</span>
        </button>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-700 text-sm mb-1 font-medium">Critical</p>
              <p className="text-3xl font-bold text-red-900">{criticalCount}</p>
              <p className="text-sm text-red-700 mt-2">Out of stock</p>
            </div>
            <div className="bg-red-500 p-3 rounded-lg">
              <AlertTriangle className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-orange-700 text-sm mb-1 font-medium">High Priority</p>
              <p className="text-3xl font-bold text-orange-900">{highCount}</p>
              <p className="text-sm text-orange-700 mt-2">Very low stock</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <Package className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-yellow-700 text-sm mb-1 font-medium">Medium Priority</p>
              <p className="text-3xl font-bold text-yellow-900">{mediumCount}</p>
              <p className="text-sm text-yellow-700 mt-2">Below minimum</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-lg">
              <Package className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Low Stock Items */}
      <div className="space-y-4">
        {lowStockItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl p-6 border-2 ${getPriorityColor(item.priority)}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className={`${getPriorityBadge(item.priority)} p-3 rounded-lg`}>
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.product}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                item.priority === "critical" ? "bg-red-500 text-white" :
                item.priority === "high" ? "bg-orange-500 text-white" :
                "bg-yellow-500 text-white"
              }`}>
                {item.priority}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Current Stock</p>
                <p className="text-lg font-bold text-red-600">{item.currentStock}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Minimum Stock</p>
                <p className="text-lg font-semibold">{item.minStock}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Suggested Reorder</p>
                <p className="text-lg font-semibold text-green-600">{item.reorderQty}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Supplier</p>
                <p className="text-sm font-medium">{item.supplier}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Last Ordered</p>
                <p className="text-sm text-gray-600">{item.lastOrdered}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                <ShoppingCart size={16} />
                <span>Reorder Now</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                Contact Supplier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Restock Notification Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500 p-3 rounded-lg">
            <Bell className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">Automatic Restock Suggestions</h3>
            <p className="text-gray-700 mb-4">
              Based on your sales history and current stock levels, we recommend restocking {lowStockItems.length} products.
              Total estimated cost: ${lowStockItems.reduce((sum, item) => sum + (item.reorderQty * 15), 0).toLocaleString()}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Generate Purchase Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
