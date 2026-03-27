export type Page = 'home' | 'predict' | 'results' | 'about';

export interface EmployeeData {
  age: number;
  monthlyIncome: number;
  department: string;
  jobRole: string;
  yearsAtCompany: number;
  totalWorkingYears: number;
  jobLevel: number;
  distanceFromHome: number;
  stockOptionLevel: number;
  overtime: boolean;
  jobSatisfaction: number;
  workLifeBalance: number;
  jobInvolvement: number;
  performanceRating: number;
}

export interface PredictionResult {
  employeeId: string;
  department: string;
  confidence: number;
  status: 'Likely to Leave' | 'Likely to Stay';
  insights: {
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}
