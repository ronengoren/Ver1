import { createStackNavigator } from 'react-navigation';
// import * as screens from '/screens';
import { screenNames } from '../vars/enum';
// import { homeisColors } from '/vars';
// import commonTabRoutes from './commonTabRoutes';

const Home = createStackNavigator(
  {
    [screenNames.HomeTab]: {
      screen: screens.HomeTab,
      navigationOptions: {
        header: null
      }
    },
    // ...commonTabRoutes
  },
  {
    initialRouteName: screenNames.HomeTab,
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: "blue"
    }
  }
);

export default Home;