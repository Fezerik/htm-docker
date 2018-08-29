window.lpTag=window.lpTag||{},lpTag.taglets=lpTag.taglets||{},lpTag.taglets.lightbox=function(){function a(){var a={css:j},b=lpTag.taglets.lpJsonToDom.convert({containers:a})[0];return b.className=b.className+" LPMlightbox",lpTag.taglets.utils.appendToPage(b),b.id}function b(){var a=lpTag.taglets.utils.geObjById(i);if("undefined"!=typeof a&&null!=a)try{a.parentNode.removeChild(a)}catch(b){a.style.display="none"}}function c(){var a=lpTag.taglets.utils.geObjById(i),b={name:"opacity",targetVal:.7};lpTag.taglets.lpAnimate.animate(a,b,{easing:"easeOutQuart",duration:1e3})}function d(a){var b=lpTag.taglets.utils.geObjById(i),c={name:"opacity",targetVal:0};lpTag.taglets.lpAnimate.animate(b,c,{easing:"easeOutQuart",duration:1e3,callback:a})}function e(){i=a(),c()}function f(){d(function(){b()})}var g="1.3",h="lightbox",i="",j={backgroundColor:"#000000",backgroundImage:"",opacity:0,filter:"alpha(opacity=0)",position:"fixed",top:0,left:0,bottom:0,right:0,zIndex:107108};return{_V:g,name:h,init:function(){},show:e,remove:f}},window.lpTag=window.lpTag||{},lpTag.taglets=lpTag.taglets||{},function(){function a(a,b){this.start(a,b)}function b(){function b(){this.mainContainer.innerHTML=this.activeState.html;var a,b=this.mainContainer.querySelectorAll('[data-LP-event="click"]'),c=this.mainContainer.querySelectorAll('[data-LP-event="close"]');for(a=0;a<b.length;a++)this.setEngagementClickEvent(b[a],this.offerClick,this);if(this.engData.engagementType!==k)for(a=0;a<c.length;a++)this.setCloseEvents(c[a]);this.showOffer()}function c(a){var b,c=/(?:img[^>]+src=["|'])([^["|']+)(?:["|'])/gim,e=/(?:background-image:[^)]url\()([^\)]+)(?:\))/gim,f=/^["|']|["|']$/g;b=d(c,a),Array.prototype.push.apply(b,d(e,a));for(var g=0;g<b.length;g++)b[g]=b[g].replace(f,"");return b}function d(a,b){var c,d=[];do c=a.exec(b),c&&c[1]&&c[1].length>0&&d.push(c[1]);while(null!==c);return d}function e(a,b,c){var d={top:{top:0,bottom:"auto",marginTop:"auto"},middle:{top:"50%",bottom:"auto",marginTop:0},bottom:{top:"auto",bottom:0,marginTop:"auto"},custom:{top:parseInt(b.top,10),bottom:"auto",marginTop:"auto"}},e={left:{left:0,right:"auto",marginLeft:"auto"},center:{left:"50%",right:"auto",marginLeft:0},right:{left:"auto",right:0,marginLeft:"auto"},custom:{left:parseInt(b.left,10),right:"auto",marginLeft:"auto"}};a.position="fixed",i.extendObj(a,d[c.vertical]),i.extendObj(a,e[c.horizontal])}function f(a){"0px"===a.style.marginTop&&(a.style.marginTop=-parseInt(a.offsetHeight/2,10)+"px"),"0px"===a.style.marginLeft&&(a.style.marginLeft=-parseInt(a.offsetWidth/2,10)+"px")}var g=a,h="prototype",i=lpTag.taglets.utils,j=1,k=5,l=1;"undefined"!=typeof lpTag.taglets.baseUIOffer&&g[h].extended!==!0&&(g[h]=lpTag.taglets.baseUIOffer.createInstance(),g[h].extended=!0,g[h].constructor=g,g[h].start=function(a,b){this.init(a,b),this.setParentContainer(),this.setConfig(b),this.run()},g[h].setParentContainer=function(){this.debugLog("in setParentContainer.."),this.parentContainer=null,-1!==this.engData.zoneId&&(lpTag.taglets.scraper?this.parentContainer=lpTag.taglets.scraper.getElmId(this.engData.zoneId)||null:this.parentContainer=document.getElementById(this.engData.zoneId))},g[h].setConfig=function(a){this.setEngagementConf(a),this.conf.useLightBox=a.effects&&a.effects.useLightBox},g[h].closeOffer=function(a){this.offerClose(),i.stopEventBubble(a.htmlEvent)},g[h].createOffer=function(){this.debugLog("in createOffer..");var a=this.getOfferContainer();a&&this.appendToPage(this.setupOffer,a.containerDom,a.parentDom)},g[h].setupOffer=function(a){this.containerId=a,this.mainContainer=this.getObj(this.containerId),this.conf.renderingType===l?this.buildHtmlOverlay(this.mainContainer):(this.buildJsonOverlay(this.mainContainer),this.showOffer())},g[h].getOfferContainer=function(){this.debugLog("in getOfferContainer..");var a={},b=this.getContainerDom();return"undefined"==typeof b?(this.errorLog("Error creating offer container"),a=null):(a.parentDom=this.parentContainer?document.getElementById(this.parentContainer):null,a.containerDom=b),a},g[h].getContainerDom=function(){var a={css:this.getContainerCss()};return a.engagementType="LPM"+this.getEngagementTypeName(this.conf.type),a.isClickable=!0,this.convertJsonToDom({containers:a})[0]},g[h].getContainerCss=function(){this.debugLog("in getContainerConf..");var a=this.extractCssProps(this.activeState,["background","border"]);return a.display="none",a.margin="1px",null!==this.parentContainer?(a.position="relative",a.top=0,a.left=0):(a.zIndex=this.conf.zIndex,e(a,this.conf.position,this.location)),a},g[h].buildHtmlOverlay=function(){this.debugLog("in buildCustomOffer.."),this.preloadImages(c(this.activeState.html),b,this.onError)},g[h].buildJsonOverlay=function(){this.debugLog("in attachEvents.."),this.conf&&this.conf.accessible&&this.mainContainer?(this.createAccessibleContainer(this.mainContainer),this.addElements(this.mainContainer.firstChild,this.activeState.elements),this.repositionCloseBtn(this.mainContainer),this.setEngagementClickEvent(this.mainContainer.firstChild,this.offerClick,this)):(this.addElements(this.mainContainer,this.activeState.elements),this.setEngagementClickEvent(this.mainContainer,this.offerClick,this))},g[h].showOffer=function(){this.debugLog("in showOffer.."),this.conf.useLightBox&&(this.lightbox=new lpTag.taglets.lightbox,this.lightbox.show({zIndex:this.conf.zIndex-1})),this.show(),this.onImpression(),this.setTimeout(this.offerTimeout),null===this.parentContainer&&f(this.mainContainer)},g[h].cleanupOffer=function(a){this.debugLog("in cleanupOffer.."),i.clearTimeout(this.offerTimeoutId),this.conf.useLightBox&&this.lightbox.remove(),this.remove(a)},g[h].offerClick=function(){this.click(),this.engData.engagementType===j&&this.cleanupOffer()},g[h].offerClose=function(a){a=a||{},a.silent||this.onClose(this.offerId),this.cleanupOffer(a)},g[h].offerTimeout=function(){this.onTimeout(this.offerId),this.cleanupOffer()})}lpTag.taglets.overlay=function(){function c(){}function d(c,d){return 1===d.type&&(d.accessible=!0),b(),new a(c,d)}var e="0.1",f="overlay";return{v:e,name:f,init:c,createInstance:d}}()}();