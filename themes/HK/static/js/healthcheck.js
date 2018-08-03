$(function(){

});

function checkNextStep(thisObj,event){
	event.preventDefault();
	if(thisObj.checkValidity() == false)
		return
	var step=$(thisObj).closest('.step').data('step')
	goToStep(step)

	$('.hk-steps li:eq('+(step-1)+')').addClass('done')
	$('.hk-steps li:eq('+(step-1)+')').removeClass('active')
	$('.hk-steps li:eq('+(step)+')').addClass('active')

	return false;
}

function goToStep(step){

	$('#step'+step).removeClass('current')

	if(step <=2){
		$('#step'+(step+1)).removeClass('disabled')
		$('#step'+(step+1)).addClass('current')
		console.log("div=="+'#'+(step+1))
		scrollToStep((step+1))
	}
}


function scrollToStep(step){
   var id ="#step"+step;
	// target element
	var $id = $(id);
	if ($id.length === 0) {
		return;
	}

	// top position relative to the document
	var pos = $id.offset().top - 120;

	// animated top scrolling
	$('html, body').animate({scrollTop: pos}, 'slow');
	window.location.hash=id
}

function resetForm(){
	$('.step-container .step').removeClass('current')
	$('.step-container .step').removeClass('disabled')
	$('.step-container .step:not("#step1")').addClass('disabled')
	$('#step1').addClass('current')

	$('.hk-steps li').removeClass('done')
	$('.hk-steps li').removeClass('active')
	$('.hk-steps li:eq(0)').addClass('active')

}