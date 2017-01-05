// funs.js 自定义公共函数库文件
/*
 * 生成随机字符串
 * @param  int     随机字符串长度长度，默认值为 6 
 * @return string  返回由大小写字母组成的随机字符串
 */
function randomString(length=6){
	var str = ''
	for(var i=0; i<length; i++){
		var ascii = Math.ceil(Math.random()*25)+Math.round(Math.random())*32
		str += String.fromCharCode(ascii+65)
	}
	return str
}

/*
 * 返回 YYYY-MM-DD 格式的指定时间
 * @param  int      从当前时间的偏移量，0为今天，-1为昨天，1为明天以此类推
 * @return string  返回格式化的指定时间
 */
function getDay(day){  
       var today = new Date();  
         
       var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          
  
       today.setTime(targetday_milliseconds); //注意，这行是关键代码    
         
       var tYear = today.getFullYear();  
       var tMonth = today.getMonth();  
       var tDate = today.getDate();  
       tMonth = doHandleMonth(tMonth + 1);  
       tDate = doHandleMonth(tDate);  
       return tYear+"-"+tMonth+"-"+tDate;  
} 

/*
 * 格式化处理时间，在单位数前添加 0 
 * @param  int      需要格式化处理的时间
 * @return string  返回格式化的时间
 */
function doHandleMonth(month){  
       var m = month;  
       if(month.toString().length == 1){  
          m = "0" + month;  
       }  
       return m;  
}  

/*
 * 返回 YYYY-MM-DD HH:mm:ss 格式的当前时间
 * @return string  返回格式化的当前时间
 */
function getCurTime(){
	var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    month = doHandleMonth(month); 
    strDate = doHandleMonth(strDate); 
    
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();

    return currentdate;
}

/*
 * 返回 YYYY-MM-DD 格式的当前时间
 * @return string  返回格式化的当前时间
 */
function getCurDate(){
	var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    month = doHandleMonth(month); 
    strDate = doHandleMonth(strDate); 
	
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate

    return currentdate;
}

/*
 * 串行上传多个文件文件
 * @param   Object  param
 * @param   String  param.url
 * @param   Array   param.files
 * @param   String  param.name
 * @param   Object  param.formData
 * @return  void    
 */
function multiUpload(param, i=0){
    wx.hideToast()
    wx.showToast({
      title: "第"+(i+1)+"张图片上传中…",
      icon: "loading",
      duration: 10000,
      mask: true
    })
    wx.uploadFile({
      url: param.url,
      filePath: param.files[i],
      name: param.name,
      formData: param.formData,
      success: function(res){
        if(res.data.err){
            multiUpload(param, i)
        }else if(i < param.files.length-1){
            i++
            multiUpload(param, i)
        }else{
            wx.hideToast()
            if(param.success != undefined)
                param.success()
            return
        }
      },
      fail: function() {
        multiUpload(param, i)
      }
    })
}

module.exports = {
	randomString: randomString,
	getDay: getDay,
	doHandleMonth: doHandleMonth,
	getCurTime: getCurTime,
	getCurDate: getCurDate,
    multiUpload: multiUpload
}