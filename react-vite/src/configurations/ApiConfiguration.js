import EnvironmentUtilities from '../utilities/EnvironmentUtilities';

const ApiConfiguration = {
  debug: {
    service1: 'https://localhost:1',
    service1Wss: 'wss://localhost:1',
    service2: 'https://localhost:2',
    service2Wss: 'wss://localhost:2',
  },
  test: {
    service1: 'https://service1.test.com',
    service1Wss: 'wss://service1.test.com',
    service2: 'https://service2.test.com',
    service2Wss: 'wss://service2.test.com',
  },
  release: {
    service1: 'https://service1.com',
    service1Wss: 'wss://service1.com',
    service2: 'https://service2.com',
    service2Wss: 'wss://service2.com',
  },
  getBaseUrl: service => {
    const environment = EnvironmentUtilities.getEnvironment();
    return ApiConfiguration[environment][service];
  },
  getUrl: (service, endpoint) => ApiConfiguration.getBaseUrl(service).concat(endpoint),
};

export default ApiConfiguration;
