import { CommonActions, DrawerActions } from '@react-navigation/native';

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigate(routeName, params) {
    navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params: params,
      }),
    );
}

function goBack() {
    navigator.dispatch(CommonActions.goBack());
}

function openDrawer() {
    navigator.dispatch(DrawerActions.openDrawer());
}

export default {
    setTopLevelNavigator,
    goBack, 
    navigate,
    openDrawer
}