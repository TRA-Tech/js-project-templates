const LocalStorageUtilities = {
  user: () => (JSON.parse(localStorage.getItem('user'))),
  userToken: () => (JSON.parse(localStorage.getItem('user'))?.token),
};

export default LocalStorageUtilities;
