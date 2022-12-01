
```javascript
//reducer.js
// 2、写出state的初始内容和reducer
const initState = {
  money: 200,
  caonima: "caolima",
};

//3、reducer是参数为state和action的纯函数，返回的也是新state
const reducer2 = (state = initState, action) => {
  console.log(action, state, { ...state, caonima: "caonidaye" });
  switch (action.caonima) {
    case "caonidaye":
      return { ...state, caonima: "caonidaye" };
    default:
      return state;
  }
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, money: state.money + 1 };
    case "DECREMENT":
      return { ...state, money: state.money - 1 };
    case "ADD_NUMBER":
      return { ...state, money: state.money + action.num };
    case "SUB_NUMBER":
      return { ...state, money: state.money - action.num };
    default:
      return state;
  }
};

export { reducer, reducer2 };
```
### 3、集合reducer，创建store
```javascript
//store/index.js
import { createStore, combineReducers } from "redux";
import { reducer, reducer2 } from "./reducer";
//多个reducers时可以使用combineReducers
const reducers = combineReducers({
  reducer,
  reducer2,
});
//3、先将不同的集合合并，使用的是combineReducers
//4、再创建createStore
const store = createStore(reducers);
export default store;
```
### 4、使用store
```javascript
import React, { Component } from "react";
// 5、引入store
import store from "../store/index.js";
// 6、在组件中引入ation
import { exAction, subAction } from "../store/actions";
export class home extends Component {
  state = {
    money: 200,
    caonima: "cao",
  };
  kuiqian = (num) => {
    // 7、在事件中使用 store.dispatch触发action
    store.dispatch(subAction(num));
    // console.log("xuekui");
  };
  jiaqian = () => {
    store.dispatch(exAction);
  };
  componentDidMount() {
    store.subscribe(() => {
      // 8、在指定的函数位置获取state，然后使用setState修改
      this.setState({ money: store.getState().reducer.money });
      console.log(store.getState().reducer2.caonima);
      this.setState({ caonima: store.getState().reducer2.caonima });
    });
  }
  render() {
    return (
      <div>
        我是home{this.state.money}
        <hr />
        {this.state.caonima}
        <button onClick={() => this.jiaqian()}>加钱</button>
        <button onClick={() => this.kuiqian(200)}>亏钱</button>
      </div>
    );
  }
}

export default home;

```
##  二、redux-actions
reducer使用switch case语句进行action类型判断，当action很多时候，reducer内容就不那么直观了。redux-actions简化了reducer和action的联系

