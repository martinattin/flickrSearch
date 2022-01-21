import {invokeNetworkRequest} from '../../api/index';
import {apiEndpoints, FLICKR_KEY, FLICKR_BASE_URL} from '../../api/endpoints';
import qs from 'query-string';

const {photoSearch} = apiEndpoints;
export const searchImages = ({searchText, setImageResults, setIsLoading}) => {
  try {
    //Not considering pagination now
    const data = {
      method: photoSearch,
      api_key: FLICKR_KEY,
      text: searchText,
      sort: 'interestingness-desc',
      per_page: 12,
      format: 'json',
      nojsoncallback: 1,
    };
    const url = qs.stringifyUrl({
      url: FLICKR_BASE_URL,
      query: data,
    });
    invokeNetworkRequest(url, 'GET', ({photos, stat}) => {
      if (photos.total != 0) {
        setImageResults(photos.photo);
      }
    });
  } catch (e) {
  } finally {
    setIsLoading(false);
  }
};
