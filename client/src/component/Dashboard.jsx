import React from 'react';
import { useSelector } from 'react-redux';
import LayoutWrapper from './LayoutWrapper';
import { 
  LayoutDashboard, Users, Home, 
  ShieldAlert, Megaphone, CreditCard, 
  ClipboardList, UserCheck, ShieldCheck,
  Activity, TrendingUp, Package, Car
} from 'lucide-react';

const Dashboard = () => {
  const { role, name } = useSelector((state) => state.auth);

  // 1. Render function for Admin
  const renderAdminDashboard = () => {
    const navItems = [
      { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { label: 'Manage Users', path: '/dashboard/users', icon: Users },
      { label: 'Society Flats', path: '/dashboard/flats', icon: Home },
      { label: 'Guard Management', path: '/dashboard/staff', icon: UserCheck },
      { label: 'Complaints', path: '/dashboard/complaints', icon: ShieldAlert },
      { label: 'Announcements', path: '/dashboard/notices', icon: Megaphone },
    ];

    return {
      navItems,
      content: (
        <div className="space-y-8 animate-in fade-in duration-700">
          <header>
            <h1 className="text-2xl font-bold text-slate-900">Administrator Console</h1>
            <p className="text-slate-500 text-sm mt-1">Manage society operations and user access control.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Total Residents" value="1,240" icon={Users} color="bg-blue-500" trend="+12% from last month" />
            <StatsCard title="Occupancy Rate" value="94%" icon={Home} color="bg-emerald-500" trend="Stable" />
            <StatsCard title="Active Guards" value="18" icon={ShieldCheck} color="bg-indigo-500" trend="Full Strength" />
            <StatsCard title="Pending Issues" value="24" icon={ShieldAlert} color="bg-orange-500" trend="-5 since yesterday" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 ds-panel p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Society Overview</h3>
                  <Activity className="text-slate-400" size={20} />
                </div>
                <div className="h-64 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center">
                   <p className="text-slate-400 text-sm">Society Activity Graph Placeholder</p>
                </div>
             </div>
             <div className="ds-panel p-6">
                <h3 className="text-lg font-bold mb-6">Recent Alerts</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">New complaint registered in Block B</p>
                        <p className="text-[11px] text-slate-500">10 minutes ago</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      )
    };
  };

  // 2. Render function for Resident
  const renderResidentDashboard = () => {
    const navItems = [
      { label: 'My Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { label: 'My Flat', path: '/dashboard/my-flat', icon: Home },
      { label: 'Payments', path: '/dashboard/payments', icon: CreditCard },
      { label: 'My Complaints', path: '/dashboard/my-complaints', icon: ShieldAlert },
      { label: 'Announcements', path: '/dashboard/notices', icon: Megaphone },
    ];

    return {
      navItems,
      content: (
        <div className="space-y-8 animate-in fade-in duration-700">
          <header>
            <h1 className="text-2xl font-bold text-slate-900">Resident Portal</h1>
            <p className="text-slate-500 text-sm mt-1">Access your home services and society updates.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Maintenance Due" value="₹ 4,500" icon={CreditCard} color="bg-red-500" trend="Due in 5 days" />
            <StatsCard title="Upcoming Events" value="3" icon={Megaphone} color="bg-primary-600" trend="This week" />
            <StatsCard title="My Visitors Today" value="2" icon={Users} color="bg-indigo-500" trend="Pre-approved" />
          </div>

          <div className="ds-panel p-8 bg-gradient-to-br from-[#005c2b] to-[#047857] text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Need assistance?</h2>
                <p className="text-white/80 max-w-md">Raise a service request or report an issue directly to the management team.</p>
              </div>
              <button className="px-8 py-3 bg-white text-[#005c2b] font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-colors">
                New Complaint
              </button>
            </div>
          </div>
        </div>
      )
    };
  };

  // 3. Render function for Staff (Security Guard)
  const renderStaffDashboard = () => {
    const navItems = [
      { label: 'Guard Station', path: '/dashboard', icon: ShieldCheck },
      { label: 'Visitor Logs', path: '/dashboard/visitors', icon: Users },
      { label: 'Deliveries', path: '/dashboard/deliveries', icon: Package },
      { label: 'Parking Map', path: '/dashboard/parking', icon: Car },
      { label: 'Panic Alerts', path: '/dashboard/emergency', icon: ShieldAlert },
    ];

    return {
      navItems,
      content: (
        <div className="space-y-8 animate-in fade-in duration-700">
          <header>
            <h1 className="text-2xl font-bold text-slate-900">Security Command Center</h1>
            <p className="text-slate-500 text-sm mt-1">Real-time society monitoring and visitor tracking.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Current Visitors" value="12" icon={Users} color="bg-blue-600" trend="Active on premises" />
            <StatsCard title="Expected Guests" value="8" icon={UserCheck} color="bg-emerald-600" trend="Pre-authorized" />
            <StatsCard title="Deliveries Waiting" value="5" icon={Package} color="bg-orange-500" trend="At gate" />
            <StatsCard title="Parking Status" value="85%" icon={Car} color="bg-slate-700" trend="Near capacity" />
          </div>

          <div className="ds-panel overflow-hidden">
             <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-lg">Live Entry Queue</h3>
                <span className="badge px-3 py-1 bg-green-100 text-green-700">System Online</span>
             </div>
             <div className="divide-y divide-slate-100">
                {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                            <UserCheck size={20} />
                         </div>
                         <div>
                            <p className="text-sm font-bold text-slate-800">Visitor #{1024 + i}</p>
                            <p className="text-xs text-slate-500">Flat 30{i}, Block C</p>
                         </div>
                      </div>
                      <div className="flex gap-2">
                         <button className="px-3 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg">Check In</button>
                         <button className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-lg">Details</button>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      )
    };
  };

  // Logic to select the correct render function based on role
  const getDashboardData = () => {
    switch (role?.toLowerCase()) {
      case 'admin':
        return renderAdminDashboard();
      case 'resident':
        return renderResidentDashboard();
      case 'security_guard':
      case 'staff':
        return renderStaffDashboard();
      default:
        // Default / Guest view if role is unrecognized
        return {
          navItems: [{ label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard }],
          content: <div className="p-12 text-center text-slate-500">Unauthorized Access or No Role Assigned.</div>
        };
    }
  };

  const { navItems, content } = getDashboardData();

  return (
    <LayoutWrapper navItems={navItems}>
      {content}
    </LayoutWrapper>
  );
};

// Helper Component for Stats Cards
const StatsCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="ds-panel p-6 flex flex-col justify-between group hover:border-primary-500/30 transition-all cursor-pointer">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} text-white shadow-lg shadow-inherit/20`}>
        <Icon size={22} />
      </div>
      <div className="text-right">
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      </div>
    </div>
    <div className="pt-4 border-t border-slate-50">
      <div className="flex items-center gap-1.5">
        <TrendingUp size={14} className="text-emerald-500" />
        <span className="text-[11px] font-medium text-slate-600">{trend}</span>
      </div>
    </div>
  </div>
);

export default Dashboard;

