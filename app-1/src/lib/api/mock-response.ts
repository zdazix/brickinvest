import { AxiosHeaders, type AxiosResponse } from "axios";

export const createMockResponse = <TData>(
  data: TData,
): AxiosResponse<TData> => ({
  config: { headers: new AxiosHeaders() },
  data,
  headers: {},
  status: 200,
  statusText: "OK",
});
