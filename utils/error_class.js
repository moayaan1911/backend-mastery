/** @format */

class APIError extends Error {
  constructor(
    statusCode,
    message = 'Something Went Wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.data = null;
    this.message = message;
    this.success = false;
    this.stack = stack;
  }
}

export { APIError };
