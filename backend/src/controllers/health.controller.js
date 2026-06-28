export const healthCheck = (req, res) => {
    res.status(200).json({
      success: true,
      message: "InvestiQ AI Backend Running Successfully 🚀",
      version: "1.0.0",
    });
  };