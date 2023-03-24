import LocalStorageUtilities from '../utilities/LocalStorageUtilities';

const ServiceConfiguration = {
  RequestOptions: {
    authorized: {
      get: () => ({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LocalStorageUtilities.userToken()}`,
          'Access-Control-Allow-Origin': '*',
        },
      }),
      post: data => ({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LocalStorageUtilities.userToken()}`,
          body: JSON.stringify(data),
          'Access-Control-Allow-Origin': '*',
        },
      }),
    },
    unauthorized: {
      get: () => ({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }),
      post: data => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
    },
  },
};

export default ServiceConfiguration;
