export const successResponse = (

  res,

  data = null,

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

  error

) => {

  return res.status(

      error.statusCode || 500

  ).json({

      success: false,

      error: {

          code:

              error.code ||

              "INTERNAL_SERVER_ERROR",

          message:

              error.message ||

              "Something went wrong.",

      },

  });

};