import React from 'react';

const USERS = [
  { id: 1, name: '张三', role: '系统管理员', dept: '技术部', status: '活跃' },
  { id: 2, name: '李四', role: '高级顾问', dept: '咨询部', status: '活跃' },
  { id: 3, name: '王五', role: '普通用户', dept: '市场部', status: '离线' },
  { id: 4, name: '赵六', role: '财务审计', dept: '财务部', status: '活跃' },
];

export const UserManagement: React.FC = () => {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">用户管理</h2>
          <p className="text-sm text-gray-500">管理系统访问权限与用户信息</p>
        </div>
        <button className="px-6 py-2.5 morandi-orange-bg text-white rounded-xl shadow-lg shadow-orange-900/10 hover:opacity-90 transition-all font-medium">
          + 新增用户
        </button>
      </div>

      <div className="bg-white rounded-3xl border morandi-border overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b morandi-border">
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">姓名</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">角色</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">部门</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">状态</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y morandi-border">
            {USERS.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full morandi-orange-soft-bg flex items-center justify-center text-white text-xs font-bold">
                      {user.name[0]}
                    </div>
                    <span className="font-semibold text-gray-700">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.dept}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    user.status === '活跃' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:morandi-orange transition-colors text-sm font-medium">编辑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
