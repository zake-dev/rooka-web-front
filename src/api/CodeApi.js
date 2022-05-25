import { axiosService } from '@/api'

export const getAirforceKisus = () => axiosService.get('/airforce/kisu')
