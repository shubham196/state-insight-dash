import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Cog, Radio, Gauge } from 'lucide-react';
import { type StateData } from '@/data/stateData';

interface DataCardsProps {
  selectedState: StateData | null;
}

export const DataCards = ({ selectedState }: DataCardsProps) => {
  if (!selectedState) {
    return (
      <div className="space-y-4">
        <div className="text-center py-8 text-muted-foreground">
          <Building2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-sm">Click on a state to view detailed metrics</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* DISCOM Integrated Card */}
      <Card className="border-card-border shadow-sm hover:shadow-md transition-all duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 text-metric-primary" />
              </div>
              <span className="text-foreground">DISCOM INTEGRATED</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold text-metric-primary">
              {selectedState.discomIntegrated} / {selectedState.discomTotal}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FMS Integrated Card */}
      <Card className="border-card-border shadow-sm hover:shadow-md transition-all duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Cog className="w-4 h-4 text-metric-warning" />
              </div>
              <span className="text-foreground">FMS INTEGRATED</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold text-metric-warning">
              {selectedState.fmsIntegrated} / {selectedState.fmsTotal}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communication Tech Integrated Card */}
      <Card className="border-card-border shadow-sm hover:shadow-md transition-all duration-200">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Radio className="w-4 h-4 text-metric-success" />
            </div>
            <span className="text-foreground">COMMUNICATION TECH INTEGRATED</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Gauge className="w-4 h-4 text-metric-info mr-1" />
              </div>
              <div className="text-lg font-bold text-metric-info">
                {selectedState.communicationPercentage}%
              </div>
              <div className="text-xs text-muted-foreground">Communication %</div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-metric-primary">
                {selectedState.amrCount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">AMR</div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-metric-success">
                {selectedState.rtDasScadaCount}
              </div>
              <div className="text-xs text-muted-foreground">RT-DAS/SCADA</div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-metric-warning">
                {selectedState.smartMeterCount}
              </div>
              <div className="text-xs text-muted-foreground">Smart Meter</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};