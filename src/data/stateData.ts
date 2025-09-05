export interface StateData {
  name: string;
  code: string;
  integrationPercentage: number;
  discomIntegrated: number;
  discomTotal: number;
  fmsIntegrated: number;
  fmsTotal: number;
  communicationPercentage: number;
  amrCount: number;
  rtDasScadaCount: number;
  smartMeterCount: number;
}

export const stateDataMap: Record<string, StateData> = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    code: 'AP',
    integrationPercentage: 21,
    discomIntegrated: 3,
    discomTotal: 3,
    fmsIntegrated: 2,
    fmsTotal: 2,
    communicationPercentage: 0.1,
    amrCount: 2757,
    rtDasScadaCount: 1,
    smartMeterCount: 65
  },
  'arunachal-pradesh': {
    name: 'Arunachal Pradesh',
    code: 'AR',
    integrationPercentage: 85,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 15.2,
    amrCount: 1250,
    rtDasScadaCount: 2,
    smartMeterCount: 95
  },
  'assam': {
    name: 'Assam',
    code: 'AS',
    integrationPercentage: 67,
    discomIntegrated: 2,
    discomTotal: 3,
    fmsIntegrated: 3,
    fmsTotal: 4,
    communicationPercentage: 8.5,
    amrCount: 3420,
    rtDasScadaCount: 3,
    smartMeterCount: 187
  },
  'bihar': {
    name: 'Bihar',
    code: 'BR',
    integrationPercentage: 45,
    discomIntegrated: 4,
    discomTotal: 5,
    fmsIntegrated: 2,
    fmsTotal: 3,
    communicationPercentage: 3.2,
    amrCount: 5680,
    rtDasScadaCount: 2,
    smartMeterCount: 234
  },
  'chhattisgarh': {
    name: 'Chhattisgarh',
    code: 'CG',
    integrationPercentage: 78,
    discomIntegrated: 3,
    discomTotal: 3,
    fmsIntegrated: 4,
    fmsTotal: 4,
    communicationPercentage: 12.7,
    amrCount: 2890,
    rtDasScadaCount: 4,
    smartMeterCount: 156
  },
  'goa': {
    name: 'Goa',
    code: 'GA',
    integrationPercentage: 95,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 22.4,
    amrCount: 850,
    rtDasScadaCount: 1,
    smartMeterCount: 78
  },
  'gujarat': {
    name: 'Gujarat',
    code: 'GJ',
    integrationPercentage: 89,
    discomIntegrated: 6,
    discomTotal: 6,
    fmsIntegrated: 5,
    fmsTotal: 5,
    communicationPercentage: 18.9,
    amrCount: 8750,
    rtDasScadaCount: 7,
    smartMeterCount: 425
  },
  'haryana': {
    name: 'Haryana',
    code: 'HR',
    integrationPercentage: 72,
    discomIntegrated: 2,
    discomTotal: 2,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 14.6,
    amrCount: 4230,
    rtDasScadaCount: 3,
    smartMeterCount: 289
  },
  'himachal-pradesh': {
    name: 'Himachal Pradesh',
    code: 'HP',
    integrationPercentage: 88,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 2,
    fmsTotal: 2,
    communicationPercentage: 19.3,
    amrCount: 1680,
    rtDasScadaCount: 2,
    smartMeterCount: 123
  },
  'jharkhand': {
    name: 'Jharkhand',
    code: 'JH',
    integrationPercentage: 56,
    discomIntegrated: 3,
    discomTotal: 4,
    fmsIntegrated: 2,
    fmsTotal: 3,
    communicationPercentage: 7.8,
    amrCount: 3450,
    rtDasScadaCount: 2,
    smartMeterCount: 198
  },
  'karnataka': {
    name: 'Karnataka',
    code: 'KA',
    integrationPercentage: 81,
    discomIntegrated: 5,
    discomTotal: 5,
    fmsIntegrated: 4,
    fmsTotal: 4,
    communicationPercentage: 16.2,
    amrCount: 7890,
    rtDasScadaCount: 5,
    smartMeterCount: 378
  },
  'kerala': {
    name: 'Kerala',
    code: 'KL',
    integrationPercentage: 75,
    discomIntegrated: 2,
    discomTotal: 2,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 13.5,
    amrCount: 4560,
    rtDasScadaCount: 3,
    smartMeterCount: 267
  },
  'madhya-pradesh': {
    name: 'Madhya Pradesh',
    code: 'MP',
    integrationPercentage: 63,
    discomIntegrated: 7,
    discomTotal: 9,
    fmsIntegrated: 5,
    fmsTotal: 6,
    communicationPercentage: 9.4,
    amrCount: 6750,
    rtDasScadaCount: 4,
    smartMeterCount: 312
  },
  'maharashtra': {
    name: 'Maharashtra',
    code: 'MH',
    integrationPercentage: 92,
    discomIntegrated: 8,
    discomTotal: 8,
    fmsIntegrated: 7,
    fmsTotal: 7,
    communicationPercentage: 21.7,
    amrCount: 12450,
    rtDasScadaCount: 9,
    smartMeterCount: 623
  },
  'manipur': {
    name: 'Manipur',
    code: 'MN',
    integrationPercentage: 68,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 11.2,
    amrCount: 950,
    rtDasScadaCount: 1,
    smartMeterCount: 45
  },
  'meghalaya': {
    name: 'Meghalaya',
    code: 'ML',
    integrationPercentage: 54,
    discomIntegrated: 1,
    discomTotal: 2,
    fmsIntegrated: 1,
    fmsTotal: 2,
    communicationPercentage: 6.8,
    amrCount: 780,
    rtDasScadaCount: 1,
    smartMeterCount: 32
  },
  'mizoram': {
    name: 'Mizoram',
    code: 'MZ',
    integrationPercentage: 79,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 15.6,
    amrCount: 650,
    rtDasScadaCount: 1,
    smartMeterCount: 28
  },
  'nagaland': {
    name: 'Nagaland',
    code: 'NL',
    integrationPercentage: 48,
    discomIntegrated: 1,
    discomTotal: 2,
    fmsIntegrated: 1,
    fmsTotal: 2,
    communicationPercentage: 5.3,
    amrCount: 580,
    rtDasScadaCount: 1,
    smartMeterCount: 25
  },
  'odisha': {
    name: 'Odisha',
    code: 'OR',
    integrationPercentage: 71,
    discomIntegrated: 4,
    discomTotal: 4,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 12.9,
    amrCount: 5230,
    rtDasScadaCount: 3,
    smartMeterCount: 245
  },
  'punjab': {
    name: 'Punjab',
    code: 'PB',
    integrationPercentage: 86,
    discomIntegrated: 3,
    discomTotal: 3,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 17.8,
    amrCount: 3890,
    rtDasScadaCount: 3,
    smartMeterCount: 201
  },
  'rajasthan': {
    name: 'Rajasthan',
    code: 'RJ',
    integrationPercentage: 59,
    discomIntegrated: 5,
    discomTotal: 7,
    fmsIntegrated: 4,
    fmsTotal: 5,
    communicationPercentage: 8.7,
    amrCount: 6890,
    rtDasScadaCount: 4,
    smartMeterCount: 334
  },
  'sikkim': {
    name: 'Sikkim',
    code: 'SK',
    integrationPercentage: 91,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 20.5,
    amrCount: 420,
    rtDasScadaCount: 1,
    smartMeterCount: 18
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    code: 'TN',
    integrationPercentage: 83,
    discomIntegrated: 4,
    discomTotal: 4,
    fmsIntegrated: 4,
    fmsTotal: 4,
    communicationPercentage: 16.9,
    amrCount: 9230,
    rtDasScadaCount: 6,
    smartMeterCount: 445
  },
  'telangana': {
    name: 'Telangana',
    code: 'TS',
    integrationPercentage: 77,
    discomIntegrated: 3,
    discomTotal: 3,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 14.3,
    amrCount: 4670,
    rtDasScadaCount: 3,
    smartMeterCount: 223
  },
  'tripura': {
    name: 'Tripura',
    code: 'TR',
    integrationPercentage: 65,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 10.4,
    amrCount: 890,
    rtDasScadaCount: 1,
    smartMeterCount: 41
  },
  'uttar-pradesh': {
    name: 'Uttar Pradesh',
    code: 'UP',
    integrationPercentage: 42,
    discomIntegrated: 8,
    discomTotal: 12,
    fmsIntegrated: 6,
    fmsTotal: 8,
    communicationPercentage: 4.1,
    amrCount: 15670,
    rtDasScadaCount: 6,
    smartMeterCount: 567
  },
  'uttarakhand': {
    name: 'Uttarakhand',
    code: 'UK',
    integrationPercentage: 73,
    discomIntegrated: 2,
    discomTotal: 2,
    fmsIntegrated: 2,
    fmsTotal: 2,
    communicationPercentage: 13.1,
    amrCount: 2340,
    rtDasScadaCount: 2,
    smartMeterCount: 134
  },
  'west-bengal': {
    name: 'West Bengal',
    code: 'WB',
    integrationPercentage: 58,
    discomIntegrated: 4,
    discomTotal: 5,
    fmsIntegrated: 3,
    fmsTotal: 4,
    communicationPercentage: 7.9,
    amrCount: 6780,
    rtDasScadaCount: 3,
    smartMeterCount: 298
  },
  'andaman-and-nicobar-islands': {
    name: 'Andaman and Nicobar Islands',
    code: 'AN',
    integrationPercentage: 82,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 16.7,
    amrCount: 320,
    rtDasScadaCount: 1,
    smartMeterCount: 15
  },
  'chandigarh': {
    name: 'Chandigarh',
    code: 'CH',
    integrationPercentage: 96,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 24.2,
    amrCount: 580,
    rtDasScadaCount: 1,
    smartMeterCount: 32
  },
  'dadra-and-nagar-haveli-and-daman-and-diu': {
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    code: 'DN',
    integrationPercentage: 87,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 18.4,
    amrCount: 450,
    rtDasScadaCount: 1,
    smartMeterCount: 23
  },
  'delhi': {
    name: 'Delhi',
    code: 'DL',
    integrationPercentage: 94,
    discomIntegrated: 3,
    discomTotal: 3,
    fmsIntegrated: 3,
    fmsTotal: 3,
    communicationPercentage: 23.1,
    amrCount: 6780,
    rtDasScadaCount: 4,
    smartMeterCount: 398
  },
  'jammu-and-kashmir': {
    name: 'Jammu and Kashmir',
    code: 'JK',
    integrationPercentage: 51,
    discomIntegrated: 2,
    discomTotal: 3,
    fmsIntegrated: 2,
    fmsTotal: 3,
    communicationPercentage: 6.2,
    amrCount: 2890,
    rtDasScadaCount: 2,
    smartMeterCount: 145
  },
  'ladakh': {
    name: 'Ladakh',
    code: 'LA',
    integrationPercentage: 74,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 13.8,
    amrCount: 180,
    rtDasScadaCount: 1,
    smartMeterCount: 8
  },
  'lakshadweep': {
    name: 'Lakshadweep',
    code: 'LD',
    integrationPercentage: 89,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 19.6,
    amrCount: 95,
    rtDasScadaCount: 1,
    smartMeterCount: 4
  },
  'puducherry': {
    name: 'Puducherry',
    code: 'PY',
    integrationPercentage: 84,
    discomIntegrated: 1,
    discomTotal: 1,
    fmsIntegrated: 1,
    fmsTotal: 1,
    communicationPercentage: 17.2,
    amrCount: 680,
    rtDasScadaCount: 1,
    smartMeterCount: 35
  }
};

export const nationalData = {
  totalIntegrated: 50663,
  totalFeeders: 254238,
  integrationPercentage: 75.2,
  totalStates: 36,
  integratedStates: 28
};

export const getIntegrationColor = (percentage: number): string => {
  if (percentage >= 100) return 'hsl(var(--integration-100))';
  if (percentage >= 81) return 'hsl(var(--integration-81-99))';
  if (percentage >= 61) return 'hsl(var(--integration-61-80))';
  if (percentage >= 41) return 'hsl(var(--integration-41-60))';
  if (percentage >= 21) return 'hsl(var(--integration-21-40))';
  if (percentage > 0) return 'hsl(var(--integration-low))';
  return 'hsl(var(--integration-none))';
};