import { useState } from 'react';
import { stateDataMap, getIntegrationColor, type StateData } from '@/data/stateData';

interface InteractiveMapProps {
  onStateSelect: (stateData: StateData | null) => void;
  selectedState: string | null;
}

export const InteractiveMap = ({ onStateSelect, selectedState }: InteractiveMapProps) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateKey: string) => {
    if (stateDataMap[stateKey]) {
      onStateSelect(stateDataMap[stateKey]);
    }
  };

  const getStateStyle = (stateKey: string, integrationPercentage: number) => {
    const baseColor = getIntegrationColor(integrationPercentage);
    const isSelected = selectedState === stateKey;
    const isHovered = hoveredState === stateKey;
    
    return {
      fill: baseColor,
      stroke: isSelected ? 'hsl(var(--primary))' : isHovered ? 'hsl(var(--ring))' : '#e5e7eb',
      strokeWidth: isSelected ? 3 : isHovered ? 2 : 1,
      cursor: 'pointer',
      opacity: isHovered || isSelected ? 0.9 : 0.8,
      transition: 'all 0.2s ease-in-out'
    };
  };

  // Simplified India map with major states
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
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simplified state shapes for demonstration */}
          
          {/* Rajasthan */}
          <path
            d="M 120 180 L 220 170 L 230 220 L 200 260 L 140 250 Z"
            style={getStateStyle('rajasthan', stateDataMap['rajasthan']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('rajasthan')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('rajasthan')}
          />
          
          {/* Gujarat */}
          <path
            d="M 80 220 L 160 230 L 150 300 L 90 290 Z"
            style={getStateStyle('gujarat', stateDataMap['gujarat']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('gujarat')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('gujarat')}
          />
          
          {/* Maharashtra */}
          <path
            d="M 160 260 L 280 250 L 290 320 L 180 330 Z"
            style={getStateStyle('maharashtra', stateDataMap['maharashtra']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('maharashtra')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('maharashtra')}
          />
          
          {/* Karnataka */}
          <path
            d="M 200 330 L 290 325 L 285 400 L 195 405 Z"
            style={getStateStyle('karnataka', stateDataMap['karnataka']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('karnataka')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('karnataka')}
          />
          
          {/* Tamil Nadu */}
          <path
            d="M 240 400 L 320 395 L 310 470 L 230 475 Z"
            style={getStateStyle('tamil-nadu', stateDataMap['tamil-nadu']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('tamil-nadu')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('tamil-nadu')}
          />
          
          {/* Andhra Pradesh */}
          <path
            d="M 290 320 L 380 315 L 375 390 L 285 395 Z"
            style={getStateStyle('andhra-pradesh', stateDataMap['andhra-pradesh']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('andhra-pradesh')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('andhra-pradesh')}
          />
          
          {/* Telangana */}
          <path
            d="M 320 280 L 380 275 L 375 315 L 315 320 Z"
            style={getStateStyle('telangana', stateDataMap['telangana']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('telangana')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('telangana')}
          />
          
          {/* Madhya Pradesh */}
          <path
            d="M 220 170 L 360 160 L 350 240 L 230 250 Z"
            style={getStateStyle('madhya-pradesh', stateDataMap['madhya-pradesh']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('madhya-pradesh')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('madhya-pradesh')}
          />
          
          {/* Uttar Pradesh */}
          <path
            d="M 280 100 L 480 90 L 470 170 L 360 160 L 270 150 Z"
            style={getStateStyle('uttar-pradesh', stateDataMap['uttar-pradesh']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('uttar-pradesh')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('uttar-pradesh')}
          />
          
          {/* Bihar */}
          <path
            d="M 470 120 L 550 115 L 545 160 L 465 165 Z"
            style={getStateStyle('bihar', stateDataMap['bihar']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('bihar')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('bihar')}
          />
          
          {/* West Bengal */}
          <path
            d="M 545 160 L 600 155 L 595 220 L 540 225 Z"
            style={getStateStyle('west-bengal', stateDataMap['west-bengal']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('west-bengal')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('west-bengal')}
          />
          
          {/* Odisha */}
          <path
            d="M 470 200 L 540 195 L 535 260 L 465 265 Z"
            style={getStateStyle('odisha', stateDataMap['odisha']?.integrationPercentage || 0)}
            onMouseEnter={() => setHoveredState('odisha')}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick('odisha')}
          />
        </svg>
        
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