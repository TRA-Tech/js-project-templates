import PropTypes from 'prop-types';
import EnvironmentUtilities from '../utilities/EnvironmentUtilities';

const ApiConfiguration = {
  service1: {
    debug: 'https://localhost:1',
    test: 'https://service1.test.com',
    release: 'https://service1.com',
  },
  service1Wss: {
    debug: 'wss://localhost:1',
    test: 'wss://service1.test.com',
    release: 'wss://service1.com',
  },
  service2: {
    debug: 'https://localhost:2',
    test: 'https://service2.test.com',
    release: 'https://service2.com',
  },
  service2Wss: {
    debug: 'wss://localhost:2',
    test: 'wss://service2.test.com',
    release: 'wss://service2.com',
  },
  getBaseUrl: service => {
    const environment = EnvironmentUtilities.getEnvironment();
    return service[environment];
  },
};

ApiConfiguration.getBaseUrl.propTypes = {
  service: PropTypes.shape({
    debug: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
  }).isRequired,
};

export default ApiConfiguration;
