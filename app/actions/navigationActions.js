export function navigateToMainScreen(params) {
    return {
        type: 'Navigation/NAVIGATE',
        routeName: 'MainScreen',
        params: params
    };
}
