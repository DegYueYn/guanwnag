import request from "./request";
export const List = () =>
  request.post("/nft/api/user/userHome?usrId=1&usrHash=1");

  // / mystery / box / getPurchaseMysteryBoxDetail

  //详情
  export const getPurchaseMysteryBoxDetail = (data) =>
    request.post("/nft/api/mystery/box/getPurchaseMysteryBoxDetail?usrId=1&usrHash=1", data);
    
// 盲盒详情列表
  
   export const getShareDetail = (id) =>
    request.get(`/nft/api/arts/getShareDetail?id=${id}`+"&usrId=17&usrHash=1" );

    // 首发列表

   export const getSstarter = (data) =>
     request.post("/nft/api/theme/getThemeList?usrId=1&usrHash=1", data);
    
   //首发详情
   export const getDetailWeb = (data) =>
     request.post("/nft/api/theme/getDetailWeb?usrId=1&usrHash=1", data);

