export interface employeeType {
  employeeId: number;
  totalHours: number;
  weeks: string;
  week: [
    {
      date: string;
      tasks: string;
      hours: number;
    }
  ];
}
