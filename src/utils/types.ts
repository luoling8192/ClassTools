export interface RET_JSON {
  router: string;
  success: number;
  data: {};
  err: string;
}

export function getRetJSON(data?: {}): RET_JSON {
  return {
    router: '',
    success: 0,
    data: {},
    err: 'Unknown',
    ...data,
  };
}
