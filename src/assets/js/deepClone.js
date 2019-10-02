/**
 * Created by caofanghui on 17/6/10.
 */

/*
  深度复制obj对象方法
  示例：
  var obj = {
    a: 1,
    b: 2
  }
  var obj_new = deepClone(obj)
  obj_new.c = 3

  console.log(obj) // 输出：{a: 1, b: 2}
  console.log(obj_new) // 输出： {a: 1, b: 2, c: 3}

  数组同理***(同上)

 */

//深度克隆
function deepClone(obj){
  var result,oClass=isClass(obj);

  //确定result的类型
  if(oClass==="Object"){
    result={};
  }else if(oClass==="Array"){
    result=[];
  }else{
    return obj;
  }
  for(var key in obj){
    var copy=obj[key];
    if(isClass(copy)=="Object"){
      result[key]=deepClone(copy);//递归调用
    }else if(isClass(copy)=="Array"){
      result[key]=deepClone(copy);
    }else{
      result[key]=obj[key];
    }
  }
  return result;
}
//返回传递给他的任意对象的类
function isClass(o){
  if(o===null) return "Null";
  if(o===undefined) return "Undefined";

  return Object.prototype.toString.call(o).slice(8,-1);
}

export {
  deepClone
}