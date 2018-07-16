$(function(){

	// Success data on confirm
	$('.show-success').click(function(){
		$('.confirm-data').addClass('d-none');
		$('.success-data').removeClass('d-none');
	});

	// Scroll to id on load
	function scrollToID(){
		var id = window.location.hash;
		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}
		// top position relative to the document
		var pos = $id.offset().top - 120;

		// animated top scrolling
		$('html, body').animate({ scrollTop: pos }, 'slow');
	}
	scrollToID();

	// Scroll to id when click
	$(document).on('click', '[data-href^="#"]', function(e) {
	   var id = $(this).attr('data-href');
		// target element
		var $id = $(id);
		if ($id.length === 0) {
			return;
		}

		e.preventDefault();
		// top position relative to the document
		var pos = $id.offset().top - 120;

		// animated top scrolling
		$('html, body').animate({scrollTop: pos}, 'slow');

	});

	// Generate report PDF
	$(document).on('click', '.print-report', function(e) {
		var element = document.getElementById('printform');
		var opt = {
			margin:       0.25,
			filename:     'HK-Report.pdf',
			image:        { type: 'jpeg', quality: 0.98 },
			html2canvas:  { scale: 2 },
			jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
		html2pdf().from(element).set(opt).save();
	});

	// Show/hide other location
	$("select.location-select").change(function(){
		var selectedLocation = $(".location-select option:selected").val();
		if (selectedLocation == "other"){
			$(".other-location").show();
			$(".other-location").find("input").attr("required", "true");
		} else {
			$(".other-location").hide();
			$(".other-location").find("input").removeAttr("required");
		}
	});

	// Datepicker for desktop only
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	} else {
		$('.dob').datetimepicker({
			timepicker:false,
			format:'Y-m-d',
			maxDate: 0,
			todayButton: false
		});
	}


});