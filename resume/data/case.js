
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS热身，if判断",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2016-09-20 10:08",
					caseThumbnail:"images/lianxiGIF/shezhiDIV.gif",
					caseDescription:"属性操作、图片切换、短信属性操作<br>图片切换、短信",
					caseWebsite:"wuqingru.github.io/resume/case/shezhiDIV"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2016-09-20 10:08",
					caseThumbnail:"images/lianxiGIF/monishoujiduanxin.gif",
					caseDescription:"描述：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"wuqingru.github.io/resume/case/monishoujiduanxin"
				}
			]
		},
		{
			caseName:"for应用this关键字",
			caseList:[
				{
					caseTitle:"生成100个div",
					publishTime:"2016-09-20 10:08",
					caseThumbnail:"images/lianxiGIF/shengcheng100DIV.gif",
					caseDescription:"利用for循环和拼接字符串自动生成100个div，再利用for给每个div加上颜色",
					caseWebsite:"wuqingru.github.io/resume/case/shengcheng100DIV"
				},
				{
					caseTitle:"生成V字",
					publishTime:"2016-09-20 10:08",
					caseThumbnail:"images/lianxiGIF/shengchengVzi.gif",
					caseDescription:"利用循环生成div，用判断设置div的定位高度",
					caseWebsite:"wuqingru.github.io/resume/case/shengchengVzi"
				},
				{
					caseTitle:"轮播图",
					publishTime:"2016-09-20 10:08",
					caseThumbnail:"images/lianxiGIF/lunbotu.gif",
					caseDescription:"做了图片轮播的效果，可以控制是单次循环还是一直循环",
					caseWebsite:"wuqingru.github.io/resume/case/lunbotu"
				},
				{
					caseTitle:"擦擦擦",
					publishTime:"2016-09-20 10:09",
					caseThumbnail:"images/lianxiGIF/cacaca.gif",
					caseDescription:"移入div，对应的覆盖层消失",
					caseWebsite:"wuqingru.github.io/resume/case/cacaca"
				},{
					caseTitle:"带缩略图的轮播图",
					publishTime:"2016-09-20 10:09",
					caseThumbnail:"images/lianxiGIF/suoluetu.gif",
					caseDescription:"在原始的轮播图上又添加了缩略图，移入显示",
					caseWebsite:"wuqingru.github.io/resume/case/suoluetu"
				},
				{
					caseTitle:"QQ菜单",
					publishTime:"2016-09-20 10:10",
					caseThumbnail:"images/lianxiGIF/QQcaidan.gif",
					caseDescription:"利用布局小技巧达到列表显示隐藏的效果，再使用定点清除的方法来切换焦点",
					caseWebsite:"wuqingru.github.io/resume/case/QQcaidan"
				},
				{
					caseTitle:"多张图片切换",
					publishTime:"2016-09-20 10:10",
					caseThumbnail:"images/lianxiGIF/duozhangtupianqiehuan.gif",
					caseDescription:"点击按钮可以同时切换两组图片，用到的知识点有，索引值，循环，自定义属性等",
					caseWebsite:"wuqingru.github.io/resume/case/duozhangtupianqiehuan"
				}
			]
		},
		{
			caseName:"函数传参、重用、价格计算",
			caseList:[
				{
					caseTitle:"QQ号码验证",
					publishTime:"2016-09-20 10:12",
					caseThumbnail:"images/lianxiGIF/QQyanzheng.gif",
					caseDescription:"判断数据的长度，类型，不能为空等等",
					caseWebsite:"wuqingru.github.io/resume/case/QQyanzheng"
				},
				{
					caseTitle:"修改文本框的值",
					publishTime:"2016-09-20 10:12",
					caseThumbnail:"images/lianxiGIF/xiugaiwenbenkuangdezhi.gif",
					caseDescription:"利用传参来控制多个文本框",
					caseWebsite:"wuqingru.github.io/resume/case/xiugaiwenbenkuangdezhi"
				},
				{
					caseTitle:"超市小票",
					publishTime:"2016-09-20 10:13",
					caseThumbnail:"images/lianxiGIF/chaoshixiaopiao.gif",
					caseDescription:"监控数据的每一次改变，然后利用一些数学运算方法来实现",
					caseWebsite:"wuqingru.github.io/resume/case/chaoshixiaopiao"
				},
				{
					caseTitle:"多层选项卡",
					publishTime:"2016-09-20 10:13",
					caseThumbnail:"images/lianxiGIF/xuanxiangkaqiantao.gif",
					caseDescription:"封装函数，传参",
					caseWebsite:"wuqingru.github.io/resume/case/xuanxiangkaqiantao"
				},
				{
					caseTitle:"多彩DIV",
					publishTime:"2016-09-20 10:14",
					caseThumbnail:"images/lianxiGIF/duocaiDIV.gif",
					caseDescription:"封装函数，传参",
					caseWebsite:"wuqingru.github.io/resume/case/duocaiDIV"
				}
			]
		},
		{
			caseName:"运算符流程控制",
			caseList:[
				{
					caseTitle:"全选多选",
					publishTime:"2016-09-20 10:15",
					caseThumbnail:"images/lianxiGIF/quanxuanduoxuan.gif",
					caseDescription:"遍历每一个input，有一个没被选中，那么就没有全选",
					caseWebsite:"wuqingru.github.io/resume/case/quanxuanduoxuan"
				},
				{
					caseTitle:"评分",
					publishTime:"2016-09-20 10:15",
					caseThumbnail:"images/lianxiGIF/pingfen.gif",
					caseDescription:"记录上次点击过的位置，移入的时候不改变，只有点击的时候改变",
					caseWebsite:"wuqingru.github.io/resume/case/pingfen"
				}
			]
		},{
			caseName:"定时器管理、函数封装",
			caseList:[
				{
					caseTitle:"滑动DIV",
					publishTime:"2016-09-20 10:17",
					caseThumbnail:"images/lianxiGIF/huadongDIV.gif",
					caseDescription:"点击触发运动函数并依次运动",
					caseWebsite:"wuqingru.github.io/resume/case/huadongDIV"
				},
				{
					caseTitle:"详情轮播图",
					publishTime:"2016-09-20 10:18",
					caseThumbnail:"images/lianxiGIF/xiangqinglunbotu.gif",
					caseDescription:"同时控制图片和描述",
					caseWebsite:"wuqingru.github.io/resume/case/xiangqinglunbotu"
				},
				{
					caseTitle:"淘宝广告",
					publishTime:"2016-09-20 10:18",
					caseThumbnail:"images/lianxiGIF/taobaoguanggao.gif",
					caseDescription:"知识点：运动，判断，循环",
					caseWebsite:"wuqingru.github.io/resume/case/taobaoguanggao"
				},
				{
					caseTitle:"选项卡自动播放",
					publishTime:"2016-09-20 10:19",
					caseThumbnail:"images/lianxiGIF/xuanxiangkazidongbofang.gif",
					caseDescription:"知识点：运动，传参，循环",
					caseWebsite:"wuqingru.github.io/resume/case/xuanxiangkazidongbofang"
				}
			]
		},
		{
			caseName:"日期对象、时钟、日历",
			caseList:[
				{
					caseTitle:"滑动时钟",
					publishTime:"2016-09-20 10:20",
					caseThumbnail:"images/lianxiGIF/huadongshizhong.gif",
					caseDescription:"知识点：运动，循环，回调函数",
					caseWebsite:"wuqingru.github.io/resume/case/huadongshizhong"
				},
				{
					caseTitle:"翻转时钟",
					publishTime:"2016-09-20 10:20",
					caseThumbnail:"images/lianxiGIF/fanzhuanshizhong.gif",
					caseDescription:"知识点：运动，循环，回调函数",
					caseWebsite:"wuqingru.github.io/resume/case/fanzhuanshizhong"
				},
				{
					caseTitle:"仿WIN10日历",
					publishTime:"2016-09-26 15:22",
					caseThumbnail:"images/lianxiGIF/fangWIN10rili.gif",
					caseDescription:"利用日期对象做了一个小案例，仿照win10系统的日历样式的日历",
					caseWebsite:"wuqingru.github.io/resume/case/fangWIN10rili"
				}
			]
		},{
			caseName:"字符串、查找高亮显示",
			caseList:[
				{
					caseTitle:"文字搬运工",
					publishTime:"2016-09-21 16:30",
					caseThumbnail:"images/lianxiGIF/wenzibanyungong.gif",
					caseDescription:"知识点：字符串截取、拼接字符串、判断",
					caseWebsite:"wuqingru.github.io/resume/case/wenzibanyungong"
				},
				{
					caseTitle:"查找替换",
					publishTime:"2016-09-26 15:22",
					caseThumbnail:"images/lianxiGIF/chazhaotihuan.gif",
					caseDescription:"知识点：字符串截取、拼接字符串、判断",
					caseWebsite:"wuqingru.github.io/resume/case/chazhaotihuan"
				},
				{
					caseTitle:"消除表情小游戏",
					publishTime:"2016-09-26 15:30",
					caseThumbnail:"images/lianxiGIF/xiaochubiaoqing.gif",
					caseDescription:"这是一个综合小练习，是运用JS的相关方法以及一些逻辑来实现的小游戏，可玩性极高哦~",
					caseWebsite:"wuqingru.github.io/resume/case/xiaochubiaoqing"

				}
			]
		},{
			caseName:"数组、排序、随机翻动",
			caseList:[
				{
					caseTitle:"排序",
					publishTime:"2016-09-21 16:40",
					caseThumbnail:"images/lianxiGIF/paixu.gif",
					caseDescription:"知识点：数组排序、innerHTML",
					caseWebsite:"wuqingru.github.io/resume/case/paixu"
				},
				{
					caseTitle:"随机翻动",
					publishTime:"2016-09-21 16:41",
					caseThumbnail:"images/lianxiGIF/suijifandong.gif",
					caseDescription:"知识点：运动，数组排序",
					caseWebsite:"wuqingru.github.io/resume/case/suijifandong"
				}
			]
		},{
			caseName:"DOM",
			caseList:[
				{
					caseTitle:"移入变色",
					publishTime:"2016-09-21 16:50",
					caseThumbnail:"images/lianxiGIF/yirubianse.gif",
					caseDescription:"知识点：DOM兄弟节点、判断",
					caseWebsite:"wuqingru.github.io/resume/case/yirubianse"
				},
				{
					caseTitle:"多级菜单",
					publishTime:"2016-09-21 16:51",
					caseThumbnail:"images/lianxiGIF/duojicaidan.gif",
					caseDescription:"知识点：DOM兄弟节点、子节点、遍历",
					caseWebsite:"wuqingru.github.io/resume/case/duojicaidan"
				},
				{
					caseTitle:"详情提示",
					publishTime:"2016-09-21 16:52",
					caseThumbnail:"images/lianxiGIF/xiangqingtishi.gif",
					caseDescription:"知识点：计算范围",
					caseWebsite:"wuqingru.github.io/resume/case/xiangqingtishi"
				},
				{
					caseTitle:"随机DIV",
					publishTime:"2016-09-21 16:53",
					caseThumbnail:"images/lianxiGIF/suijiDIV.gif",
					caseDescription:"知识点：DOM兄弟节点、递归、传参",
					caseWebsite:"wuqingru.github.io/resume/case/suijiDIV"
				},
				{
					caseTitle:"元素交换位置",
					publishTime:"2016-09-21 16:53",
					caseThumbnail:"images/lianxiGIF/yuansujiaohuanweizhi.gif",
					caseDescription:"知识点：DOM兄弟节点、判断",
					caseWebsite:"wuqingru.github.io/resume/case/yuansujiaohuanweizhi"
				},
				{
					caseTitle:"创建文件夹",
					publishTime:"2016-09-21 16:54",
					caseThumbnail:"images/lianxiGIF/chuangjianwenjianjia.gif",
					caseDescription:"知识点：创建元素",
					caseWebsite:"wuqingru.github.io/resume/case/chuangjianwenjianjia"
				},
				{
					caseTitle:"表格操作",
					publishTime:"2016-09-21 16:56",
					caseThumbnail:"images/lianxiGIF/biaogecaozuo.gif",
					caseDescription:"知识点：根据数据生成元素、创建元素、各种操作等等",
					caseWebsite:"wuqingru.github.io/resume/case/biaogecaozuo"
				},
				{
					caseTitle:"模拟文件夹系统",
					publishTime:"2016-09-21 16:58",
					caseThumbnail:"images/lianxiGIF/wenjianjiaxitong.gif",
					caseDescription:"实现了文件夹系统",
					caseWebsite:"wuqingru.github.io/resume/case/wenjianjiaxitong"
				}
			]
		},{
			caseName:"BOM",
			caseList:[
				{
					caseTitle:"生成选项卡",
					publishTime:"2016-09-21 17:00",
					caseThumbnail:"images/lianxiGIF/shengchengxuanxiangka.gif",
					caseDescription:"知识点：创建元素、innerHTML",
					caseWebsite:"wuqingru.github.io/resume/case/shengchengxuanxiangka"
				},
				{
					caseTitle:"招聘",
					publishTime:"2016-09-21 17:02",
					caseThumbnail:"images/lianxiGIF/zhaopin.gif",
					caseDescription:"知识点：search、hash",
					caseWebsite:"wuqingru.github.io/resume/case/zhaopin"
				}
			]
		},{
			caseName:"事件",
			caseList:[
				{
					caseTitle:"拖拽",
					publishTime:"2016-09-21 17:03",
					caseThumbnail:"images/lianxiGIF/tuozhuai.gif",
					caseDescription:"知识点：event对象",
					caseWebsite:"wuqingru.github.io/resume/case/tuozhuai"
				},
				{
					caseTitle:"键盘DIV",
					publishTime:"2016-09-21 17:04",
					caseThumbnail:"images/lianxiGIF/jianpanDIV.gif",
					caseDescription:"知识点：event对象、运动、定时器",
					caseWebsite:"wuqingru.github.io/resume/case/jianpanDIV"
				},
				{
					caseTitle:"右键菜单",
					publishTime:"2016-09-21 17:04",
					caseThumbnail:"images/lianxiGIF/youjiancaidan.gif",
					caseDescription:"知识点：event对象",
					caseWebsite:"wuqingru.github.io/resume/case/youjiancaidan"
				},
				{
					caseTitle:"拖拽版轮播图",
					publishTime:"2016-09-21 17:06",
					caseThumbnail:"images/lianxiGIF/tuozhuaibanlunbotu.gif",
					caseDescription:"知识点：event对象、键盘事件、switch",
					caseWebsite:"wuqingru.github.io/resume/case/tuozhuaibanlunbotu"
				},
				{
					caseTitle:"搜索提示",
					publishTime:"2016-09-21 17:07",
					caseThumbnail:"images/lianxiGIF/sousuotishi.gif",
					caseDescription:"知识点：event对象、键盘事件",
					caseWebsite:"wuqingru.github.io/resume/case/sousuotishi"
				},
				{
					caseTitle:"检测碰撞框选",
					publishTime:"2016-09-21 17:09",
					caseThumbnail:"images/lianxiGIF/kuangxuan.gif",
					caseDescription:"知识点：event对象、传参、监控",
					caseWebsite:"wuqingru.github.io/resume/case/kuangxuan"
				},
				{
					caseTitle:"滚动条",
					publishTime:"2016-09-21 17:09",
					caseThumbnail:"images/lianxiGIF/gundongtiao.gif",
					caseDescription:"知识点：event对象、滚轮事件",
					caseWebsite:"wuqingru.github.io/resume/case/gundongtiao"
				}
			]
		}
]