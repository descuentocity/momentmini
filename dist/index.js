"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var fecha=_interopDefault(require("fecha"));function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var ceil=Math.ceil,floor=Math.floor,_toInteger=function(t){return isNaN(t=+t)?0:(0<t?floor:ceil)(t)},_defined=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},_stringAt=function(a){return function(t,e){var r,o,n=String(_defined(t)),i=_toInteger(e),s=n.length;return i<0||s<=i?a?"":void 0:(r=n.charCodeAt(i))<55296||56319<r||i+1===s||(o=n.charCodeAt(i+1))<56320||57343<o?a?n.charAt(i):r:a?n.slice(i,i+2):o-56320+(r-55296<<10)+65536}},_library=!0,_global=createCommonjsModule(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),_core=createCommonjsModule(function(t){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)}),_core_1=_core.version,_aFunction=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},_ctx=function(o,n,t){if(_aFunction(o),void 0===n)return o;switch(t){case 1:return function(t){return o.call(n,t)};case 2:return function(t,e){return o.call(n,t,e)};case 3:return function(t,e,r){return o.call(n,t,e,r)}}return function(){return o.apply(n,arguments)}},_isObject=function(t){return"object"==typeof t?null!==t:"function"==typeof t},_anObject=function(t){if(!_isObject(t))throw TypeError(t+" is not an object!");return t},_fails=function(t){try{return!!t()}catch(t){return!0}},_descriptors=!_fails(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),document=_global.document,is=_isObject(document)&&_isObject(document.createElement),_domCreate=function(t){return is?document.createElement(t):{}},_ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate("div"),"a",{get:function(){return 7}}).a}),_toPrimitive=function(t,e){if(!_isObject(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!_isObject(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!_isObject(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!_isObject(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")},dP=Object.defineProperty,f=_descriptors?Object.defineProperty:function(t,e,r){if(_anObject(t),e=_toPrimitive(e,!0),_anObject(r),_ie8DomDefine)try{return dP(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t},_objectDp={f:f},_propertyDesc=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},_hide=_descriptors?function(t,e,r){return _objectDp.f(t,e,_propertyDesc(1,r))}:function(t,e,r){return t[e]=r,t},hasOwnProperty={}.hasOwnProperty,_has=function(t,e){return hasOwnProperty.call(t,e)},PROTOTYPE="prototype",$export=function(t,e,r){var o,n,i,s=t&$export.F,a=t&$export.G,c=t&$export.S,u=t&$export.P,l=t&$export.B,f=t&$export.W,_=a?_core:_core[e]||(_core[e]={}),b=_[PROTOTYPE],p=a?_global:c?_global[e]:(_global[e]||{})[PROTOTYPE];for(o in a&&(r=e),r)(n=!s&&p&&void 0!==p[o])&&_has(_,o)||(i=n?p[o]:r[o],_[o]=a&&"function"!=typeof p[o]?r[o]:l&&n?_ctx(i,_global):f&&p[o]==i?function(o){var t=function(t,e,r){if(this instanceof o){switch(arguments.length){case 0:return new o;case 1:return new o(t);case 2:return new o(t,e)}return new o(t,e,r)}return o.apply(this,arguments)};return t[PROTOTYPE]=o[PROTOTYPE],t}(i):u&&"function"==typeof i?_ctx(Function.call,i):i,u&&((_.virtual||(_.virtual={}))[o]=i,t&$export.R&&b&&!b[o]&&_hide(b,o,i)))};$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;var _export=$export,_redefine=_hide,toString={}.toString,_cof=function(t){return toString.call(t).slice(8,-1)},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==_cof(t)?t.split(""):Object(t)},_toIobject=function(t){return _iobject(_defined(t))},min=Math.min,_toLength=function(t){return 0<t?min(_toInteger(t),9007199254740991):0},max=Math.max,min$1=Math.min,_toAbsoluteIndex=function(t,e){return(t=_toInteger(t))<0?max(t+e,0):min$1(t,e)},_arrayIncludes=function(a){return function(t,e,r){var o,n=_toIobject(t),i=_toLength(n.length),s=_toAbsoluteIndex(r,i);if(a&&e!=e){for(;s<i;)if((o=n[s++])!=o)return!0}else for(;s<i;s++)if((a||s in n)&&n[s]===e)return a||s||0;return!a&&-1}},_shared=createCommonjsModule(function(t){var e="__core-js_shared__",r=_global[e]||(_global[e]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:_core.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),id=0,px=Math.random(),_uid=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++id+px).toString(36))},shared=_shared("keys"),_sharedKey=function(t){return shared[t]||(shared[t]=_uid(t))},arrayIndexOf=_arrayIncludes(!1),IE_PROTO=_sharedKey("IE_PROTO"),_objectKeysInternal=function(t,e){var r,o=_toIobject(t),n=0,i=[];for(r in o)r!=IE_PROTO&&_has(o,r)&&i.push(r);for(;e.length>n;)_has(o,r=e[n++])&&(~arrayIndexOf(i,r)||i.push(r));return i},_enumBugKeys="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),_objectKeys=Object.keys||function(t){return _objectKeysInternal(t,_enumBugKeys)},_objectDps=_descriptors?Object.defineProperties:function(t,e){_anObject(t);for(var r,o=_objectKeys(e),n=o.length,i=0;i<n;)_objectDp.f(t,r=o[i++],e[r]);return t},document$1=_global.document,_html=document$1&&document$1.documentElement,IE_PROTO$1=_sharedKey("IE_PROTO"),Empty=function(){},PROTOTYPE$1="prototype",createDict=function(){var t,e=_domCreate("iframe"),r=_enumBugKeys.length;for(e.style.display="none",_html.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),createDict=t.F;r--;)delete createDict[PROTOTYPE$1][_enumBugKeys[r]];return createDict()},_objectCreate=Object.create||function(t,e){var r;return null!==t?(Empty[PROTOTYPE$1]=_anObject(t),r=new Empty,Empty[PROTOTYPE$1]=null,r[IE_PROTO$1]=t):r=createDict(),void 0===e?r:_objectDps(r,e)},_wks=createCommonjsModule(function(t){var e=_shared("wks"),r=_global.Symbol,o="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=o&&r[t]||(o?r:_uid)("Symbol."+t))}).store=e}),def=_objectDp.f,TAG=_wks("toStringTag"),_setToStringTag=function(t,e,r){t&&!_has(t=r?t:t.prototype,TAG)&&def(t,TAG,{configurable:!0,value:e})},IteratorPrototype={};_hide(IteratorPrototype,_wks("iterator"),function(){return this});var _iterCreate=function(t,e,r){t.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,r)}),_setToStringTag(t,e+" Iterator")},_toObject=function(t){return Object(_defined(t))},IE_PROTO$2=_sharedKey("IE_PROTO"),ObjectProto=Object.prototype,_objectGpo=Object.getPrototypeOf||function(t){return t=_toObject(t),_has(t,IE_PROTO$2)?t[IE_PROTO$2]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?ObjectProto:null},ITERATOR=_wks("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",_iterDefine=function(t,e,r,o,n,i,s){_iterCreate(r,e,o);var a,c,u,l=function(t){if(!BUGGY&&t in p)return p[t];switch(t){case KEYS:case VALUES:return function(){return new r(this,t)}}return function(){return new r(this,t)}},f=e+" Iterator",_=n==VALUES,b=!1,p=t.prototype,y=p[ITERATOR]||p[FF_ITERATOR]||n&&p[n],m=y||l(n),d=n?_?l("entries"):m:void 0,O="Array"==e&&p.entries||y;if(O&&(u=_objectGpo(O.call(new t)))!==Object.prototype&&u.next&&_setToStringTag(u,f,!0),_&&y&&y.name!==VALUES&&(b=!0,m=function(){return y.call(this)}),s&&(BUGGY||b||!p[ITERATOR])&&_hide(p,ITERATOR,m),n)if(a={values:_?m:l(VALUES),keys:i?m:l(KEYS),entries:d},s)for(c in a)c in p||_redefine(p,c,a[c]);else _export(_export.P+_export.F*(BUGGY||b),e,a);return a},$at=_stringAt(!0);_iterDefine(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=$at(e,r),this._i+=t.length,{value:t,done:!1})});for(var _iterStep=function(t,e){return{value:e,done:!!t}},es6_array_iterator=_iterDefine(Array,"Array",function(t,e){this._t=_toIobject(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,_iterStep(1)):_iterStep(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),TO_STRING_TAG=_wks("toStringTag"),DOMIterables="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i],Collection=_global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&_hide(proto,TO_STRING_TAG,NAME)}var f$1=_wks,_wksExt={f:f$1},iterator=_wksExt.f("iterator"),iterator$1=iterator,_meta=createCommonjsModule(function(t){var r=_uid("meta"),e=_objectDp.f,o=0,n=Object.isExtensible||function(){return!0},i=!_fails(function(){return n(Object.preventExtensions({}))}),s=function(t){e(t,r,{value:{i:"O"+ ++o,w:{}}})},a=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!_isObject(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!_has(t,r)){if(!n(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!_has(t,r)){if(!n(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return i&&a.NEED&&n(t)&&!_has(t,r)&&s(t),t}}}),_meta_1=_meta.KEY,_meta_2=_meta.NEED,_meta_3=_meta.fastKey,_meta_4=_meta.getWeak,_meta_5=_meta.onFreeze,defineProperty=_objectDp.f,_wksDefine=function(t){var e=_core.Symbol||(_core.Symbol={});"_"==t.charAt(0)||t in e||defineProperty(e,t,{value:_wksExt.f(t)})},f$2=Object.getOwnPropertySymbols,_objectGops={f:f$2},f$3={}.propertyIsEnumerable,_objectPie={f:f$3},_enumKeys=function(t){var e=_objectKeys(t),r=_objectGops.f;if(r)for(var o,n=r(t),i=_objectPie.f,s=0;n.length>s;)i.call(t,o=n[s++])&&e.push(o);return e},_isArray=Array.isArray||function(t){return"Array"==_cof(t)},hiddenKeys=_enumBugKeys.concat("length","prototype"),f$4=Object.getOwnPropertyNames||function(t){return _objectKeysInternal(t,hiddenKeys)},_objectGopn={f:f$4},gOPN=_objectGopn.f,toString$1={}.toString,windowNames="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],getWindowNames=function(t){try{return gOPN(t)}catch(t){return windowNames.slice()}},f$5=function(t){return windowNames&&"[object Window]"==toString$1.call(t)?getWindowNames(t):gOPN(_toIobject(t))},_objectGopnExt={f:f$5},gOPD=Object.getOwnPropertyDescriptor,f$6=_descriptors?gOPD:function(t,e){if(t=_toIobject(t),e=_toPrimitive(e,!0),_ie8DomDefine)try{return gOPD(t,e)}catch(t){}if(_has(t,e))return _propertyDesc(!_objectPie.f.call(t,e),t[e])},_objectGopd={f:f$6},META=_meta.KEY,gOPD$1=_objectGopd.f,dP$1=_objectDp.f,gOPN$1=_objectGopnExt.f,$Symbol=_global.Symbol,$JSON=_global.JSON,_stringify=$JSON&&$JSON.stringify,PROTOTYPE$2="prototype",HIDDEN=_wks("_hidden"),TO_PRIMITIVE=_wks("toPrimitive"),isEnum={}.propertyIsEnumerable,SymbolRegistry=_shared("symbol-registry"),AllSymbols=_shared("symbols"),OPSymbols=_shared("op-symbols"),ObjectProto$1=Object[PROTOTYPE$2],USE_NATIVE="function"==typeof $Symbol,QObject=_global.QObject,setter=!QObject||!QObject[PROTOTYPE$2]||!QObject[PROTOTYPE$2].findChild,setSymbolDesc=_descriptors&&_fails(function(){return 7!=_objectCreate(dP$1({},"a",{get:function(){return dP$1(this,"a",{value:7}).a}})).a})?function(t,e,r){var o=gOPD$1(ObjectProto$1,e);o&&delete ObjectProto$1[e],dP$1(t,e,r),o&&t!==ObjectProto$1&&dP$1(ObjectProto$1,e,o)}:dP$1,wrap=function(t){var e=AllSymbols[t]=_objectCreate($Symbol[PROTOTYPE$2]);return e._k=t,e},isSymbol=USE_NATIVE&&"symbol"==typeof $Symbol.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $Symbol},$defineProperty=function(t,e,r){return t===ObjectProto$1&&$defineProperty(OPSymbols,e,r),_anObject(t),e=_toPrimitive(e,!0),_anObject(r),_has(AllSymbols,e)?(r.enumerable?(_has(t,HIDDEN)&&t[HIDDEN][e]&&(t[HIDDEN][e]=!1),r=_objectCreate(r,{enumerable:_propertyDesc(0,!1)})):(_has(t,HIDDEN)||dP$1(t,HIDDEN,_propertyDesc(1,{})),t[HIDDEN][e]=!0),setSymbolDesc(t,e,r)):dP$1(t,e,r)},$defineProperties=function(t,e){_anObject(t);for(var r,o=_enumKeys(e=_toIobject(e)),n=0,i=o.length;n<i;)$defineProperty(t,r=o[n++],e[r]);return t},$create=function(t,e){return void 0===e?_objectCreate(t):$defineProperties(_objectCreate(t),e)},$propertyIsEnumerable=function(t){var e=isEnum.call(this,t=_toPrimitive(t,!0));return!(this===ObjectProto$1&&_has(AllSymbols,t)&&!_has(OPSymbols,t))&&(!(e||!_has(this,t)||!_has(AllSymbols,t)||_has(this,HIDDEN)&&this[HIDDEN][t])||e)},$getOwnPropertyDescriptor=function(t,e){if(t=_toIobject(t),e=_toPrimitive(e,!0),t!==ObjectProto$1||!_has(AllSymbols,e)||_has(OPSymbols,e)){var r=gOPD$1(t,e);return!r||!_has(AllSymbols,e)||_has(t,HIDDEN)&&t[HIDDEN][e]||(r.enumerable=!0),r}},$getOwnPropertyNames=function(t){for(var e,r=gOPN$1(_toIobject(t)),o=[],n=0;r.length>n;)_has(AllSymbols,e=r[n++])||e==HIDDEN||e==META||o.push(e);return o},$getOwnPropertySymbols=function(t){for(var e,r=t===ObjectProto$1,o=gOPN$1(r?OPSymbols:_toIobject(t)),n=[],i=0;o.length>i;)!_has(AllSymbols,e=o[i++])||r&&!_has(ObjectProto$1,e)||n.push(AllSymbols[e]);return n};USE_NATIVE||(_redefine(($Symbol=function(){if(this instanceof $Symbol)throw TypeError("Symbol is not a constructor!");var e=_uid(0<arguments.length?arguments[0]:void 0),r=function(t){this===ObjectProto$1&&r.call(OPSymbols,t),_has(this,HIDDEN)&&_has(this[HIDDEN],e)&&(this[HIDDEN][e]=!1),setSymbolDesc(this,e,_propertyDesc(1,t))};return _descriptors&&setter&&setSymbolDesc(ObjectProto$1,e,{configurable:!0,set:r}),wrap(e)})[PROTOTYPE$2],"toString",function(){return this._k}),_objectGopd.f=$getOwnPropertyDescriptor,_objectDp.f=$defineProperty,_objectGopn.f=_objectGopnExt.f=$getOwnPropertyNames,_objectPie.f=$propertyIsEnumerable,_objectGops.f=$getOwnPropertySymbols,_descriptors&&!_library&&_redefine(ObjectProto$1,"propertyIsEnumerable",$propertyIsEnumerable,!0),_wksExt.f=function(t){return wrap(_wks(t))}),_export(_export.G+_export.W+_export.F*!USE_NATIVE,{Symbol:$Symbol});for(var es6Symbols="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),j=0;es6Symbols.length>j;)_wks(es6Symbols[j++]);for(var wellKnownSymbols=_objectKeys(_wks.store),k=0;wellKnownSymbols.length>k;)_wksDefine(wellKnownSymbols[k++]);_export(_export.S+_export.F*!USE_NATIVE,"Symbol",{for:function(t){return _has(SymbolRegistry,t+="")?SymbolRegistry[t]:SymbolRegistry[t]=$Symbol(t)},keyFor:function(t){if(!isSymbol(t))throw TypeError(t+" is not a symbol!");for(var e in SymbolRegistry)if(SymbolRegistry[e]===t)return e},useSetter:function(){setter=!0},useSimple:function(){setter=!1}}),_export(_export.S+_export.F*!USE_NATIVE,"Object",{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols}),$JSON&&_export(_export.S+_export.F*(!USE_NATIVE||_fails(function(){var t=$Symbol();return"[null]"!=_stringify([t])||"{}"!=_stringify({a:t})||"{}"!=_stringify(Object(t))})),"JSON",{stringify:function(t){for(var e,r,o=[t],n=1;arguments.length>n;)o.push(arguments[n++]);if(r=e=o[1],(_isObject(e)||void 0!==t)&&!isSymbol(t))return _isArray(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!isSymbol(e))return e}),o[1]=e,_stringify.apply($JSON,o)}}),$Symbol[PROTOTYPE$2][TO_PRIMITIVE]||_hide($Symbol[PROTOTYPE$2],TO_PRIMITIVE,$Symbol[PROTOTYPE$2].valueOf),_setToStringTag($Symbol,"Symbol"),_setToStringTag(Math,"Math",!0),_setToStringTag(_global.JSON,"JSON",!0),_wksDefine("asyncIterator"),_wksDefine("observable");var symbol=_core.Symbol,symbol$1=symbol,_typeof_1=createCommonjsModule(function(e){function r(t){return(r="function"==typeof symbol$1&&"symbol"==typeof iterator$1?function(t){return typeof t}:function(t){return t&&"function"==typeof symbol$1&&t.constructor===symbol$1&&t!==symbol$1.prototype?"symbol":typeof t})(t)}function o(t){return"function"==typeof symbol$1&&"symbol"===r(iterator$1)?e.exports=o=function(t){return r(t)}:e.exports=o=function(t){return t&&"function"==typeof symbol$1&&t.constructor===symbol$1&&t!==symbol$1.prototype?"symbol":r(t)},o(t)}e.exports=o});fecha.i18n={dayNamesShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],amPm:["am","pm"],DoFn:function(t){return["","ero","do","ero"][parseInt(t.toString().slice(0,-1),10)]||""}};var timeStrategyAdd={seconds:function(t,e){return t.setSeconds(t.getSeconds()+e)},minutes:function(t,e){return t.setMinutes(t.getMinutes()+e)},hours:function(t,e){return t.setHours(t.getHours()+e)},days:function(t,e){return t.setDate(t.getDate()+e)},months:function(t,e){return t.setMonth(t.getMonth()+e)},years:function(t,e){return t.setFullYear(t.getFullYear()+e)}};function buildDate(t){var e={format:function(t){return!!this.isValid()&&fecha.format(this._date.valueOf(),t)},isValid:function(){return!1!==this._date},diff:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:momentMini(),e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"days",r=t.valueOf(),o=this._date.valueOf(),n=Math.abs(o-r),i={week:6048e5,days:864e5,hour:36e5,minutes:6e4,seconds:1e3},s=i[e]||i.days;return Math.floor(n/s)},isBefore:function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:momentMini()).valueOf();return this._date.valueOf()<t},isAfter:function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:momentMini()).valueOf()<this._date.valueOf()},isBetween:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:momentMini(),e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:momentMini(),r=this._date.valueOf(),o=t.valueOf(),n=e.valueOf();return o<=r&&r<=n},add:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"days";return this.isValid()&&timeStrategyAdd[e]&&(timeStrategyAdd[e](this._date,t),this.numberDate=this._date.valueOf()),this},subtract:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"days";return this.add(-1*t,e)},isSame:function(t,e){return e?momentMini(t)[e]()===this[e]():momentMini(t).toNumber()===this.toNumber()},toString:function(){return this.toNumber().toString()},toNumber:function(){return this.isValid()?this.numberDate:NaN},month:function(){return this._date.getMonth()},day:function(){return this._date.getDay()},date:function(){return this._date.getDate()},getDateInt:function(){return this.isValid()?parseInt(this.format("YYYYMMDD"),10):NaN},valueOf:function(){return this.numberDate}};return!1===t||"Invalid Date"===t.toString()?Object.assign(e,{_date:!1,numberDate:!1}):Object.assign(e,{_date:t,numberDate:+t})}function momentMini(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return!1===e?buildDate(!1):null===e?buildDate(new Date):t&&t instanceof Array?buildDate(t.find(function(t){return fecha.parse(e,t.replace("[T]","T"))})):t?buildDate(fecha.parse((e||"").toString(),t.replace("[T]","T"))):"[object Date]"===Object.prototype.toString.call(e)?buildDate(e):"object"===_typeof_1(e)?buildDate(new Date(e.valueOf())):buildDate("number"==typeof e?new Date(1e3*e):new Date)}module.exports=momentMini;
