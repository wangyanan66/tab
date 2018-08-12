$('.container .tab-control li').click(function(){
  var flag = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  //                                 所对应的div
  $('#tab_content .tab-content-item').eq(flag).addClass('active').siblings().removeClass('active');
});









// var lis = document.querySelectorAll('.tab-control li');
// var divs = document.querySelectorAll('.tab-content-item');
// for(var i = 0; i<lis.length;i++){
//   lis[i].suoyin = i;
//   lis[i].onclick = function(){
//     for(var j = 0;j<lis.length;j++){
//       lis[j].className = '';
//       divs[j].className = 'tab-content-item';
//     }
//     this.className = 'active';
//     var index = this.suoyin;
//     divs[index].className = 'tab-content-item active';
//   }
// }




// for(var i = 0; i < lis.length; i++){
//   lis[i].suoyin = i;//给每一个lis添加一个索引属性，方便找到他的索引位置，以便下面访问divs
//   lis[i].onclick = function(){
//     for(var j = 0;j<lis.length;j++){
//       lis[j].className = '';
//       divs[j].className = 'tab-content-item';
//     }
//     this.className = 'active';
//     var index = this.suoyin;
//     divs[index].className = 'tab-content-item active';
//   }
// }








//首先获取元素，需要点击的li，还有与此同时发生变化的变换的大切换栏
// var lis = document.querySelectorAll('.tab-control li');
// var divs = document.querySelectorAll('.tab-content div');
//给每一个li注册点击事件；

// for(var i = 0;i<lis.length;i++){
//   //自己加一个索引的属性，让lis中的每一个内容的索引都与此时的i等同，及
//   lis[i].suoyin = i;
//   lis[i].onmouseover = function(){
//     for(var j = 0;j<lis.length;j++){//循坏遍历，让每一个lis与divs的白色消失，每一个灰色的背景色出现
//       lis[j].className = '';  //及让active消失为空
//       divs[j].className = 'tab-content-item';//同上，消失active
//     }
//     this.className = 'active';//让当前点击的那个li底色发生变化，让他的下面盒子出现
//     var index = this.suoyin; //把当前的索引赋值给index，让这个classname变成这个
//     divs[index].className = 'tab-content-item active';
//   }
// }


// for(var i = 0;i<lis.length;i++){
//   lis[i].suoyin = i;
//   lis[i].onclick = function(){
//     for(var j = 0;j<lis.length;j++){
//       lis[j].className = '';
//       divs[j].className = 'tab-content-item';
//     }
//     this.className = 'active';
//     var index = this.suoyin;
//     divs[index].className = 'tab-content-item active';
//   }
// }

// for(var i = 0;i<lis.length;i++){
//   lis[i].suoyin = i;
//   lis[i].onclick = function(){
//     for(var j = 0; j<lis.length;j++){
//       lis[j].className = '';
//       divs[j].className = 'tab-content-item';
//     }
//     this.className = 'active';
//     var index = this.suoyin;
//     divs[index].className = 'tab-content-item active';
//   }
// }