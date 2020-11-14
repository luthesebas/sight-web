export interface PathParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'date';
  value?: any;
}
