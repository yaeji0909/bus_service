import { objectToParam } from "@lib/utils/utils.js";
import axios from "axios";

const favoriteAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const addFavoriteList = async (
  userPid,
  cityCode,
  stationId,
  busIdList
) => {
  const param = {
    user: userPid,
    city: cityCode,
    station: stationId,
    seq: 13,
    bus: busIdList,
  };
  const { data } = await favoriteAxios.put(`favorite`, param);
  return data || [];
};

export const deleteFavoriteList = async (userPid, cityCode, stationId) => {
  const param = objectToParam({
    user: userPid,
    city: cityCode,
    station: stationId,
  });

  const { data } = await favoriteAxios.delete(`favorite${param}`);
  return data || [];
};

export const getFavoriteList = async (userPid, cityCode) => {
  const param = objectToParam({
    user: userPid,
    city: cityCode,
  });
  const { data } = await favoriteAxios.get(`favorite/list${param}`);
  return data || [];
};
