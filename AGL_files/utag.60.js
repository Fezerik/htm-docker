//tealium universal tag - utag.60 ut4.0.201808280102, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1,'link':1};u.map={"dc_type":"type","dc_category":"cat"};u.extend=[function(a,b,c,d,e,f,g){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'www.agl.com.au/signup(.*)#connection':'dcm_a001|signup'},{'www.agl.com.au/signup(.*)#energyplan':'dcm_a000|signup'},{'www.agl.com.au/signup(.*)#accountdetails':'dcm_a00|signup'},{'www.agl.com.au/signup(.*)#review':'dcm_a0|signup'},{'www.agl.com.au/get-connected/electricity-gas-plans':'dcm_a008|respl'},{'www.agl.com.au/?$':'dcm_a006|respl'},{'www.agl.com.au/residential/energy-plans/electricity-and-gas-plans/?$':'dcm_a004|switchpl'},{'campaign.agl.com.au/landing/business/small-business/(.*)state=WA':'aglco0|allvisit'},{'campaign.agl.com.au/landing/business/small-business/':'dcm_a00b|business'},{'campaign.agl.com.au/landing/partner/seniors(.*)state=WA':'dcm_a004|wapl'},{'www.campaign.agl.com.au/landing/residential/essentials/?$':'dcm_a003|switchpl'},{'www.agl.com.au/campaigns/1McompWA/flybuys/?$':'dcm_a0|flybuys'},{'www.agl.com.au/campaigns/coolercombo':'dcm_a000|switchpl'},{'www.agl.com.au/campaigns/supersaver/flybuys':'dcm_a00|supersav'},{'www.agl.com.au/aeo/home/energyplans/callback-success':'dcm_a00|mobile'},{'www.agl.com.au/apps/one-minute-move/request-received':'dcm_a0|easymove'},{'www.agl.com.au/business/?$':'dcm_a000|buspl'},{'www.agl.com.au/business/small-business/?$':'dcm_a00|smepl'},{'campaign.agl.com.au/wa/?$':'dcm_a007|respl'},{'campaign.agl.com.au/embed/(.*)campaign=10(.*)completed=yes':'dcm_a00f|button'},{'campaign.agl.com.au/embed/(.*)campaign=7(.*)completed=yes':'dcm_a000|mobile'},{'campaign.agl.com.au/landing/partner/seniors':'dcm_a0|seniorpl'},{'www.agl.com.au/apps/one-minute-move/select-address':'dcm_a00|easymove'},{'www.agl.com.au/get-connected/loyalty/flybuys':'dcm_a00|supersav'},{'campaign.agl.com.au/landing/sponsorship/west-coast':'dcm_a001|wapl'},{'www.agl.com.au/wa-local':'dcm_a002|wapl'},{'www.agl.com.au/move-in-move-on':'dcm_a007|moverspl'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){g=new RegExp(f,'i');if(g.test(d)){b['dc_type_category']=c[e][f];m=true};};if(m)break};if(!m)b['dc_type_category']='aglco0|allvisit';},function(a,b){try{if(1){var dc_default="aglco0|allvisit";var regex=new RegExp("www.agl.com.au/move-in-move-on");if(regex.test(b['dom.url'])&&b['user_state']=="WA")
b['dc_type_category']="dcm_a003|wapl";regex=new RegExp("www.agl.com.au/get-connected/loyalty/flybuys");if(regex.test(b['dom.url'])&&b['user_state']=="WA")
b['dc_type_category']=dc_default;if(isset(b['signup_customerType'])&&(b['page_name']).includes("success")){switch(b['signup_customerType']){case"R":b['dc_type_category']="dcm_a0|resisisu";break;case"B":b['dc_type_category']="dcm_a0|bussisuc";break;}}
utag.DB("====== DC output ======\nURL:\t"+b['dom.url']+"\nCat|Type:\t"+b['dc_type_category']+"\nState:\t"+b['user_state']+"\n====== Tag Fired ======");}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['dc_type_category']!='undefined'&&typeof b['dc_type_category']!='undefined'&&b['dc_type_category']!='')){try{b['dc_type']=b['dc_type_category'].split("|")[1]}catch(e){};try{b['dc_category']=b['dc_type_category'].split("|")[0]}catch(e){}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"qsp_delim":";","kvp_delim":"=","base_url":"","src":"5756313","type":"","cat":"","multicat":"","ord":"","cost":"","qty":0,"total_qty":0,"countertype":"standard","conversioncount":"multi","order_id":"","order_subtotal":"","product_id":[],"product_quantity":[],"product_unit_price":[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];g=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(/^(cat|multicat|type|src|cost|qty|countertype|conversioncount|ord|order_id|order_subtotal|product_id|product_quantity|product_unit_price)$/.test(e[f])){u.data[e[f]]=b[d];}else{u.data[e[f]]=b[d];g.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]))}}}}
u.data.order_id=u.data.order_id||u.data.ord||b._corder||"";u.data.order_subtotal=u.data.cost||u.data.order_subtotal||b._csubtotal||b._ctotal||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if((u.data.qty&&u.data.qty.length>0)||(u.data.product_quantity.length===0&&b._cquan!==undefined)){u.data.product_quantity=u.data.qty||b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.data.base_url='//'+u.data.src+'.fls.doubleclick.net/activityi;src='+u.data.src+';type='+u.data.type+';';if(u.data.multicat===""){u.data.multicat_arr=[u.data.cat];}else{u.data.multicat_arr=u.data.multicat.split(';');}
if(u.data.order_id){if(u.data.conversioncount==="multi"&&u.data.product_quantity.length>0){for(f=0;f<u.data.product_quantity.length;f++){u.data.total_qty+=parseInt(u.data.product_quantity[f]);}
u.data.qty=u.data.total_qty;}else{u.data.qty=1;}
var dc_fl_prd=[];for(var i=0;i<u.data.product_id.length;i++){var prod_num=i+1;dc_fl_prd.push("i"+prod_num+":"+u.data.product_id[i]+"|p"+prod_num+":"+u.data.product_unit_price[i]+"|q"+prod_num+":"+u.data.product_quantity[i])}
u.prd=dc_fl_prd.join('|');if(u.prd){c.push("prd="+u.prd);}
c.push('qty='+(u.data.qty));c.push('cost='+(u.data.order_subtotal));if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id));}else if(u.data.countertype==='standard'){if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(Math.random()*10000000000000));}else if(u.data.countertype==='unique'){if(g.length>0){c.push(g.join(';'));}
c.push('ord=1');c.push('num='+(Math.random()*10000000000000));}else{if(g.length>0){c.push(g.join(';'));}
c.push('ord='+(u.data.order_id?u.data.order_id:window.utag.data['cp.utag_main_ses_id']));}
for(f=0;f<u.data.multicat_arr.length;f++){u.loader({"type":"iframe","src":u.data.base_url+'cat='+u.data.multicat_arr[f]+((c.length>0)?';'+c.join(u.data.qsp_delim):'')+'?',"loc":"body","id":'utag_60_iframe'});}}};utag.o[loader].loader.LOAD(id);}('60','agl.main'));}catch(error){utag.DB(error);}
