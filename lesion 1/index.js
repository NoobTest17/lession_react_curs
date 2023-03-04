// import {helpersModule, indexModule} from './test/index.js'
// import {user, sayHelloUser as helpersFn} from './helpers.js';

const sayHello = async () => {
  console.log('Hello world');
  // helpersFn()
  // console.log(user);
  // indexModule.sayHelloUser3();
  const {sayHelloUser3} = await import('./test/helpers/index.js');
  sayHelloUser3()
}

sayHello()