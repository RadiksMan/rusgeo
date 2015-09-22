!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,s){this.element=t,this.options=e.extend({},l,s),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var s=e("div.jq-selectbox.opened"),l=e("div.jq-selectbox__search input",s),o=e("div.jq-selectbox__dropdown",s),a=s.find("select").data("_"+i).options;a.onSelectClosed.call(s),l.length&&l.val("").keyup(),o.hide().find("li.sel").addClass("selected"),s.removeClass("focused opened dropup dropdown")}}var i="styler",l={wrapper:"form",idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){var e="",t="",s="",o="";void 0!==i.attr("id")&&""!==i.attr("id")&&(e=' id="'+i.attr("id")+l.idSuffix+'"'),void 0!==i.attr("title")&&""!==i.attr("title")&&(t=' title="'+i.attr("title")+'"'),void 0!==i.attr("class")&&""!==i.attr("class")&&(s=" "+i.attr("class"));var a=i.data();for(var d in a)""!==a[d]&&"_styler"!==d&&(o+=" data-"+d+'="'+a[d]+'"');e+=o,this.id=e,this.title=t,this.classes=s}var i=e(this.element),l=this.options,o=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1,a=navigator.userAgent.match(/Android/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i)?!0:!1;if(i.is(":checkbox")){var d=function(){var s=new t,l=e("<div"+s.id+' class="jq-checkbox'+s.classes+'"'+s.title+'><div class="jq-checkbox__div"></div></div>');i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,o=e("<div"+s.id+' class="jq-radio'+s.classes+'"'+s.title+'><div class="jq-radio__div"></div></div>');i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(o).prependTo(o),o.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),i.is(":checked")&&o.addClass("checked"),i.is(":disabled")&&o.addClass("disabled"),o.click(function(e){e.preventDefault(),o.is(".disabled")||(o.closest(l.wrapper).find('input[name="'+i.attr("name")+'"]').prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(o).length||(o.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){o.is(".disabled")||o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")})};r(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){i.css({position:"absolute",top:0,right:0,width:"100%",height:"100%",opacity:0,margin:0,padding:0});var n=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");(void 0===a||""===a)&&(a=l.fileBrowse);var d=e("<div"+s.id+' class="jq-file'+s.classes+'"'+s.title+' style="display: inline-block; position: relative; overflow: hidden"></div>'),r=e('<div class="jq-file__name">'+o+"</div>").appendTo(d);e('<div class="jq-file__browse">'+a+"</div>").appendTo(d),i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled"),i.on("change.styler",function(){var e=i.val();if(i.is("[multiple]")){e="";var t=i[0].files.length;if(t>0){var s=i.data("number");void 0===s&&(s=l.fileNumber),s=s.replace("%s",t),e=s}}r.text(e.replace(/.+[\\\/]/,"")),""===e?(r.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};n(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),n()})}else if(i.is('input[type="number"]')){var c=function(){var t=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');i.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&t.addClass("disabled");var s,l,o,a=null,d=null;void 0!==i.attr("min")&&(s=i.attr("min")),void 0!==i.attr("max")&&(l=i.attr("max")),o=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var r=function(t){var a,d=i.val();e.isNumeric(d)||(d=0,i.val("0")),t.is(".minus")?(a=parseInt(d,10)-o,o>0&&(a=Math.ceil(a/o)*o)):t.is(".plus")&&(a=parseInt(d,10)+o,o>0&&(a=Math.floor(a/o)*o)),e.isNumeric(s)&&e.isNumeric(l)?a>=s&&l>=a&&i.val(a):e.isNumeric(s)&&!e.isNumeric(l)?a>=s&&i.val(a):!e.isNumeric(s)&&e.isNumeric(l)?l>=a&&i.val(a):i.val(a)};t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var t=e(this);r(t),a=setTimeout(function(){d=setInterval(function(){r(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(a),clearInterval(d)}),i.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))};c(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),c()})}else if(i.is("select")){var h=function(){function d(t){t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(t){var s=null;"mousewheel"==t.type?s=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"==t.type&&(s=40*t.originalEvent.detail),s&&(t.stopPropagation(),t.preventDefault(),e(this).scrollTop(s+e(this).scrollTop()))})}function r(){for(var e=0;e<h.length;e++){var t=h.eq(e),s="",i="",o="",a="",d="",r="",n="",c="",p="",u="disabled",v="selected sel disabled";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i=u),t.is(":selected:disabled")&&(i=v),void 0!==t.attr("id")&&""!==t.attr("id")&&(a=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==h.attr("title")&&(d=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(n=" "+t.attr("class"),p=' data-jqfs-class="'+t.attr("class")+'"');var m=t.data();for(var g in m)""!==m[g]&&(r+=" data-"+g+'="'+m[g]+'"');i+n!==""&&(o=' class="'+i+n+'"'),s="<li"+p+r+o+d+a+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(c=" "+t.parent().attr("class")),s="<li"+p+r+' class="'+i+n+" option"+c+'"'+d+a+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+c+'">'+t.parent().attr("label")+"</li>"+s)),f+=s}}function n(){var a=new t,n="",c=i.data("placeholder"),p=i.data("search"),u=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("z-index"),b=i.data("smart-positioning");void 0===c&&(c=l.selectPlaceholder),(void 0===p||""===p)&&(p=l.selectSearch),(void 0===u||""===u)&&(u=l.selectSearchLimit),(void 0===v||""===v)&&(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),(void 0===g||""===g)&&(g=l.singleSelectzIndex),(void 0===b||""===b)&&(b=l.selectSmartPositioning);var y=e("<div"+a.id+' class="jq-selectbox jqselect'+a.classes+'" style="display: inline-block; position: relative; z-index:'+g+'"><div class="jq-selectbox__select"'+a.title+' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');i.css({margin:0,padding:0}).after(y).prependTo(y);var w=e("div.jq-selectbox__select",y),C=e("div.jq-selectbox__select-text",y),x=h.filter(":selected");r(),p&&(n='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var q=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+n+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+f+"</ul></div>");y.append(q);var _=e("ul",q),j=e("li",q),k=e("input",q),T=e("div.jq-selectbox__not-found",q).hide();j.length<u&&k.parent().hide(),""===i.val()?C.text(c).addClass("placeholder"):C.text(x.text());var S=0,N=0;if(j.each(function(){var t=e(this);t.css({display:"inline-block"}),t.innerWidth()>S&&(S=t.innerWidth(),N=t.width()),t.css({display:""})}),C.is(".placeholder")&&C.width()>S)C.width(C.width());else{var A=y.clone().appendTo("body").width("auto"),I=A.outerWidth();A.remove(),I==y.outerWidth()&&C.width(N)}S>y.width()&&q.width(S),""===h.first().text()&&""!==i.data("placeholder")&&j.first().hide(),i.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var P=y.outerHeight(),D=k.outerHeight(),H=_.css("max-height"),z=j.filter(".selected");z.length<1&&j.first().addClass("selected sel"),void 0===j.data("li-height")&&j.data("li-height",j.outerHeight());var M=q.css("top");if("auto"==q.css("left")&&q.css({left:0}),"auto"==q.css("top")&&q.css({top:P}),q.hide(),z.length&&(h.first().text()!=x.text()&&y.addClass("changed"),y.data("jqfs-class",z.data("jqfs-class")),y.addClass(z.data("jqfs-class"))),i.is(":disabled"))return y.addClass("disabled"),!1;w.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=j.data("li-height"),a=y.offset().top,r=t.height()-P-(a-t.scrollTop()),n=i.data("visible-options");(void 0===n||""===n)&&(n=l.selectVisibleOptions);var c=5*s,f=s*n;n>0&&6>n&&(c=f),0===n&&(f="auto");var p=function(){q.height("auto").css({bottom:"auto",top:M});var e=function(){_.css("max-height",Math.floor((r-20-D)/s)*s)};e(),_.css("max-height",f),"none"!=H&&_.css("max-height",H),r<q.outerHeight()+20&&e()},u=function(){q.height("auto").css({top:"auto",bottom:M});var e=function(){_.css("max-height",Math.floor((a-t.scrollTop()-20-D)/s)*s)};e(),_.css("max-height",f),"none"!=H&&_.css("max-height",H),a-t.scrollTop()-20<q.outerHeight()+20&&e()};b===!0||1===b?r>c+D+20?(p(),y.removeClass("dropup").addClass("dropdown")):(u(),y.removeClass("dropdown").addClass("dropup")):(b===!1||0===b)&&r>c+D+20&&(p(),y.removeClass("dropup").addClass("dropdown")),y.offset().left+q.outerWidth()>t.width()&&q.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:g-1}).removeClass("opened"),y.css({zIndex:g}),q.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),q.show(),y.addClass("opened focused"),l.onSelectOpened.call(y)):(q.hide(),y.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(y)),k.length&&(k.val("").keyup(),T.hide(),k.keyup(function(){var t=e(this).val();j.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===h.first().text()&&""!==i.data("placeholder")&&j.first().hide(),j.filter(":visible").length<1?T.show():T.hide()})),j.filter(".selected").length&&(""===i.val()?_.scrollTop(0):(_.innerHeight()/s%2!==0&&(s/=2),_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()/2+s))),d(_)}}),j.hover(function(){e(this).siblings().removeClass("selected")});var K=j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index();o-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),h.prop("selected",!1).eq(o).prop("selected",!0),K=s,C.text(s),y.data("jqfs-class")&&y.removeClass(y.data("jqfs-class")),y.data("jqfs-class",t.data("jqfs-class")),y.addClass(t.data("jqfs-class")),i.change()}q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y)}),q.mouseout(function(){e("li.sel",q).addClass("selected")}),i.on("change.styler",function(){C.text(h.filter(":selected").text()).removeClass("placeholder"),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),h.first().text()!=j.filter(".selected").text()?y.addClass("changed"):y.removeClass("changed")}).on("focus.styler",function(){y.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){y.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=j.data("li-height");""===i.val()?C.text(c).addClass("placeholder"):C.text(h.filter(":selected").text()),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),(38==e.which||37==e.which||33==e.which||36==e.which)&&(""===i.val()?_.scrollTop(0):_.scrollTop(_.scrollTop()+j.filter(".selected").position().top)),(40==e.which||39==e.which||34==e.which||35==e.which)&&_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()+t),13==e.which&&(e.preventDefault(),q.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),w.click())}),s.registered||(e(document).on("click",s),s.registered=!0)}function c(){var s=new t,l=e("<div"+s.id+' class="jq-select-multiple jqselect'+s.classes+'"'+s.title+' style="display: inline-block; position: relative"></div>');i.css({margin:0,padding:0}).after(l),r(),l.append("<ul>"+f+"</ul>");var o=e("ul",l).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),a=e("li",l).attr("unselectable","on"),n=i.attr("size"),c=o.outerHeight(),p=a.outerHeight();void 0!==n&&n>0?o.css({height:p*n}):o.css({height:4*p}),c>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),i.is(":disabled")?(l.addClass("disabled"),h.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}h.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),h.eq(s).prop("selected",!0)}),i.change()}),h.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];h.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return e.inArray(s,t)>-1}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),c>l.height()&&i.on("keydown.styler",function(e){(38==e.which||37==e.which||33==e.which)&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-p),(40==e.which||39==e.which||34==e.which)&&o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*p)}))}var h=e("option",i),f="";if(i.is("[multiple]")){if(a||o)return;c()}else n()};h(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),h()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest(l.wrapper).find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()});if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});