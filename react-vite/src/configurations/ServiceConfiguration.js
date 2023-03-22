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
      post: () => ({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LocalStorageUtilities.userToken()}`,
          'Access-Control-Allow-Origin': '*',
        },
      }),
    },
    unauthorized: {
      get: () => ({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }),
      post: () => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }),
    },
  },
};

export default ServiceConfiguration;
