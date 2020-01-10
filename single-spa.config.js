import {
    registerApplication,
    start
} from 'single-spa'

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

registerApplication(
    // Name of our single-spa application
    'home',
    // loadingFunction,这里加载相应的组件（生命周期）
    () => import('./src/home/home.app.js'),

    'navBar',
    () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
    () => true,

    'angularJS', 
    () => import ('./src/angularJS/angularJS.app.js'), 
    pathPrefix('/angularJS'),

    // activityFunction
    (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home'),
);

start();