import NetInfo from '@react-native-community/netinfo';
// Use this function for get api requests
export const invokeNetworkRequest = async (url, method, completion) => {
  NetInfo.fetch().then(async net_state => {
    if (net_state.isConnected) {
      try {
        let response = null;
        response = await fetch(url, {
          method: method,
          timeoutInterval: 10000,
        });

        if (response) {
          let jsonResponse = await response.json();
          completion && completion(jsonResponse);
          return jsonResponse;
        }
      } catch (err) {
        //display error message to user
      }
    } else {
      //handle no internet scenario
    }
  });
};
