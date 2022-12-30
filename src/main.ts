import { ApiPromise, WsProvider } from '@polkadot/api';  
 
const provider = new WsProvider('wss://ws.polkadot.io');  
 
const main = async () => {  
  const api = await ApiPromise.create({ provider });  

  // 订阅event，参数为hex格式的模块名称和方法名称  
  await api.rpc.state.subscribeStorage([ "0xdf3f76a9", "EmitEvent" ], (data: any) => {  
    console.log(data); // 打印事件内容  
  });   

  // 等待订阅者收到事件信息，超时10分钟（600000ms）关闭连接     
  setTimeout(() => {       
    provider.disconnect();   
  }, 600000);   
};   

main();