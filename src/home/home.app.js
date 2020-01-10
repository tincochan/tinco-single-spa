//home组件部分使用react写的，这里注册组件以及定义相关应用的生命周期

import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

function domElementGetter() {
    return document.getElementById("home")
}
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter,
})
export const bootstrap = [
    reactLifecycles.bootstrap,
];
export const mount = [
    reactLifecycles.mount,
];
export const unmount = [
    reactLifecycles.unmount,
];