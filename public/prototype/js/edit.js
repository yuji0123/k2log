$(function() {
	$(window).on('load resize', function(){
		var previewHeight = $(window).height() - 100;
		var textHeight = previewHeight - 61;
		// alert(windowsHeight);
		$('.header_edit').css({
			top: '0px'
		});
		$('.edit_article_submit').css({
			bottom: '0px'
		});
		$('.contents_edit_item').css({
			marginTop: '42px'
		});
		$('.box_01').css({
			paddingBottom: '5px'
		});
		$('.box_02').css({
			paddingTop: '5px',
			paddingBottom: '5px'
		});
		$('.edit_article_text').css({
			height: textHeight+'px'
		});
		$('.article_preview').css({
			height: previewHeight+'px',
			border: 'solid #dddddd 1px'
		});
	});
	$('.box_02 textarea').on('keyup', function(){
		var newText = $(this).val();
		console.log(newText);
		var newTextAry = newText.split("\n");
		console.log(newTextAry);
		lastOfIndex = newTextAry.length;
		var tmpText = '';
		$.each(newTextAry, function(index, val){
			var strSearched = val;
			//マークダウンによるタイトルの判定
			if(strSearched.indexOf("###") != -1){
				console.log(strSearched.indexOf(" ## "));
				tmpword = strSearched.substr(3);
				console.log(tmpword);
				tmpText += '<h2 class="article_preview_contents_title">' + tmpword + '</h2>';
			}else if(strSearched.indexOf("**") != -1){//
				var start = strSearched.indexOf("**")+2;
				if(strSearched.indexOf("**", start) != -1){
					var last = strSearched.indexOf("**", start)-2;
					tmpword = strSearched.substr(start, last);
					tmpText += '<strong>' + tmpword + '</strong>';
					last = last+4;
					tmpword = strSearched.substr(last);
					tmpText += tmpword;
					if(index != (lastOfIndex-1)){
						tmpText += '<br>';
					}
				}else{
					tmpText += val;
					if(index != (lastOfIndex-1)){
						tmpText += '<br>';
					}
				}
				strSearched = strSearched.substr(strSearched.indexOf("**"));
			}else{
				tmpText += val;
				if(index != (lastOfIndex-1)){
					tmpText += '<br>';
				}
			}
			console.log(tmpText);
		});
		$('.article_preview_contents').html(tmpText);
	});
	$('.submit_button').hover(
		function(){
			$(this).stop().animate({backgroundColor: jQuery.Color( "rgba(170,170,170,1.0)" )}, 200);
		},
		function(){
			$(this).stop().animate({backgroundColor: jQuery.Color( "rgba(112,112,112,1.0)" )}, 200);
		});
});




