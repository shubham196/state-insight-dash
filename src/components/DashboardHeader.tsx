import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { nationalData } from '@/data/stateData';

interface DashboardHeaderProps {
  activeTab: 'feeders' | 'supply';
  onTabChange: (tab: 'feeders' | 'supply') => void;
}

export const DashboardHeader = ({ activeTab, onTabChange }: DashboardHeaderProps) => {
  return (
    <header className="bg-dashboard-header-bg border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Tab Navigation */}
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          <Button
            variant={activeTab === 'feeders' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onTabChange('feeders')}
            className="text-sm font-medium"
          >
            Integrated Feeders
          </Button>
          <Button
            variant={activeTab === 'supply' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onTabChange('supply')}
            className="text-sm font-medium"
          >
            Hours of Supply
          </Button>
        </div>

        {/* Center: National Summary */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-muted-foreground font-medium">National Data</span>
          <div className="h-4 w-px bg-border" />
          <span className="font-semibold text-primary">
            Integrated {nationalData.totalIntegrated.toLocaleString()}
          </span>
          <div className="h-4 w-px bg-border" />
          <span className="text-muted-foreground">
            Total {nationalData.totalFeeders.toLocaleString()}
          </span>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
            ℹ
          </span>
        </div>

        {/* Right: Date Selector */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="font-medium">26/01/25</span>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs">Data</span>
        </div>
      </div>
    </header>
  );
};