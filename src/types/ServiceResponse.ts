type StatusCodeErrorType = 400 | 401;
type StatusCodeSuccessType = 200;

type ServiceResponseError = {
  message: string,
  statusCode: StatusCodeErrorType
};

type ServiceResponseSuccess<T> = {
  message: T,
  statusCode: StatusCodeSuccessType
};

type Token = {
  token: string
};

export type ServiceResponse = ServiceResponseError | ServiceResponseSuccess<Token>;