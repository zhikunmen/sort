
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"bin-debug/Sort.js",
	"bin-debug/ms/ms1.js",
	"bin-debug/encryption/md5.js",
	"bin-debug/encryption/sha1.js",
	"bin-debug/insertSort.js",
	"bin-debug/Main.js",
	"bin-debug/mergeSort.js",
	"bin-debug/ms/deepCopy.js",
	"bin-debug/ms/digui_jg.js",
	"bin-debug/ms/digui_yazi.js",
	"bin-debug/ms/fibonacci.js",
	"bin-debug/bubbleSort.js",
	"bin-debug/ms/ms2.js",
	"bin-debug/ms/ms3.js",
	"bin-debug/ms/ms4.js",
	"bin-debug/ms/nInM.js",
	"bin-debug/ms/topK.js",
	"bin-debug/quickSort.js",
	"bin-debug/selectSort.js",
	"bin-debug/shellSort.js",
	"bin-debug/BinarySearchClass.js",
	"bin-debug/systemSort.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 640,
		contentHeight: 1136,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};