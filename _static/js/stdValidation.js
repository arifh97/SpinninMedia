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

var mfStdValidation = {};

mfStdValidation.isDate = function(y, m, d)
{
	y = parseInt(y, 10);
	m = parseInt(m, 10) - 1;
	d = parseInt(d, 10);
	
	dateObj = new Date(y, m, d);
	
	return (d === dateObj.getDate() && m === dateObj.getMonth() && y === dateObj.getFullYear());
}	

mfStdValidation.isUSZip = function(zip)
{
	window.console && console.log('Checking zip validity for: ' + zip);
	var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	return regex.test(zip);
};

mfStdValidation.isUKPostCode = function(postcode)
{
	window.console && console.log('Checking UK postcode validity for: ' + postcode);
	var regex = /^(GIR ?0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/;
	return regex.test(postcode);
};

mfStdValidation.isEmail = function(email)
{
	var mergedMatches = this.curseMatches;
	mergedMatches = mergedMatches.concat(this.nonEmailMatches);
	
	for (i = 0; i < mergedMatches.length; i++)
	{
		var patt = mergedMatches[i];
		
		if (patt.test(email))
		{
			window.console && console.log(email + " appears to be cursed or garbage");
			return false;
		}
	}
	
	if (!this.emailMatch.test(email))
	{
		window.console && console.log(email + " is not a valid email address");
		return false;
	}
	
	return true;
};

mfStdValidation.isFirstName = function(name)
{
	// Must have two or more letters
	var patt = /[a-zA-Z]{2}/i;
	if (!patt.test(name))
	{
		this.failedPattern = "Too Short";
		window.console && console.log(name + " is too short");
		return false;
	}
	
	var mergedMatches = this.nonNameMatches;
	mergedMatches = mergedMatches.concat(this.garbageMatches);
	mergedMatches = mergedMatches.concat(this.curseMatches);
	mergedMatches = mergedMatches.concat(this.fourOrMoreVoulesMatch);
	mergedMatches = mergedMatches.concat(this.neverInFirstNames);
	
	for (i = 0; i < mergedMatches.length; i++)
	{
		var patt = mergedMatches[i];
		
		if (patt.test(name)) 
		{
			window.console && console.log(name + " fails regular expression match " + patt.toString());
			this.failedPattern = patt.toString();
			return false;
		}
	}
	
	return true;
};

mfStdValidation.isLastName = function(name)
{	
	// Must have two or more letters
	var patt = /[a-zA-Z]{2}/i;
	if (!patt.test(name))
	{
		this.failedPattern = "Too Short";
		window.console && console.log(name + " is too short");
		return false;
	}
	
	var mergedMatches = this.nonNameMatches;
	mergedMatches = mergedMatches.concat(this.garbageMatches);
	mergedMatches = mergedMatches.concat(this.curseMatches);
	
	for (i = 0; i < mergedMatches.length; i++)
	{
		var patt = mergedMatches[i];
		
		if (patt.test(name)) 
		{
			window.console && console.log(name + " fails regular expression match " + patt.toString());
			this.failedPattern = patt.toString();
			return false;
		}
	}
	
	return true;
};

mfStdValidation.isCity = function(city)
{	
	if (city.length < 2)
	{
		this.failedPattern = "Too Short";
		window.console && console.log(city + " is too short");
		return false;
	}
	
	var mergedMatches = this.nonCityMatches;
	mergedMatches = mergedMatches.concat(this.garbageMatches);
	mergedMatches = mergedMatches.concat(this.curseMatches);
	
	for (i = 0; i < mergedMatches.length; i++)
	{
		var patt = mergedMatches[i];
		
		if (patt.test(city)) 
		{
			window.console && console.log(city + " fails regular expression match " + patt.toString());
			this.failedPattern = patt.toString();
			return false;
		}
	}
	
	return true;
};

mfStdValidation.isStreetAddress = function(address)
{	
	if (address.length < 6)
	{
		this.failedPattern = "Too Short";
		window.console && console.log(address + " is too short");
		return false;
	}
	
	patt = /[^ ]{1}[ ]+[^ ]{1}/i;
	if (!patt.test(address))
	{
		this.failedPattern = "Insufficient Inner Spaces";
		window.console && console.log(address + " has no middle spaces");
		return false;
	}
	
	patt = /^[\d]+/i;
	if (!patt.test(address))
	{
		this.failedPattern = "Must start with street number";
		window.console && console.log(address + " must start with street number");
		return false;
	}
	
	var mergedMatches = this.nonStreetMatches;
	mergedMatches = mergedMatches.concat(this.garbageMatches);
	mergedMatches = mergedMatches.concat(this.curseMatches);
	mergedMatches = mergedMatches.concat(this.bogusStreetAddresses);
	
	for (i = 0; i < mergedMatches.length; i++)
	{
		var patt = mergedMatches[i];
		
		if (patt.test(address)) 
		{
			window.console && console.log(address + " fails regular expression match " + patt.toString());
			this.failedPattern = patt.toString();
			return false;
		}
	}
	
	return true;
};


mfStdValidation.sanitizeUsPhone = function(phone)
{
	phone = phone.replace(/\D/g,'');
	phone = phone.replace(/^1/g,'');
	phone = phone.substring(0, 10);
	
	return phone;
};

mfStdValidation.isUsPhone = function(phone)
{
	if (mfStdValidation.usPhoneMatch.test(phone))
	{
		return true;
	}
	return false;
};

mfStdValidation.isUkPhone = function(phone)
{
	if (mfStdValidation.ukPhoneMatch.test(phone))
	{
		return true;
	}
	return false;
};

mfStdValidation.isAusPhone = function(phone)
{
	if (mfStdValidation.ausPhoneMatch.test(phone))
	{
		return true;
	}
	return false;
};

mfStdValidation.isAusMobilePhone = function(phone)
{
	if (mfStdValidation.ausMobilePhoneMatch.test(phone))
	{
		return true;
	}
	return false;
};

mfStdValidation.usPhoneMatch = /^([2-9]{1}[0-9]{2})([2-9]{1}[\d]{2})([\d]{4})$/;

mfStdValidation.ukPhoneMatch = /^0[1-9]{1}([\d]{8,9}|[\d]{6})$/;

mfStdValidation.ausPhoneMatch = /^([\d]{5,14})$/;

mfStdValidation.ausMobilePhoneMatch = /^04[\d]{8}$/;

mfStdValidation.emailMatch = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
//mfStdValidation.emailMatch = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

mfStdValidation.nonEmailMatches = [
		/^none@/i,
		/^123@.+/i,
		/^abc@abc\.com$/i,
		/^noway/i,
		/^noneofy/i,
		/^johndoe/i,
		/^fu@/i,
		/^qwert/i,
		/^(.)\1{2,}@/i,
		/^.@/i,
		/@.\..+/i
];

mfStdValidation.nonStreetMatches = [
		/[^-,'\. A-Za-z0-9]+/i
];

mfStdValidation.nonCityMatches = [
		/[^-'\. A-Za-z]+/i
];

mfStdValidation.nonNameMatches = [
		/[^-'\. A-Za-z]+/i
];

mfStdValidation.garbageMatches = [
		/(.)\1\1/,
		/(.)([^i])\1\2\1\2/,
		// /([^sid])(.)([^itl])\1\2\3/, // Breaks BARBARA
		/([^d])(.)(.)([^d])\1\2\3\4/, // Breaks BARABARA
		/qwe/i,
		/werty/i,
		// /ert/i,
		/rtyu/i,
		/tyui/i,
		/yuio/i,
		/uiop/i,
		// /asd/i,
		/sdf/i,
		/dfg/i,
		/fgh/i,
		/ghj/i,
		/hjk/i,
		/zxc/i,
		/xcv/i,
		/cvb/i,
		/vbn/i,
		/poiu/i,
		/oiu/i,
		/iuy/i,
		/uytr/i,
		/ytrew/i,
		/trewq/i,
		/rewq/i,
		/lkj/i,
		/kjh/i,
		/jhg/i,
		/hgf/i,
		/gfd/i,
		/fds/i,
		/mnb/i,
		/nbv/i,
		/bvc/i,
		/vcx/i
];

mfStdValidation.fourOrMoreVoulesMatch = [
		/(?!oui)(?!oua)[aeiou]{4,99}/i // Strings of voules... Exclude oui as in "Louis" and oua as in "LouAnne"
];

mfStdValidation.fourOrMoreConsinents = [
		/[^aeiou]{4,99}/i
];

mfStdValidation.neverInFirstNames = [
		/asf/i,
		/acd/i,
		/aei/i
]

mfStdValidation.bogusStreetAddresses = [
	/^1313 mocking/i,		// Munsterns
	/^221 B Baker/i,		// Sherlock Holmes
	/^1600 Penns/i,		// Whitehouse
	/^11 Wall St/i,		// NY Stock exchange
	/^[\d]+ fake/i,		// Fake Street, Way, Drive etc
	/^[\d]+ somewhere/i,	// Somewhere, indeed...
	/^[\d]+ anywhere/i,	// Anywhere, indeed...
]

mfStdValidation.curseMatches = [
		/\bSEXY\b/i,
		/\bSEX\b/i,
		/\bFAKE\b/i,
		/\bANAL\b/i,
		/\bSTUPID\b/i,
		/ahole$/i,
		/\banus/i,
		/\bass\b/i,
		/\bass /i,
		/\bassface\b/i,
		/\bassho/i,
		/asshole/i,
		/\basswipe\b/i,
		/\bazzhole\b/i,
		/\bbassterds\b/i,
		/\bbastard\b/i,
		/\bbiatch\b/i,
		/\bbitch\b/i,
		/\bbiteme/i,
		/bitches/i,
		/blowjob/i,
		/blow job/i,
		/\bblowme/i,
		/boffing/i,
		/butthole/i,
		/buttwipe/i,
		/\bcarpet /i,
		/\bcawk\b/i,
		/\bcawks\b/i,
		/\bClit\b/i,
		/\bcnts\b/i,
		/\bcntz\b/i,
		/\bcock\b/i,
		/\bcockhead\b/i,
		/\bcock-head\b/i,
		/\bcocks[.]+/i,
		/\bCockSucker\b/i,
		/\bcock-sucker\b/i,
		/\bcrap\b/i,
		/\bcum\b/i,
		/\bcunt[.]+/i,
		/\bdildo\b/i,
		/\bdildos\b/i,
		/\bdominatricks\b/i,
		/\bdominatrics\b/i,
		/\bdominatrix\b/i,
		/\beatme/i,
		/\benema\b/i,
		/\bf u c k\b/i,
		/\bf u c k e r\b/i,
		/\bfag\b/i,
		/\bfaget\b/i,
		/\bfaggit\b/i,
		/\bfaggot\b/i,
		/\bfagit\b/i,
		/\bfags\b/i,
		/\bfagz\b/i,
		/\bfaig\b/i,
		/\bfaigs\b/i,
		/\bfart\b/i,
		/fuck/i,
		/fudge packer/i,
		/\bfuk\b/i,
		/\bfukah\b/i,
		/\bfuken\b/i,
		/\bfuker\b/i,
		/\bfukin\b/i,
		/\bfukk\b/i,
		/\bfukkah\b/i,
		/\bfukken\b/i,
		/\bfukker\b/i,
		/\bfukkin\b/i,
		/\bgayboy\b/i,
		/\bgaygirl\b/i,
		/\bgays\b/i,
		/\bgayz\b/i,
		/\bgod-damned\b/i,
		/\bhells\b/i,
		/\bhoar\b/i,
		/\bhoor\b/i,
		/\bhoore\b/i,
		/\bjackoff\b/i,
		/\bjap\b/i,
		/\bjaps\b/i,
		/\bjerk-off\b/i,
		/\bjisim\b/i,
		/\bjiss\b/i,
		/\bjizm\b/i,
		/\bjizz\b/i,
		/\bknob\b/i,
		/\bknobs\b/i,
		/\bknobz\b/i,
		/\bkunt\b/i,
		/\bkunts\b/i,
		/\bkuntz\b/i,
		/\bLesbian\b/i,
		/\bLezzian\b/i,
		/\bmasochist\b/i,
		/\bmasokist\b/i,
		/\bmassterbait\b/i,
		/\bmasstrbait\b/i,
		/\bmasstrbate\b/i,
		/\bmasterbaiter\b/i,
		/\bmasterbate\b/i,
		/\bmasterbates\b/i,
		/\bmotha /i,
		/\bmother /i,
		/\bmutha /i,
		/\bnastt\b/i,
		/\bnigger/i,
		/\bnigur/i,
		/\bniiger/i,
		/\bniigr/i,
		/\borafis\b/i,
		/\borgasim/i,
		/\borgasm\b/i,
		/\borgasum\b/i,
		/\boriface\b/i,
		/\borifice\b/i,
		/\borifiss\b/i,
		/\bpacki\b/i,
		/\bpackie\b/i,
		/\bpacky\b/i,
		/\bpaki\b/i,
		/\bpakie\b/i,
		/\bpaky\b/i,
		/\bpecker\b/i,
		/\bpeeenus\b/i,
		/\bpeeenusss\b/i,
		/\bpeenus\b/i,
		/\bpeinus\b/i,
		/\bpenis\b/i,
		/\bpenis-breath\b/i,
		/\bpenus\b/i,
		/\bpenuus\b/i,
		/\bPhuc\b/i,
		/\bPhucu\b/i,
		/\bPhuck\b/i,
		/\bPhucku\b/i,
		/\bPhuk\b/i,
		/\bPhuku\b/i,
		/\bPhuker\b/i,
		/\bPhukker\b/i,
		/\bPoonani\b/i,
		/\bpusse\b/i,
		/\bpussee\b/i,
		/\bpussy\b/i,
		/\bpuuke\b/i,
		/\bpuuker\b/i,
		/\bqueer\b/i,
		/\bqueers\b/i,
		/\bqueerz\b/i,
		/\bqweers\b/i,
		/\bqweerz\b/i,
		/\bqweir\b/i,
		/recktum/i,
		/rectum/i,
		/retard/i,
		/\bsadist\b/i,
		/\bscank\b/i,
		/schlong/i,
		/screwing/i,
		/\bsemen\b/i,
		/\bshit\b/i,
		/\bshits\b/i,
		/shitter/i,
		/shitty/i,
		/shity/i,
		/\bshitz\b/i,
		/\bShyt\b/i,
		/\bShyte\b/i,
		/\bShytty\b/i,
		/\bShyty\b/i,
		/\bskanck\b/i,
		/\bskank\b/i,
		/\bskankee\b/i,
		/\bskankey\b/i,
		/\bskanks\b/i,
		/\bSkanky\b/i,
		/\bslut\b/i,
		/\bsluts\b/i,
		/\bSlutty\b/i,
		/\bslutz\b/i,
		/\bson-of-a-bitch\b/i,
		/\bsuckme/i,
		/\btit\b/i,
		/\bturd\b/i,
		/\bvagiina\b/i,
		/\bvagina\b/i,
		/\bvajina\b/i,
		/\bvullva\b/i,
		/\bvulva\b/i,
		/\bwhore\b/i,
		/\bxrated\b/i,
		/\bxxx\b/i,
		/\bblowjob\b/i,
		/\barschloch\b/i,
		/\bfuck\b/i,
		/\bfucku\b/i,
		/\bboiolas\b/i,
		/\bbuceta\b/i,
		/\bchink\b/i,
		/\bcipa\b/i,
		/\bclits\b/i,
		/\bdirsa\b/i,
		/\bejakulate\b/i,
		/\bfatass\b/i,
		/\bfcuk\b/i,
		/\bfcuku\b/i,
		/\bhoer\b/i,
		/\bhore\b/i,
		/\bjism\b/i,
		/\bkawk\b/i,
		/\bmasturbate\b/i,
		/\bmasterbat/i,
		/\bmofo\b/i,
		/\bnazi\b/i,
		/\bnigga\b/i,
		/\bnigger\b/i,
		/\bnutsack\b/i,
		/\bpimpis\b/i,
		/\bscrotum\b/i,
		/\bshemale\b/i,
		/\bsmut\b/i,
		/\bteets\b/i,
		/\btits\b/i,
		/\bboobs\b/i,
		/\bteez\b/i,
		/\btestical\b/i,
		/\btesticle\b/i,
		/\bwhoar\b/i,
		/\bdamn\b/i,
		/\bamcik\b/i,
		/\bandskota\b/i,
		/\barse\b/i,
		/\bassrammer\b/i,
		/\bayir\b/i,
		/\bbollock/i,
		/\bbreasts\b/i,
		/\bbutt-pirate\b/i,
		/\bcabron\b/i,
		/\bcazzo\b/i,
		/\bchraa\b/i,
		/\bchuj\b/i,
		/\bcunt/i,
		/\bdaygo\b/i,
		/\bdego\b/i,
		/\bdupa\b/i,
		/\bdziwka\b/i,
		/\bejackulate\b/i,
		/\bEkrem/i,
		/\bEkto\b/i,
		/\benculer\b/i,
		/\bfaen\b/i,
		/\bfanculo\b/i,
		/\bfeces\b/i,
		/\bfeg\b/i,
		/\bFelcher\b/i,
		/\bFlikker\b/i,
		/\bforeskin\b/i,
		/\bFotze\b/i,
		/\bfuk\b/i,
		/\bfutkretzn\b/i,
		/\bguiena\b/i,
		/\bhell\b/i,
		/\bhelvete\b/i,
		/\bhoer/i,
		/\bhonkey\b/i,
		/\bHuevon\b/i,
		/\binjun\b/i,
		/\bkanker/i,
		/\bklootzak\b/i,
		/\bknulle\b/i,
		/\bkuk\b/i,
		/\bkuksuger\b/i,
		/\bkurac\b/i,
		/\bkurwa\b/i,
		/\bkyrpa/i,
		/\blesbo\b/i,
		/\bmamhoon\b/i,
		/\bmasturbat/i,
		/\bmerd\b/i,
		/\bmibun\b/i,
		/\bmoulie\b/i,
		/\bmuie\b/i,
		/\bmulkku\b/i,
		/\bmuschi\b/i,
		/\bnazis\b/i,
		/\bpicka\b/i,
		/\bpiss/i,
		/\bpizda\b/i,
		/\bpoontsee\b/i,
		/\bpoop\b/i,
		/\bpoopy\b/i,
		/\bpooie\b/i,
		/\bporn\b/i,
		/\bpula\b/i,
		/\bpule\b/i,
		/\bputa\b/i,
		/\bputo\b/i,
		/\bqahbeh\b/i,
		/\bqueef/i,
		/\brautenberg\b/i,
		/\bschaffer\b/i,
		/\bscheiss/i,
		/\bschlampe\b/i,
		/\bschmuck\b/i,
		/\bscrew\b/i,
		/\bsharmuta\b/i,
		/\bsharmute\b/i,
		/\bshipal\b/i,
		/\bshiz\b/i,
		/\bskribz\b/i,
		/\bskurwysyn\b/i,
		/\bsphencter\b/i,
		/\bspic\b/i,
		/\bspierdalaj\b/i,
		/\bsplooge\b/i,
		/\bsuka\b/i,
		/\btesticle/i,
		/\btwat\b/i,
		/\bvittu\b/i,
		/\bwanker\b/i,
		/\bwetback/i,
		/\bwichser\b/i,
		/\bwop\b/i,
		/\byed\b/i,
		/\bzabourah/i
	];
	


}
/*
     FILE ARCHIVED ON 23:16:39 Aug 20, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:46:34 Mar 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 54.16
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.108
  RedisCDXSource: 0.679
  esindex: 0.01
  LoadShardBlock: 31.429 (3)
  PetaboxLoader3.datanode: 37.983 (4)
  load_resource: 47.03
  PetaboxLoader3.resolve: 34.106
*/