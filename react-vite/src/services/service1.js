/* Exapmle service */
import Configurations from '../configurations';
import ServiceConfiguration from '../configurations/ServiceConfiguration';
import FetchUtilities from '../utilities/FetchUtilities';

const baseService1Url = Configurations.Api.getBaseUrl('service1');

const service1 = { controllerName: {
  actionName: () => {
    const requestOptions = {
      ...ServiceConfiguration.RequestOptions.unauthorized.get(),
    };
    return FetchUtilities.Request(`${baseService1Url}/controllerName/actionName`, requestOptions);
  },
  actionName2: data => {
    const requestOptions = {
      ...ServiceConfiguration.RequestOptions.authorized.post(),
      body: JSON.stringify(data),
    };
    return FetchUtilities.Request(`${baseService1Url}/controllerName/actionName2`, requestOptions);
  },
} };

export default service1;
