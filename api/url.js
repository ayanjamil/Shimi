import { SEARCH_API_BASEURL } from "@env";

export const getSearchApiBaseUrl = () => {
  return SEARCH_API_BASEURL;
};

export const getSearchApiUploadUrl = () => {
  return `${SEARCH_API_BASEURL}api/search_image`;
};
export const getExploreApiUrl = () => {
  return `${SEARCH_API_BASEURL}api/feed?spreadsheet_id=1CVQBFl5uDZMIS2VfWhjDW9iS8dQw4hpHC2F7Cuucu6g`;
};
