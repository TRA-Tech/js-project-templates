/* Exapmle service */
import ApiConfiguration from '../../configurations/Api';
import ServiceConfiguration from '../../configurations/Service';
import FetchUtilities from '../../utilities/Fetch';

const baseService1Url = ApiConfiguration.getBaseUrl(ApiConfiguration.service1);

const Controller1 = {
  Action1: () => {
    const requestOptions = ServiceConfiguration.RequestOptions.unauthorized.get();
    return FetchUtilities.Request(`${baseService1Url}/controllerName/actionName`, requestOptions);
  },
  Action2: data => {
    const requestOptions = ServiceConfiguration.RequestOptions.authorized.post(data);
    return FetchUtilities.Request(`${baseService1Url}/controllerName/actionName2`, requestOptions);
  },
};

export default Controller1;
