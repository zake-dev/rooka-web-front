import { axiosService } from "@/api/config.mjs";

export const getTrainingCenterNames = () => axiosService.get("/army/training-centers");