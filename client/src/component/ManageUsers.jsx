import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, clearUserError, clearUserMessage } from '../redux/slice/userSlice';
import { 
  Table, Thead, Tbody, Tr, Th, Td, 
  Button, Badge, Dialog, Input 
} from './ui';
import { UserPlus, Search, MoreVertical, Edit2, Trash2 } from 'lucide-react';

function ManageUsers() {
  const dispatch = useDispatch();
  const { users, loading, error, message } = useSelector((state) => state.user);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(users)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Users</h1>
          <p className="text-slate-500 text-sm">View and manage all society members and staff.</p>
        </div>
        <Button 
          leftIcon={<UserPlus size={18} />} 
          onClick={() => setIsDialogOpen(true)}
        >
          Add New User
        </Button>
      </div>

      {/* Filters & Actions */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <Table>
            <Thead>
              <Tr hover={false}>
                <Th>User</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th>Created At</Th>
                <Th className="text-right">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Tr key={user._id}>
                    <Td>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold text-sm">
                          {user.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <Badge variant="slate" className="capitalize">
                        {user.role.role}  
                      </Badge>
                    </Td>
                    <Td>
                      <Badge variant={user.isActive !== false ? 'success' : 'danger'}>
                        {user.isActive !== false ? 'Active' : 'Inactive'}
                      </Badge>
                    </Td>
                    <Td className="text-slate-500 text-xs">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </Td>
                    <Td className="text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-slate-400 hover:text-primary-600 transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr hover={false}>
                  <Td colSpan={5} className="text-center py-12 text-slate-500">
                    No users found matching your search.
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        )}
      </div>

      {/* Add User Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Add New User"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsDialogOpen(false)}>Create User</Button>
          </>
        }
      >
        <div className="space-y-4 py-2">
          <Input 
            label="Full Name" 
            placeholder="John Doe" 
            id="fullName"
          />
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="john@example.com" 
            id="email"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700 ml-0.5">Role</label>
              <select className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all">
                <option value="resident">Resident</option>
                <option value="admin">Admin</option>
                <option value="security_guard">Security Guard</option>
              </select>
            </div>
            <Input 
              label="Phone Number" 
              placeholder="+1 234 567 890" 
              id="phone"
            />
          </div>
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            id="password"
          />
        </div>
      </Dialog>
    </div>
  );
}

export default ManageUsers;
