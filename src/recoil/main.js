import { atom } from "recoil";
import { sessionStorageEffect, localStorageEffect } from "./util";

export const favBusStopList = atom({
  key: "favBusStopList",
  default: [],
});

export const favBusList = atom({
  key: "favBusList",
  default: [],
});

export const filteredBusStop = atom({
  key: "filteredBusStop",
  default: [],
  effects: [sessionStorageEffect("filtered_busStop")],
});

export const userPid = atom({
  key: "userPid",
  default: 801,
  effects: [sessionStorageEffect("user_pid")],
});

export const selectedCity = atom({
  key: "selectedCity",
  default: 39,
  effects: [localStorageEffect("selected_city")],
});

export const clickedBusStop = atom({
  key: "clickedBusStop",
  default: [],
  effects: [sessionStorageEffect("clicked_busStop")],
});
