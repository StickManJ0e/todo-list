(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var i=864e5;function o(e){t(1,arguments);var n=r(e),a=n.getUTCDay(),i=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function u(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var u=o(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var d=o(s);return n.getTime()>=u.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}var s=6048e5;var d={};function l(){return d}function c(e,n){var i,o,u,s,d,c,m,f;t(1,arguments);var h=l(),g=a(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:h.weekStartsOn)&&void 0!==o?o:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),b=v.getUTCDay(),w=(b<g?7:0)+b-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function m(e,n){var i,o,u,s,d,m,f,h;t(1,arguments);var g=r(e),v=g.getUTCFullYear(),b=l(),w=a(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:b.firstWeekContainsDate)&&void 0!==o?o:null===(f=b.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==i?i:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,w),y.setUTCHours(0,0,0,0);var p=c(y,n),k=new Date(0);k.setUTCFullYear(v,0,w),k.setUTCHours(0,0,0,0);var T=c(k,n);return g.getTime()>=p.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}var f=6048e5;function h(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const g=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return h("yy"===e?r%100:r,e.length)},v=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):h(n+1,2)},b=function(t,e){return h(t.getUTCDate(),e.length)},w=function(t,e){return h(t.getUTCHours()%12||12,e.length)},y=function(t,e){return h(t.getUTCHours(),e.length)},p=function(t,e){return h(t.getUTCMinutes(),e.length)},k=function(t,e){return h(t.getUTCSeconds(),e.length)},T=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return h(Math.floor(r*Math.pow(10,n-3)),e.length)};var C={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g(t,e)},Y:function(t,e,n,r){var a=m(t,r),i=a>0?a:1-a;return"YY"===e?h(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):h(i,e.length)},R:function(t,e){return h(u(t),e.length)},u:function(t,e){return h(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return h(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return v(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,i,o){var u=function(e,n){t(1,arguments);var i=r(e),o=c(i,n).getTime()-function(e,n){var r,i,o,u,s,d,f,h;t(1,arguments);var g=l(),v=a(null!==(r=null!==(i=null!==(o=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1),b=m(e,n),w=new Date(0);return w.setUTCFullYear(b,0,v),w.setUTCHours(0,0,0,0),c(w,n)}(i,n).getTime();return Math.round(o/f)+1}(e,o);return"wo"===n?i.ordinalNumber(u,{unit:"week"}):h(u,n.length)},I:function(e,n,a){var i=function(e){t(1,arguments);var n=r(e),a=o(n).getTime()-function(e){t(1,arguments);var n=u(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/s)+1}(e);return"Io"===n?a.ordinalNumber(i,{unit:"week"}):h(i,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/i)+1}(e);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):h(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return h(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return h(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return h(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):h(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k(t,e)},S:function(t,e){return T(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return D(a);case"XXXX":case"XX":return x(a);default:return x(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return D(a);case"xxxx":case"xx":return x(a);default:return x(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+M(a,":");default:return"GMT"+x(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+M(a,":");default:return"GMT"+x(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return h(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return h((r._originalDate||t).getTime(),e.length)}};function M(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+h(i,2)}function D(t,e){return t%60==0?(t>0?"-":"+")+h(Math.abs(t)/60,2):x(t,e)}function x(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+h(Math.floor(a/60),2)+n+h(a%60,2)}const S=C;var P=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},E=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},U={p:E,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return P(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",P(a,e)).replace("{{time}}",E(i,e))}};const A=U;var W=["D","DD"],L=["YY","YYYY"];function Y(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function j(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var N,O={date:j({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:j({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:j({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},F={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function H(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return o=t.valueCallback?t.valueCallback(d):d,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}const Q={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return F[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:H({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:H({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:H({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:H({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:H({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(N={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(N.matchPattern);if(!n)return null;var r=n[0],a=t.match(N.parsePattern);if(!a)return null;var i=N.valueCallback?N.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,B=/^'([^]*?)'?$/,R=/''/g,J=/[a-zA-Z]/;function I(n,i,o){var u,s,d,c,m,f,h,g,v,b,w,y,p,k,T,C,M,D;t(2,arguments);var x=String(i),P=l(),E=null!==(u=null!==(s=null==o?void 0:o.locale)&&void 0!==s?s:P.locale)&&void 0!==u?u:Q,U=a(null!==(d=null!==(c=null!==(m=null!==(f=null==o?void 0:o.firstWeekContainsDate)&&void 0!==f?f:null==o||null===(h=o.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:P.firstWeekContainsDate)&&void 0!==c?c:null===(v=P.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==d?d:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=a(null!==(w=null!==(y=null!==(p=null!==(k=null==o?void 0:o.weekStartsOn)&&void 0!==k?k:null==o||null===(T=o.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==p?p:P.weekStartsOn)&&void 0!==y?y:null===(M=P.locale)||void 0===M||null===(D=M.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==w?w:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var j=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(j))throw new RangeError("Invalid time value");var N=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(j),O=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var i=r(e).getTime(),o=a(n);return new Date(i+o)}(e,-a(n))}(j,N),F={firstWeekContainsDate:U,weekStartsOn:q,locale:E,_originalDate:j};return x.match(X).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,A[e])(t,E.formatLong):t})).join("").match(G).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(B))?r[1].replace(R,"'"):e;var u,s=S[a];if(s)return null!=o&&o.useAdditionalWeekYearTokens||(u=t,-1===L.indexOf(u))||Y(t,i,String(n)),null!=o&&o.useAdditionalDayOfYearTokens||!function(t){return-1!==W.indexOf(t)}(t)||Y(t,i,String(n)),s(O,t,E.localize,F);if(a.match(J))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}console.log("index.js is working");let _,V,K=document.querySelector("#add-task"),$=document.querySelector("body"),Z=[],tt=document.querySelector("#add-project-button"),et=document.querySelector("div#main");function nt(t,e,n,r){let a=document.createElement("input");return a.setAttribute("id",t),a.setAttribute("type",e),a.setAttribute("name",r),a.setAttribute("placeholder",n),a}function rt(...t){t.forEach((t=>{t.setAttribute("required","")}))}function at(t,e,n){let r=document.createElement(t);return r.setAttribute("id",e),n.appendChild(r),r}function it(t,e,n,r){let a=document.createElement(t);return a.classList.add(e),a.textContent=r,n.appendChild(a),a}function ot(t,e,n){let r=document.createElement(t);return r.classList.add(e),n.appendChild(r),r}function ut(t){let e=document.createElement("div");return e.classList.add("input-position"),t.appendChild(e),e}function st(t,e){let n=document.createElement("label");return n.setAttribute("for",e),t.appendChild(n),n}function dt(t,e){let n=ut(t);return st(n,e),n}function lt(){document.querySelector("#add-task-menu").remove()}function ct(){document.querySelector("#add-project-menu").remove()}K.addEventListener("click",(()=>{(function(){let t=at("form","add-task-menu",$);at("button","exit-menu-button",t).addEventListener("click",(()=>{lt(),$.classList.remove("blur")}));let e=nt("task-name","text","Task Name","name"),n=nt("task-description","text","Description","description"),r=function(t,e,n){let r=document.createElement("input");return r.setAttribute("id","task-due-date"),r.setAttribute("type","date"),r.setAttribute("name","date"),r}();dt(t,"task-name").appendChild(e),dt(t,"task-description").appendChild(n);let a=at("div","date-radio-div",t);dt(a,"task-date-input").appendChild(r),function(t,e,...n){let r=at("div","radio-inputs-div",t);n.forEach((t=>{let n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("id",t),n.setAttribute("name",e),n.setAttribute("value",t.toUpperCase()),r.appendChild(n),st(r,e).textContent=t.toUpperCase(),rt(n)}))}(a,"priority","low","medium","high"),function(t){let e=document.createElement("select");e.setAttribute("id","project-selector"),e.setAttribute("name","project"),ut(t).appendChild(e);for(let t=0;t<Z.length;t++){let n=Z[t].getProjectname(),r=document.createElement("option");r.setAttribute("value",n),r.textContent=n,e.appendChild(r)}}(t),rt(e,r),at("button","submit-form-button",t).setAttribute("type","submit"),t.addEventListener("submit",(t=>{t.preventDefault();let e=Object.fromEntries(new FormData(t.target).entries());!function(t,e,n,r,a){let i=mt(t,e,n,r,a),o=Z.findIndex((t=>t.getProjectname()===a));Z[o].taskArray.push(i),0!==o&&Z[0].taskArray.push(i)}(e.name,e.description,e.date,e.priority,e.project),gt(),vt(),lt(),$.classList.remove("blur")}))})(),$.classList.add("blur")}));let mt=(t,e,n,r,a)=>({getTaskName:()=>t,getTaskDescription:()=>e,getTaskDueDate:()=>n,getTaskPriority:()=>r,getTaskProject:()=>a}),ft=t=>({getProjectname:()=>t,taskArray:[]});function ht(){V=document.querySelectorAll(".project"),V.forEach((t=>{t.addEventListener("click",(()=>{let e=Z.findIndex((e=>e.getProjectname()===t.textContent.toLowerCase()));_=Z[e],gt(),vt()}))}))}function gt(){let t=document.querySelector(".tasks-div");null!==t&&t.remove()}function vt(){let t=ot("div","tasks-div",et);for(let e=0;e<_.taskArray.length;e++)bt(t,e)}function bt(t,e){let n=ot("div","task-div",t),r=document.createElement("input");r.classList.add("complete-task-checkbox"),r.setAttribute("type","checkbox"),n.appendChild(r),function(t,e,n){t.addEventListener("change",(()=>{e.remove(),_.taskArray.splice(n,1)}))}(r,n,e),it("div","task-name",n,_.taskArray[e].getTaskName()),it("div","task-due-date",n,I(new Date(_.taskArray[e].getTaskDueDate()),"dd MMM")),it("div","task-priority",n,_.taskArray[e].getTaskPriority()).textContent=_.taskArray[e].getTaskPriority(),it("button","expand-task-button",n,"DETAILS"),function(t){document.querySelectorAll(".expand-task-button").forEach((e=>{e.addEventListener("click",(()=>{!function(t){let e=ot("div","details-div",$);$.classList.add("blur"),at("button","exit-details-button",e).addEventListener("click",(()=>{document.querySelector(".details-div").remove(),$.classList.remove("blur")})),it("div","task-name",e,_.taskArray[t].getTaskName()),(it("div","task-due-date",e,I(new Date(_.taskArray[t].getTaskDueDate()),"dd MMM")),it("div","task-priority",e,_.taskArray[t].getTaskPriority())).textContent=_.taskArray[t].getTaskPriority(),it("div","task-description",e,_.taskArray[t].getTaskDescription())}(t)}))}))}(e)}tt.addEventListener("click",(()=>{!function(){let t=document.createElement("form");t.setAttribute("id","add-project-menu"),$.appendChild(t),at("button","exit-menu-button",t).addEventListener("click",(()=>{ct(),$.classList.remove("blur")}));let e=nt("project-name","text","PROJECT NAME","name");e.setAttribute("required",""),t.appendChild(e),at("button","submit-form-button",t).setAttribute("type","submit"),t.addEventListener("submit",(t=>{t.preventDefault();let e=Object.fromEntries(new FormData(t.target).entries());var n;!function(t){let e=ft(t);Z.push(e)}(e.name.toLowerCase()),n=e.name.toUpperCase(),it("button","project",document.querySelector(".projects"),n),ht(),ct(),$.classList.remove("blur")}))}(),$.classList.add("blur")})),function(){let t=ft("inbox");Z.push(t),_=Z[0],ht()}()})();