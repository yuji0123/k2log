$(function(){

	$('.sortlist_item').css({
		backgroundColor: '#707070'
	});

	$('.sortlist_link').css({
		backgroundColor: jQuery.Color( "rgba(170,170,170,1.0)" )
	});

	$('#container').on('mixStart', function(e, state){
		$(".mix").css({
			display: "inline-block"
		});
		setSubLength(state.totalShow);
	});
	$('#container').mixItUp();
	$('.articlelist_link').hover(
		function(){
			// console.log($(this).find('.articlelist_subcontent'));
			$(this).stop().fadeTo('fast', 0.4);
		},
		function(){
			$(this).stop().fadeTo('fast', 1.0);
		});

	// Sortbyにマウスカーソルが当たった時のエフェクト
	$('.sortlist_link').hover(
		function(){
			$(this).stop().animate({backgroundColor: jQuery.Color( "rgba(170,170,170,0.3)" )}, 200);
		},
		function(){
			$(this).stop().animate({backgroundColor: jQuery.Color( "rgba(170,170,170,1.0)" )}, 200);
		});


});



function setSubLength(numMainList){
	var _mainLength = 0;
	if(typeof numMainList == 'number'){
		console.log('the parameter is number.');
		_mainLength = ((numMainList+1) * 50) + numMainList+1;
	}else{
		var _tmpNumMainList = parseInt(numMainList);
		_mainLength = ((_tmpNumMainList+1) * 50) + _tmpNumMainList+1;
	}
	console.log(_mainLength);
	// メインカラムから、サブカラムのsortby分とtwitter分を差し引いた高さを求める
	var _restLenth = _mainLength - (662+307);
	$(".sublist_rest").css({
		"height": _restLenth+"px",
		"margin-bottom": "2px"
	});
}