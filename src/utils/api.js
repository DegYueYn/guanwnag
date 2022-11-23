import request from "./request";
export const List = () =>
  request.post("/nft/api/user/userHome?usrId=1&usrHash=1");
