import { axiosService } from "@/api";

export const getKey = (form) => {
  const { militaryType, ...soldier } = form;
  return axiosService.get(`/${militaryType}/soldiers`, {
    params: soldier
  });
};