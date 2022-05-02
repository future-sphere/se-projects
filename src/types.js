import { ReactElement } from 'react';

export interface Project {
  thumbnail?: string;
  slug: string;
  title: string;
  description: string;
  estimated_hours: number;
  component?: ReactElement;
  subject: string;
}

export type ProjectTypeMap = {
  [key: string]: Project[],
};
