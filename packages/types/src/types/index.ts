export type BaseEntity = {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export * from './location.type';
export * from './client.type';
