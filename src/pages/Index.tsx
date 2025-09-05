import { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { InteractiveMap } from '@/components/InteractiveMap';
import { DataCards } from '@/components/DataCards';
import { type StateData } from '@/data/stateData';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'feeders' | 'supply'>('feeders');
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [selectedStateKey, setSelectedStateKey] = useState<string | null>(null);

  const handleStateSelect = (stateData: StateData | null) => {
    setSelectedState(stateData);
    setSelectedStateKey(stateData ? stateData.code.toLowerCase() : null);
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Header */}
      <DashboardHeader 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
      
      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Side: Interactive Map (60%) */}
        <div className="w-[60%] p-6">
          <InteractiveMap 
            onStateSelect={handleStateSelect}
            selectedState={selectedStateKey}
          />
        </div>
        
        {/* Right Side: Data Cards (40%) */}
        <div className="w-[40%] p-6 bg-sidebar-bg border-l border-border">
          <DataCards selectedState={selectedState} />
        </div>
      </div>
    </div>
  );
};

export default Index;
