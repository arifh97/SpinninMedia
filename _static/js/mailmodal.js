var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function setupMailModal(title, subject)
{
	$('#email-type').text(title);
	$('#emailSubject').val(subject);
}

function validatePhone()
{
	var phone = $('#phone').val();
	if (phone.replace(/[^0-9]/g,"").length > 5)
	{
		$('#phone').closest('.form-group').removeClass('has-error').addClass('has-success');
		return true;	
	}
	else
	{
		$('#phone').closest('.form-group').removeClass('has-success').addClass('has-error');
		return false;
	}
}

function validateEmail()
{
	if (mfStdValidation.isEmail($('#email').val()))
	{
		$('#email').closest('.form-group').removeClass('has-error').addClass('has-success');
		return true;	
	}
	else
	{
		$('#email').closest('.form-group').removeClass('has-success').addClass('has-error');
		return false;
	}
}

function validateFirstName()
{
	if (mfStdValidation.isFirstName($('#first_name').val()))
	{
		$('#first_name').closest('.form-group').removeClass('has-error').addClass('has-success');
		return true;	
	}
	else
	{
		$('#first_name').closest('.form-group').removeClass('has-success').addClass('has-error');
		return false;
	}
}

function validateLastName()
{
	if (mfStdValidation.isLastName($('#last_name').val()))
	{
		$('#last_name').closest('.form-group').removeClass('has-error').addClass('has-success');
		return true;	
	}
	else
	{
		$('#last_name').closest('.form-group').removeClass('has-success').addClass('has-error');
		return false;
	}
}

function validateMessage()
{
	var message = $('#message').val();
	if (message.length > 10)
	{
		$('#message').closest('.form-group').removeClass('has-error').addClass('has-success');
		return true;	
	}
	else
	{
		$('#message').closest('.form-group').removeClass('has-success').addClass('has-error');
		return false;
	}
}

function validateAndSubmitEmail()
{
	var a = validatePhone();
	var b = validateEmail();
	var c = validateFirstName();
	var d = validateLastName();
	var e = validateMessage();
	
	if (a && b && c && d && e)
	{
		$('#contactForm').submit();
	}
}

}
/*
     FILE ARCHIVED ON 01:52:48 Aug 21, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:46:33 Mar 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 181.902
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.09
  cdx.remote: 0.089
  esindex: 0.015
  LoadShardBlock: 79.966 (3)
  PetaboxLoader3.datanode: 74.875 (4)
  load_resource: 326.128
  PetaboxLoader3.resolve: 300.987
*/