/**
 * Created by ndmac on 16/8/31.
 */


import React, { PropTypes, Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { AppRegistry ,View, Text } from 'react-native';

export default class PurchaseCarNews extends Component {

    static propTypes= {
    };

    //将 store 写在这个函数里面保证当前view所在的VC pop 出栈后,销毁 store
    componentWillMount() {
        const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
        this.store = createStoreWithMiddleware(reducer);
    }

    render() {
        return (
            <View style={ {marginTop: 64} }><Text>nihao</Text></View>
        );
    }

}

AppRegistry.registerComponent('RNModuleName', ()=> PurchaseCarNews);