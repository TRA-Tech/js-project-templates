import EnvironmentConstants from '../constants/EnvironmentConstants';

const EnvironmentUtilities = {
  getEnvironment: () => {
    if (window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1')) {
      return EnvironmentConstants.Type.Debug;
    }
    if (window.location.host.includes('test')) {
      return EnvironmentConstants.Type.Test;
    }
    return EnvironmentConstants.Type.Release;
  },
  isDebug: () => EnvironmentUtilities.getEnvironment() === EnvironmentConstants.Type.Debug,
  isTest: () => EnvironmentUtilities.getEnvironment() === EnvironmentConstants.Type.Test,
  isRelease: () => EnvironmentUtilities.getEnvironment() === EnvironmentConstants.Type.Release,
};

export default EnvironmentUtilities;
