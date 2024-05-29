export interface TaskEntity {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
}

export type TaskEntityWithoutID = Omit<TaskEntity, 'id'>;
