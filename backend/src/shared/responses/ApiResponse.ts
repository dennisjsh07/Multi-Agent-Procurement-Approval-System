type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: unknown;
};

export const apiResponse = <T>({
  success,
  message,
  data,
  errors,
}: ApiResponse<T>) => ({
  success,
  message,
  data,
  errors,
});
