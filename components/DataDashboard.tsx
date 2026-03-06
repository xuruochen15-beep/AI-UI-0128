import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const data = [
  { name: '1月', value: 400, revenue: 2400 },
  { name: '2月', value: 300, revenue: 1398 },
  { name: '3月', value: 200, revenue: 9800 },
  { name: '4月', value: 278, revenue: 3908 },
  { name: '5月', value: 189, revenue: 4800 },
  { name: '6月', value: 239, revenue: 3800 },
];

const pieData = [
  { name: '技术部', value: 400 },
  { name: '咨询部', value: 300 },
  { name: '市场部', value: 300 },
  { name: '财务部', value: 200 },
];

const COLORS = ['#c68b6b', '#e9ccbc', '#f1e9e4', '#d1bfa7'];

export const DataDashboard: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  return (
    <div className="p-6 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">管理层数据看板</h2>
            <p className="text-sm text-gray-500">实时监控核心业务指标与部门绩效</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border morandi-border rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 transition-all">
            导出报告
          </button>
          <button className="px-4 py-2 morandi-orange-bg text-white rounded-xl text-xs font-bold shadow-lg shadow-orange-900/10 hover:opacity-90 transition-all">
            刷新数据
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: '总营收', value: '¥2.4M', icon: <DollarSign className="w-5 h-5" />, trend: '+12.5%' },
          { label: '活跃用户', value: '1,284', icon: <Users className="w-5 h-5" />, trend: '+5.2%' },
          { label: '项目进度', value: '84.2%', icon: <Activity className="w-5 h-5" />, trend: '+2.1%' },
          { label: '增长率', value: '18.4%', icon: <TrendingUp className="w-5 h-5" />, trend: '+4.3%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border morandi-border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 morandi-orange-light rounded-2xl text-[#c68b6b]">
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trend */}
        <div className="bg-white p-8 rounded-3xl border morandi-border shadow-sm">
          <h3 className="text-sm font-bold text-gray-700 mb-8 flex items-center">
            <span className="w-2 h-2 rounded-full morandi-orange-bg mr-2"></span>
            营收趋势分析
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c68b6b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#c68b6b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#999'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#c68b6b" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dept Distribution */}
        <div className="bg-white p-8 rounded-3xl border morandi-border shadow-sm">
          <h3 className="text-sm font-bold text-gray-700 mb-8 flex items-center">
            <span className="w-2 h-2 rounded-full morandi-orange-bg mr-2"></span>
            部门资源分配
          </h3>
          <div className="h-64 flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 pr-8">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-[10px] text-gray-500 font-medium">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
