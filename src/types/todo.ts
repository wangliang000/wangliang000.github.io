export interface TodoType {
  id: number;
  title: string;
  process: number;
  status: `${TodoStatus}`;
}

export const enum TodoStatus {
  PNEDING = 'pending',
  ONGOING = 'Ongoing',
  SUCCESS = 'success',
}