/* Exapmle service */
import Configurations from '../../configurations';
import ApiConfiguration from '../../configurations/ApiConfiguration';
import ServiceConfiguration from '../../configurations/ServiceConfiguration';
import FetchUtilities from '../../utilities/FetchUtilities';

const baseService2Url = Configurations.Api.getBaseUrl(ApiConfiguration.service2);

const Controller2 = {
  Action1: () => {
    const requestOptions = ServiceConfiguration.RequestOptions.authorized.get();
    return FetchUtilities.Request(`${baseService2Url}/controllerName/actionName`, requestOptions);
  },
  Action2: data => {
    const requestOptions = ServiceConfiguration.RequestOptions.unauthorized.post(data);
    return FetchUtilities.Request(`${baseService2Url}/controllerName/actionName2`, requestOptions);
  },
};

export default Controller2;
