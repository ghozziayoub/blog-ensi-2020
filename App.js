import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import IndexScreen from "./src/screens/IndexScreen"
import ShowScreen from "./src/screens/ShowScreen"

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog"
    }
  }
)

export default createAppContainer(navigator)