const FetchUtilities = {
  Request: (url, requestOptions) => (fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        localStorage.removeItem('user');
        if (requestOptions.direct) {
          window.location.href = '/login';
        }
        return false;
      }
      throw new Error();
    })
    .then(json => json)
    .catch(ex => {
      // eslint-disable-next-line no-console
      console.error(ex);
      return false;
    })
  ),

};

export default FetchUtilities;
