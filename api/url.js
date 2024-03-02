import { BASEURL } from "@env";

export const getSearchApiBaseUrl = () => {
  return BASEURL;
};

export const getSearchApiUploadUrl = () => {
  return `${BASEURL}api/search_image`;
};
export const getExploreApiUrl = () => {
  return `${BASEURL}api/feed?spreadsheet_id=1CVQBFl5uDZMIS2VfWhjDW9iS8dQw4hpHC2F7Cuucu6g`;
};
export const getWishlistApiUrl = (userToken) => {
  return `${BASEURL}api/wishlist?id=${userToken}`;
};
