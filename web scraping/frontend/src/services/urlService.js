import api from "./api";

export default {
  getInfoChi(cred) {
    return api.post("getInfoChi", cred);
  },
  getInfoGaj(cred) {
    return api.post("getInfoGaj", cred);
  }
};
