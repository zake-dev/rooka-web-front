import { axiosService } from '@/api'

export const getTrainingCenterNames = () => axiosService.get('/army/training-centers')

export const getAirforceKisus = () => axiosService.get('/airforce/kisu')