### 1、写action的方式改变
引入了createAction:const 返回action对象的函数 = createAction(action 的 type 值);
```javascript
//actions/common.js
import { createAction } from 'redux-actions'
// 1、下载与引入
import * as common from '@apis/common'
import { createAjaxAction } from '@configs/common'
// 2、注册action
export const requestLogin = createAction('request login')
export const recevieLogin = createAction('receive login')
export const login = createAjaxAction(common.login, requestLogin, recevieLogin)
export const setGformCache2 = createAction('set gform cache2')
export const clearGformCache2 = createAction('clear gform cache2')
```
```javascript
//actions/tabList.js
import { createAction } from 'redux-actions'
export const requestTabList = createAction('request tab list')
export const updateTabList = createAction('update tab list')
export const updateTabChecked = createAction('update tab checked')
export const deleteTabFromList = createAction('delete tab from list');

```
### 2、reducer
import { handleActions } from 'redux-actions'，引入了handleActions({
    [type值]: (state, action) => { return 要修改的新值 } 
}, 数据初始值)
```javascript
// reducers/common.js
import { handleActions } from 'redux-actions'

// 登陆返回结果
const loginState = () => ({ })
export const loginResponse = handleActions({
  'request login'(state, action) {
    return { ...state, loading: true }
  },
  'receive login'(state, action) {
    // eslint-disable-next-line no-unused-vars
    const { req, res } = action.payload
    return { data: res, loading: false }
  },
}, loginState())


// gForm2.0缓存
const cache2 = () => ({})
export const gFormCache2 = handleActions({
  'set gform cache2'(state, action) {
    const { cacheKey, cacheContent } = action.payload
    if (cacheKey === undefined) {
      throw new Error('cacheKey不能是undefined')
    }
    if (cacheContent === undefined) {
      throw new Error('cacheContent不能是undefined')
    }
    state[cacheKey] = { ...state[cacheKey], ...cacheContent }
    return { ...state }
  },
  'clear gform cache2'(state, action) {
    return cache2()
  },
}, cache2())


// gForm2.0头部搜索类别
const allRetrievalState = {
  list: [],
}
export const allRetrievalResult = handleActions({
  'request all retrieval'(state, action) {
    return { ...state, loading: true }
  },
  'receive all retrieval'(state, action) {
    // eslint-disable-next-line no-unused-vars
    const { req, res } = action.payload
    return { ...res.data, loading: false }
  },
}, allRetrievalState)

```
```javascript
// reducers/tabList.js
import { handleActions } from 'redux-actions'

const tabList = JSON.parse(sessionStorage.getItem('tabList'))

const initialState = {
  list: tabList ? tabList.list : [],
  activeKey: tabList ? tabList.activeKey : '',
}

const tabListResult = handleActions({
  'request tab list'(state, action) {
    return { ...state, loading: false }
  },
  'update tab list'(state, action) {
    const data = action.payload
    const findList = state.list.find(tab => tab.key === data.key)
    const list = findList === undefined ? [...state.list, data] : state.list
    sessionStorage.setItem('tabList', JSON.stringify({ list, activeKey: data.key, loading: false }))
    return { list, activeKey: data.key, loading: false }
  },
  'update tab checked'(state, action) {
    const { activeKey } = action.payload;
    sessionStorage.setItem('tabList', JSON.stringify({ ...state, activeKey, loading: false }))
    return { ...state, activeKey, loading: false }
  },
  'delete tab from list'(state, action) {
    const { targetKey } = action.payload
    const list = []
    let delIndex = 0
    let { activeKey } = state
    state.list.map((tab, index) => {
      tab.key === targetKey ? delIndex = index : list.push(tab)
    })
    if (state.activeKey === targetKey) {
      // eslint-disable-next-line no-nested-ternary
      activeKey = list[delIndex] ? list[delIndex].key :
        (list[delIndex - 1] ? list[delIndex - 1].key : '')
    }
    sessionStorage.setItem('tabList', JSON.stringify({ list, activeKey, loading: false }))
    return { list, activeKey, loading: false }
  },
}, initialState)

export { tabListResult as default }

```
```javascript
// reducers/index.js
import { combineReducers } from 'redux'

import * as tabList from './tabList'
import * as common from './common'

const rootReducer = combineReducers({
  config: (state = {}) => state,
  ...tabList,
  ...common,
})

export default rootReducer
```
### 3、store，中间件与使用
```javascript
// app\middleware\configureStore.js
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@reducers'
import { logger, router, reduxRouterMiddleware } from './index'

const nextReducer = require('@reducers')

export default function configure(initialState) {
  // console.log('initialState', initialState)
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    logger,
    // router,
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
```
store的全局配置
```javascript
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'//企业级的使用方法
import '@config'
import Routes from '@configs/router.config'
import configure from '@middleware/configureStore'//引入创建的store

const store = configure({ })

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)
```

组件里的使用



### 4、connect
# 将数据以props的形式注入子组件，返回一个对象

```javascript
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { decAction, addAction, getHomeAction } from '../store/action'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>home page</h1>
        <h2>余额：{this.props.money}</h2>
        <button onClick={e => this.props.subNumber(1)}>付钱</button>
        <button onClick={e => this.props.makeMoney(50)}>收钱</button>
        <h2>用户信息</h2>
        <ul>
          {
            this.props.userinfo.map(item => {
              return (
                <li key={item.key}>{item.name}--{item.age}--{item.job}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
//和名字一样，比较好理解
const mapStateToProps = (state, props) => {
  console.log(state, props)
  return {
    money: state.money,
    userinfo: state.userInfo,
    info: props.info
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    subNumber: (num) => {
      dispatch(decAction(num))
    },
    makeMoney: (num) => {
      dispatch(addAction(num))
    },
    getData: () => {
      dispatch(getHomeAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Home)
```