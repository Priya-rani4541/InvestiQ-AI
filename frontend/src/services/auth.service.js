import api from "./api";

/**
 * Register User
 */

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);

  return response.data;
};

/**
 * Login User
 */

export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);

  return response.data;
};

/**
 * Current Logged User
 */

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};