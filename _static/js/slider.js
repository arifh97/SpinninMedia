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


var testCurSlide = 1;

function test_nextSlide()
{
	$('#testimonial_' + testCurSlide).hide("slide", {direction: "right"}, 750);
	if (testCurSlide < 3)
	{
		testCurSlide = testCurSlide + 1;
	}
	else
	{
		testCurSlide = 1;
	}
	$('#testimonial_' + testCurSlide).delay(750).fadeIn();
}

function test_prevSlide()
{
	$('#testimonial_' + testCurSlide).hide("slide", {direction: "left"}, 750);
	if (testCurSlide > 1)
	{
		testCurSlide = testCurSlide - 1;
	}
	else
	{
		testCurSlide = 3;
	}
	$('#testimonial_' + testCurSlide).delay(750).fadeIn();
}


// "Ready"
$(function()
{
	$('#btnNext').click(test_nextSlide);
	$('#btnPrevious').click(test_prevSlide);
});


}
/*
     FILE ARCHIVED ON 21:58:42 Aug 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:46:33 Mar 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.067
  exclusion.robots: 0.168
  exclusion.robots.policy: 0.153
  RedisCDXSource: 31.699
  esindex: 0.01
  LoadShardBlock: 37.173 (3)
  PetaboxLoader3.datanode: 49.283 (4)
  load_resource: 227.467
  PetaboxLoader3.resolve: 212.737
*/