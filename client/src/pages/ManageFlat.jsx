import React from 'react'
import { Button } from '../component/ui'
import { UserPlus } from 'lucide-react'
function ManageFlat() {
  return (
 
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manage Flats</h1>
          <p className="text-slate-500 text-sm">View and manage all societys flats</p>
        </div>
        <Button 
          leftIcon={<UserPlus size={18} />} 
        //   onClick={() => setIsDialogOpen(true)}
        >
          Add New Flat
        </Button>
    </div>
  )
}

export default ManageFlat
