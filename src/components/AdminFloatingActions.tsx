import React from 'react';
import { Bell, CreditCard } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const AdminFloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[100]">
      {/* Transaction Icon */}
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="w-14 h-14 rounded-full bg-black/90 hover:bg-black border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-95 text-white"
          >
            <CreditCard className="w-6 h-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-80 bg-black/95 border-white/10 text-white rounded-2xl backdrop-blur-xl">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Recent Transactions</h3>
            <p className="text-sm text-white/50">No recent transactions to display.</p>
          </div>
        </PopoverContent>
      </Popover>

      {/* Notification Icon */}
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="w-14 h-14 rounded-full bg-black/90 hover:bg-black border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-95 text-white relative"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-pulse" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-80 bg-black/95 border-white/10 text-white rounded-2xl backdrop-blur-xl">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Notifications</h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm font-medium">System Alert</p>
                <p className="text-xs text-white/50">Server is running smoothly.</p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AdminFloatingActions;
