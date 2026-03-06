import React from 'react';

const DEPTS = [
  { id: 1, name: '技术部', head: '张三', count: 12, status: '活跃' },
  { id: 2, name: '咨询部', head: '李四', count: 8, status: '活跃' },
  { id: 3, name: '市场部', head: '王五', count: 5, status: '活跃' },
  { id: 4, name: '财务部', head: '赵六', count: 4, status: '活跃' },
];

export const DepartmentManagement: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">部门管理</h2>
          <p className="text-sm text-gray-500">管理组织架构与部门职责</p>
        </div>
        <button className="px-6 py-2.5 morandi-orange-bg text-white rounded-xl shadow-lg shadow-orange-900/10 hover:opacity-90 transition-all font-medium">
          + 新增部门
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEPTS.map((dept) => (
          <div key={dept.id} className="bg-white p-6 rounded-3xl border morandi-border shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 morandi-orange-soft-bg rounded-2xl flex items-center justify-center text-white text-xl shadow-md shadow-orange-900/10">
                  🏢
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{dept.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Department Unit</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-[10px] font-bold">
                {dept.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-gray-50/50 rounded-2xl">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">负责人</p>
                <p className="text-sm font-semibold text-gray-700">{dept.head}</p>
              </div>
              <div className="p-3 bg-gray-50/50 rounded-2xl">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">成员人数</p>
                <p className="text-sm font-semibold text-gray-700">{dept.count} 人</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-widest">查看详情</button>
              <button className="px-4 py-2 text-xs font-bold morandi-orange hover:opacity-80 transition-colors uppercase tracking-widest">编辑架构</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
