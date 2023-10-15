import {axiosClient} from '../utils/axiosClient';

export const getTours = async(params) => {
  const res = await axiosClient.get("tours", {
    params: params
  });
  return res;
}

export const getDetailTour = async(params) => {
  const res = await axiosClient.get(`tours/${params}`);
  return res;
}
