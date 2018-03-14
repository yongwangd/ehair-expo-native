import { NavigationActions } from 'react-navigation';

let navigator;

const setNavigator = nav => (navigator = nav);

const navigate = (routeName, params) => {
  const action = NavigationActions.navigate({
    type: NavigationActions.NAVIGATE,
    routeName,
    params
  });

  navigator.dispatch(action);
};

export default {
  navigate,
  setNavigator
};
