export const isFarmer = (req, res, next) => {
  if (req.user.role !== "farmer") {
    return res
      .status(403)
      .json({ message: "Only farmers can perform this action" });
  }
  next();
};

export const isDelivery = (req, res, next) => {
  if (req.user.role !== "delivery") {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
