

$(document).ready(function(){
	
	$(window).resize(function(){
		if($(window).width()/$(window).height() >= 2){
			$('#bg').find('img').css({
				width:'100%',
				height:'auto'
			});
		}else{
			$('#bg').find('img').css({
				width:'auto',
				height:'100%'
			});
		}
	});
	
	
	
	setTimeout(function(){
		$('#title').slideDown(1000,function(){
			$('#headimg').fadeIn(500,function(){
				setTimeout(function(){
					$('#headimg').animate({
						left:'5px',
						top:'10px',
						width:'60px',
						height:'60px',
						border:0,
						borderRadius:'30px',
						marginLeft:0,
						marginTop:0
					},1000,function(){
						$('#logo').width(0);
						$('#logo').animate({
							width:'200px',
							opacity:'1'
						},1000,function(){
							$('#headimg').css('cursor','pointer');
							$('#headimg').click(function(){
								if($('#logo').width()!=0){
									$('#logo').stop();
									$('#logo').animate({
										width:0,
										opacity:0
									},1000);
								}else{
									$('#logo').stop();
									$('#logo').animate({
										width:'200px',
										opacity:1
									},1000);
								}
							});
						});
					});
					
				},1000);
			});
		});
	},1000);
});
