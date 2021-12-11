class ErrorResponse extends Error {
  constructor(message, satusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
module.exports = ErrorResponse;
