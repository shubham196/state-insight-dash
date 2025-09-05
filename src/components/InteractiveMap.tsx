import { useState } from 'react';
import { IndiaMap } from 'react-india-states-map';
import { stateDataMap, getIntegrationColor, type StateData } from '@/data/stateData';

interface InteractiveMapProps {
  onStateSelect: (stateData: StateData | null) => void;
  selectedState: string | null;
}

export const InteractiveMap = ({ onStateSelect, selectedState }: InteractiveMapProps) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateCode: string, data: any) => {
    const stateKey = stateCode.toLowerCase().replace(/\s+/g, '-');
    if (stateDataMap[stateKey]) {
      onStateSelect(stateDataMap[stateKey]);
    }
  };

  const handleStateHover = (stateCode: string, data: any) => {
    const stateKey = stateCode.toLowerCase().replace(/\s+/g, '-');
    setHoveredState(stateKey);
  };

  const handleStateMouseLeave = () => {
    setHoveredState(null);
  };

  // Create state config for the map
  const stateConfig = Object.keys(stateDataMap).reduce((config, stateKey) => {
    const stateData = stateDataMap[stateKey];
    const integrationColor = getIntegrationColor(stateData.integrationPercentage);
    const isSelected = selectedState === stateKey;
    const isHovered = hoveredState === stateKey;
    
    config[stateData.name] = {
      fillColor: integrationColor,
      strokeColor: isSelected ? 'hsl(var(--primary))' : isHovered ? 'hsl(var(--ring))' : '#e5e7eb',
      strokeWidth: isSelected ? 3 : isHovered ? 2 : 1,
      hoverColor: 'hsl(var(--map-hover))',
      selectedColor: 'hsl(var(--map-selected))'
    };
    
    return config;
  }, {} as any);

  const defaultSelectedState = selectedState ? stateDataMap[selectedState]?.name : null;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          2823 <span className="text-sm font-normal text-muted-foreground">Feeders Integrated</span>
        </h2>
        <div className="text-sm text-primary bg-blue-50 px-2 py-1 rounded-md inline-block">
          Andhra Pradesh 21 %
        </div>
      </div>
      
      <div className="flex-1 relative bg-gray-50 rounded-lg border border-border overflow-hidden">
        <div className="w-full h-full p-4">
          <IndiaMap
            mapData={stateConfig}
            onClick={handleStateClick}
            onHover={handleStateHover}
            onMouseLeave={handleStateMouseLeave}
            selectedState={defaultSelectedState}
            defaultFillColor="hsl(var(--muted))"
            defaultStrokeColor="hsl(var(--border))"
            defaultStrokeWidth={1}
            hoverStrokeWidth={2}
            selectedStrokeWidth={3}
            hoverStrokeColor="hsl(var(--ring))"
            selectedStrokeColor="hsl(var(--primary))"
            size={600}
          />
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-border">
          <h3 className="text-xs font-semibold text-foreground mb-2">Integration Percentage</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(100) }}></div>
              <span>100% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(85) }}></div>
              <span>81% - 99% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(70) }}></div>
              <span>61% - 80% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(50) }}></div>
              <span>41% - 60% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(30) }}></div>
              <span>21% - 40% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(10) }}></div>
              <span>&lt;20% Integrated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ backgroundColor: getIntegrationColor(0) }}></div>
              <span>Non-Integrated State</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};