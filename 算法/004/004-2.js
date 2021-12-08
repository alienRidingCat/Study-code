/**
 * @todo 面试题 03.04. 化栈为队
 * @description 实现一个MyQueue类，该类用两个栈来实现一个队列
 * Initialize your data structure here.
 */
 var MyQueue = function() {
  this.state = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.state.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if(this.state.length){
     return this.state.splice(0,1)
  }
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if(this.state.length){
     return this.state[0]
  }
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.state.length===0
};