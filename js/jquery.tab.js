//首先①自调用函数，防止变量污染
//② 为什么传入$符？因为$符作为形参，在接下来的函数环境中创建一个内部变量，在自己的函数内部直接
//调用变量，不用去函数外部寻找，减少了程序。提升性能
(function($){
  //此时我们需要传入相应的参数1.需要注册事件的dom元素2、需要注册的事件类型3.所对应的需要改变的盒子
  //4、需要改变本身样式的类名添加5、对应的改变的盒子的类名
  //参数过多，所以我们需要传入一个对象，常规用on
      $.tab = function(o){
      var defaults = {
          controlButton : '.tab-control li',
          event : 'click',
          controlClass : 'active',
          objectContent : '.tab-content div',
          objectClass : 'active'
      };
      for(var key in o){
        defaults[key] = o[key];
      }
      $(defaults.controlButton).on(defaults.event,function(){
        var index = $(this).index();
        $(this).addClass(defaults.controlClass).siblings().removeClass(defaults.controlClass);
        $(defaults.objectContent).eq(index).addClass(defaults.objectClass).siblings().removeClass(defaults.objectClass);
      })
    }
    
})(window.jQuery)