import { RegisterRequest, RegisterResponse } from "@/types/auth";
import { api } from "./client";

export async function registerUser(
  data: RegisterRequest,
): Promise<RegisterResponse> {
  const respnose = await api.post<RegisterResponse>("/auth/register", data);

  return respnose.data;
}
