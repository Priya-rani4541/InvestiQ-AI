export const successResponse = (
    res,
    data,
    message = "Success",
    statusCode = 200
  ) => {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
  export const errorResponse = (
    res,
    error,
    defaultStatus = 500
  ) => {
    return res.status(error.statusCode || defaultStatus).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  };