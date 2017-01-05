//untitled.js 封装微信 API
/**
 * 发送请求
 * @Author   王子建
 * @DateTime 2016-12-22T18:09:51+0800
 */
function request(param){
	wx.request({
		url: param.url,
		data: param.data,
		header: param.header,
		method: param.method,
		dataType: param.dataType,
		success: function(res){
			if(param.success != undefined)
				param.success(res)
        },
		fail: function(){
            wx.showModal({
                title: '系统消息',
                content: '请求失败，请重试！',
                showCancel: false,
                confirmText: '确定'
            })
			if(param.fail != undefined)
            	param.fail()
        },
		complete: param.complete
	})
}

/**
 * 上传文件
 * @Author   王子建
 * @DateTime 2016-12-22T11:56:09+0800
 */
function uploadFile(param){
	wx.uploadFile({
		url: param.url,
		filePath: param.filePath,
		name: param.name,
		header: param.header,
		formData: param.formData,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "上传失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 下载图片
 * @Author   王子建
 * @DateTime 2016-12-22T11:57:36+0800
 */
function downloadFile(param){
	wx.downloadFile({
		url: param.url, 
		header: param.header, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "下载失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 新建 websocket 连接
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:31+0800
 */
function connectSocket(param){
	wx.connectSocket({
		url: param.url,
		data: param.data,
		header: param.header,
		method: param.method,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "连接 webSocket 失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 监听 websocket 打开事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onSocketOpen(CALLBACK){
	wx.onSocketOpen(CALLBACK)
}

/**
 * 监听 websocket 错误事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onSocketError(CALLBACK){
	wx.onSocketError(CALLBACK)
}

/**
 * websocket 发送数据
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function sendSocketMessage(param){
	wx.sendSocketMessage({
		data: param.data,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "发送消息失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 监听 websocket 接受消息事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onSocketMessage(CALLBACK){
	wx.onSocketMessage(CALLBACK)
}

/**
 * 关闭 websocket 连接
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function closeSocket(){
	wx.closeSocket()
}

/**
 * 监听 websocket 关闭事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onSocketClose(CALLBACK){
	wx.onSocketClose(CALLBACK)
}

/**
 * 选择图片
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function chooseImage(param){
	wx.chooseImage({
		count: param.count,
		sizeType: param.sizeType,
		sourceType: param.sourceType,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 预览图片
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function previewImage(param){
	wx.previewImage({
		current: param.current,
		urls: param.urls, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "预览失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 获取图片信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getImageInfo(param){
	wx.getImageInfo({
		src: param.src,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取图像信息失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 开始录音
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function startRecord(param){
	wx.startRecord({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "录音失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 停止录音
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function stopRecord(){
	wx.stopRecord()
}

/**
 * 播放语音
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function playVoice(param){
	wx.playVoice({
		filePath: param.filePath,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 暂停播放语音
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function pauseVoice(){
	wx.pauseVoice()
}

/**
 * 停止播放语音
 * @Author   王子建
 * @DateTime 2016-12-22T12:11:23+0800
 */
function stopVoice(){
	wx.stopVoice()
}

/**
 * 获取后台音乐播放状态
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getBackgroundAudioPlayerState(param){
	wx.getBackgroundAudioPlayerState({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取播放状态失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 后台播放音乐
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function playBackgroundAudio(param){
	wx.playBackgroundAudio({
		dataUrl: param.dataUrl, 
		title: param.title,
		coverImgUrl: param.coverImgUrl,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "播放失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 暂停播放音乐
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function pauseBackgroundAudio(){
	wx.pauseBackgroundAudio()
}

/**
 * 控制音乐播放进度
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function seekBackgroundAudio(param){
	wx.seekBackgroundAudio({
		position: param.position, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 停止播放音乐
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function stopBackgroundAudio(){
	wx.stopBackgroundAudio()
}

/**
 * 监听后台播放音乐事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onBackgroundAudioPlay(CALLBACK){
	wx.onBackgroundAudioPlay(CALLBACK)
}

/**
 * 监听后台音乐暂停事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onBackgroundAudioPause(CALLBACK){
	wx.onBackgroundAudioPause(CALLBACK)
}

/**
 * 监听音乐播放停止事件
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onBackgroundAudioStop(CALLBACK){
	wx.onBackgroundAudioStop(CALLBACK)
}

/**
 * 创建并返回一个 audioContext 对象
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function createAudioContext(audioid){
	wx.createAudioContext(audioid)
}

/**
 * 选择视频
 * @Author   王子建
 * @DateTime 2016-12-23T17:35:41+0800
 */
function chooseVideo(param){
	wx.chooseVideo({
		sourceType: param.sourceType,
		maxDuration: param.maxDuration,
		camera: param.camera,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 创建并返回一个 videoContext 上下文
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function createVideoContext(param){
	wx.createVideoContext()
}

/**
 * 保存文件到本地
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function saveFile(param){
	wx.saveFile({
		tempFilePath: param.tempFilePath, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "保存失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 获取本地文件列表
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getSavedFileList(param){
	wx.getSavedFileList({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取文件列表失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 获取本地文件信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getSavedFileInfo(param){
	wx.getSavedFileInfo({
		filePath: param.filePath, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取文件信息失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 删除本地文件
 * @Author   王子建
 * @DateTime 2016-12-22T12:19:30+0800
 */
function removeSavedFile(param){ 
	wx.removeSavedFile({
		filePath: param.filePath, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "删除文件失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 新页面打开文档
 * @Author   王子建
 * @DateTime 2016-12-23T18:44:01+0800
 */
function openDocument(param){
	wx.openDocument({
		filePath: param.filePath,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "打开文档失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 异步设置本地缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function setStorage(param){
	wx.setStorage({
		key: param.key, 
		data: param.data, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "设置缓存失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 同步设置本地缓存
 * @Author   王子建
 * @DateTime 2016-12-22T12:27:20+0800
 */
function setStorageSync(key, data){
	wx.setStorageSync(key, data)
}

/**
 * 异步获取本地缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getStorage(param){
	wx.getStorage({
		key: param.key, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取缓存失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 同步获取本地缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getStorageSync(key){
	wx.getStorageSync(key)
}

/**
 * 异步获取当前缓存数据的信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getStorageInfo(param){
	wx.getStorageInfo({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取缓存信息失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 同步获取当前缓存的信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getStorageInfoSync(){
	wx.getStorageInfoSync()
}

/**
 * 异步移除指定缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function removeStorage(param){
	wx.removeStorage({
		key: param.key, 
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "删除缓存失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 同步获取当前缓存的信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function removeStorageSync(key){
	wx.removeStorageSync(key)
}

/**
 * 异步清除所有缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function clearStorage(){
	wx.clearStorage()
}


/**
 * 同步清除所有缓存
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function clearStorageSync(){
	wx.clearStorageSync()
}

/**
 * 获取当前地理位置
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getLocation(param){
	wx.getLocation({
		type: param.type,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "定位失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 标记位置
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function chooseLocation(param){
	wx.chooseLocation({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		cancel: function(){
			// cancel
			param.cancel()
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "选择定位失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 打开位置
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function openLocation(param){
	wx.openLocation({
		latitude: param.latitude,
		longitude: param.longitude,
		scale: param.scale,
		name: param.name,
		address: param.address,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "打开定位失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 创建并返回一个 map 上下文
 * @Author   王子建
 * @DateTime 2016-12-24T09:18:05+0800
 */
function createMapContext(mapid){
	wx.createMapContext(mapid)
}

/**
 * 异步获取系统信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getSystemInfo(param){
	wx.getSystemInfo({
		success: function(res) {
			// success
			param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取系统信息失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 同步获取系统信息
 * @Author   王子建
 * @DateTime 2016-12-24T09:23:20+0800
 */
function getStorageInfoSync(){
	wx.getSystemInfoSync()
}

/**
 * 获取当前网络类型
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getNetworkType(param){
	wx.getNetworkType({
		success: function(res) {
			// success
			param.success()
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "获取网络类型失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 监听重力感应数据
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onAccelerometerChange(CALLBACK){
	wx.onAccelerometerChange(CALLBACK)
}

/**
 * 监听罗盘数据
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function onCompassChange(CALLBACK){
	wx.onCompassChange(CALLBACK)
}

/**
 * 拨打电话
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function makePhoneCall(param){
	wx.makePhoneCall({
		phoneNumber: param.phoneNumber,
		success: function() {
			// success
			param.success()
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "拨号失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 扫描二维码
 * @Author   王子建
 * @DateTime 2016-12-24T09:26:33+0800
 */
function scanCode(param){
	wx.scanCode({
		success: function() {
			// success
			param.success()
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "扫码失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 提示框
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function showToast(param){
	wx.showToast({
		title: param.title,
		icon: param.icon,
		duration: param.duration,
		mask: param.duration,
		success: function() {
			// success
			param.success()
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 隐藏消息提示框
 * @Author   王子建
 * @DateTime 2016-12-24T09:52:55+0800
 */
function hideToast(){
	wx.hideToast()
}

/**
 * 弹确认框
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function showModal(param){
	wx.showModal({
		title: param.title,
		content: param.content,
		showCancel: param.showCancel,
		cancelText: param.cancelText,
		cancelColor: param.cancelColor,
		confirmText: param.confirmText,
		confirmColor: param.confirmColor,
		success: function(res) {
			// success
			param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 显示操作菜单
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function showActionSheet(param){
	wx.showActionSheet({
		itemList: param.itemList,
		itemColor: param.itemColor,
		success: function(res) {
			// success
			param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 动态设置当前页面的标题
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function setNavigationBarTitle(param){
	wx.setNavigationBarTitle({
		title: param.title,
		success: function(res) {
			// success
			param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "设置导航标题失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 在当前页面显示导航条加载动画
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function showNavigationBarLoading(){
	wx.showNavigationBarLoading()
}

/**
 * 隐藏导航条加载动画
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function hideNavigationBarLoading(){
	wx.hideNavigationBarLoading()
}

/**
 * 页面跳转
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function navigateTo(param){
	wx.navigateTo({
		url: param.url,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "页面跳转失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function redirectTo(param){
	wx.redirectTo({
		url: param.url,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "页面重定向失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

function switchTab(param){
	wx.switchTab({
		url: param.url,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "切换 tabBar 失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 返回上一个页面
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function navigateBack(param){
	wx.navigateBack({
		delta: param.delta,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 创建一个动画实例
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function createAnimation(param){
	wx.createAnimation({
		duration: param.duration,
		timingFunction: param.timingFunction,
		delay: param.delay,
		transformOrigin: param.transformOrigin,
	})
}

/**
 * 停止当前页面下拉刷新
 * @Author   王子建
 * @DateTime 2016-12-22T18:05:32+0800
 * @return   {void}
 */
function stopPullDownRefresh(){ 
	wx.stopPullDownRefresh()
}

/**
 * 登陆
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function login(param){
	wx.login({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 检查用户登陆状态
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function checkSession(param){
	wx.checkSession({
		success: function() {
			//登陆状态未过期
			param.success()
		},
		fail: function() {
			//登陆状态过期
			if(param.fail != undefined)
                 param.fail()
		}
	})
}

/**
 * 获取用户信息
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function getUserInfo(param){
	wx.getUserInfo({
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

/**
 * 申请支付
 * @Author   王子建
 * @DateTime 2016-12-22T11:58:56+0800
 */
function requestPayment(param){
	wx.requestPayment({
		timeStamp: param.timeStamp,
		nonceStr: param.nonceStr,
		package: param.package,
		signType: param.signType,
		paySign: param.paySign,
		success: function(res){
			// success
			if(param.success != undefined)
                 param.success(res)
		},
		fail: function(){
			// fail
			wx.showModal({
				title: "系统提示",
				content: "操作失败！",
				showCancel: false
			})
			if(param.fail != undefined)
                 param.fail()
		},
		complete: param.complete
	})
}

module.exports = {
	request: request,
	uploadFile: uploadFile,
	downloadFile: downloadFile,
	connectSocket: connectSocket,
	onSocketOpen: onSocketOpen,
	onSocketError: onSocketError,
	sendSocketMessage: sendSocketMessage,
	onSocketMessage: onSocketMessage,
	closeSocket: closeSocket,
	onSocketClose: onSocketClose,
	chooseImage: chooseImage,
	previewImage: previewImage,
	getImageInfo: getImageInfo,
	startRecord: startRecord,
	stopRecord: stopRecord,
	playVoice: playVoice,
	pauseVoice: pauseVoice,
	stopVoice: stopVoice,
	getBackgroundAudioPlayerState: getBackgroundAudioPlayerState,
	playBackgroundAudio: playBackgroundAudio,
	pauseBackgroundAudio: pauseBackgroundAudio,
	seekBackgroundAudio: seekBackgroundAudio,
	stopBackgroundAudio: stopBackgroundAudio,
	onBackgroundAudioPlay: onBackgroundAudioPlay,
	onBackgroundAudioPause: onBackgroundAudioPause,
	onBackgroundAudioStop: onBackgroundAudioStop,
	createAudioContext: createAudioContext,
	chooseVideo: chooseVideo,
	createVideoContext: createVideoContext,
	saveFile: saveFile,
	getSavedFileList: getSavedFileList,
	getSavedFileInfo: getSavedFileInfo,
	removeSavedFile: removeSavedFile,
	openDocument: openDocument,
	setStorage: setStorage,
	setStorageSync: setStorageSync,
	getStorage: getStorage,
	getStorageSync: getStorageSync,
	getStorageInfo: getStorageInfo,
	getStorageInfoSync: getStorageInfoSync,
	removeStorage: removeStorage,
	removeStorageSync: removeStorageSync,
	clearStorage: clearStorage,
	clearStorageSync: clearStorageSync,
	getLocation: getLocation,
	chooseLocation: chooseLocation,
	openLocation: openLocation,
	createMapContext: createMapContext,
	getSystemInfo: getSystemInfo,
	getStorageInfoSync: getStorageInfoSync,
	getNetworkType: getNetworkType,
	onAccelerometerChange: onAccelerometerChange,
	onCompassChange: onCompassChange,
	makePhoneCall: makePhoneCall,
	scanCode: scanCode,
	showToast: showToast,
	hideToast: hideToast,
	showModal: showModal,
	showActionSheet: showActionSheet,
	setNavigationBarTitle: setNavigationBarTitle,
	showNavigationBarLoading: showNavigationBarLoading,
	hideNavigationBarLoading: hideNavigationBarLoading,
	navigateTo: navigateTo,
	redirectTo: redirectTo,
	switchTab: switchTab,
	navigateBack: navigateBack,
	createAnimation: createAnimation,
	stopPullDownRefresh: stopPullDownRefresh,
	login: login,
	checkSession: checkSession,
	getUserInfo: getUserInfo,
	requestPayment: requestPayment,
}