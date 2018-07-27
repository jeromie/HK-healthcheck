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

	// Show/hide exercise
	$("input[name='exercise']").change(function(){
		if($("#exerciseno:checked").length > 0){
			$('.exerciseyes-row').addClass('d-none');
		}else{
			$('.exerciseyes-row').removeClass('d-none');
		}
	});

	// Datepicker for desktop only
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	} else {
		$('.dob').datetimepicker({
			timepicker:false,
			format:'Y-m-d',
			maxDate: 0,
			todayButton: false,
			yearStart: 1920,
			yearEnd: 2018,
			onSelectDate:function(){
				// $('.dob').removeClass('no-date')
			}
		});
	}
	$(document).on('blur', '.dob', function(){
		if ($(this).val()){
			$('.dob').removeClass('no-date')
		} else{
			$('.dob').addClass('no-date')
		}
	})

	// Enable submit button if valid number
	$('#mobNumber input').on('keyup', function () {
		var mobileform = document.getElementById('mobNumber');
		if (mobileform.checkValidity() === false) {
		  event.preventDefault();
		  $('.mob-save').prop('disabled', true)
		  event.stopPropagation();
		} else {
	        $('.mob-save').removeAttr('disabled')
	    }
	});

	(function() {
	  'use strict';
	  window.addEventListener('load', function() {
	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
	      form.addEventListener('submit', function(event) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          $(form).find('.form-error').removeClass('d-none');
	          event.stopPropagation();
	        } else {
	          $(form).find('.save-loader').removeClass('d-none')
	          $(form).find('.save-btn').addClass('d-none')
	        }
	        form.classList.add('was-validated');
	      }, false);
	    });
	  }, false);
	})();

});