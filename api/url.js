import { SEARCH_API_BASEURL } from "@env";

export const getSearchApiBaseUrl = () => {
  return SEARCH_API_BASEURL;
};

export const getSearchApiUploadUrl = () => {
  return `${SEARCH_API_BASEURL}api/search_image`;
};
