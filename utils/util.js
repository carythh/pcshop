const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//提示框并返回
function show_model_and_back(msg)
{
  wx.showModal({
    title:"提示",
    content:msg,
    success:function()
    {
      wx.navigateBack({
        delta: 1,
      });
    }
  })
}
function show_model(msg)
{
  wx.showModal({
    title:"提示",
    content:msg,
    success:function()
    {
    }
  })
}
function alert(msg,func1,func2)
{
  wx.showModal({
    title:"提示",
    content:msg,
    success:function(res)
    {
      if(res.confirm)
      {
        func1();
      }
      else
      {
        func2();
      }
    }
  })
}
//rpx2px
function rpx2px(r,systeminfo)
{
  return parseInt((r/750)*systeminfo.windowWidth);
}

module.exports = {
  formatTime: formatTime,
  show_model_and_back: show_model_and_back,
  show_model:show_model,
  rpx2px: rpx2px,
  alert:alert,
}
