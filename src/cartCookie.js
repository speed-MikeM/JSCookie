var Cookie = {
  cookieList: {},
  expiryDays: 30,
  overwriteIfExists: true,
  load: function(){
    var tmpCookies = document.cookie;

    tmpCookies = tmpCookies.split(";");
    tmpCookies.forEach(function(item, index){
      var tmpCookie = item.split("=");
      tmpCookie[0] = decodeURIComponent(tmpCookie[0]);
      tmpCookie[1] = decodeURIComponent(tmpCookie[1]);
      if(tmpCookie[0].substr(0, 1) == " "){
        tmpCookie[0] = tmpCookie[0].substr(1);
      }

      /* try parsing to json */
      try{
        tmpCookie[1] = JSON.parse(tmpCookie[1]);
      }catch(e){ }

      Cookie.cookieList[tmpCookie[0]] = tmpCookie[1];
      //this.cookies[] = [tmpCookie[0] => tmpCookie[1]];
    });
    //console.log(this.cookieList);
  },
  get: function(name){
    var cookieName = encodeURIComponent(name);
    if(Cookie.cookieList[name] != undefined){
        return Cookie.cookieList[name];
    }else{
      console.warn("getCookie() failed! The cookie '" + name + "' ('" + cookieName + "') does not exists!")
      return undefined;
    }
  },
  set: function(name, content, path = "/", overwrite = null){
    if(typeof overwrite != typeof true){
      overwrite = Cookie.overwriteIfExists;
    }
    var cookieName = encodeURIComponent(name)
    var cookieContent = encodeURIComponent(content)
    if(Cookie.cookieList[name] == undefined || overwrite === true){
      Cookie.cookieList[name] = cookieContent;
    }else{
      cookieContent = Cookie.cookieList[name] + cookieContent;
    }

    var d = new Date();
    d.setTime(d.getTime() + (Cookie.expiryDays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    //console.warn(document.cookie);
    document.cookie = cookieName + "=" + cookieContent + ";" + expires + ";path=" + path;
    //console.log(document.cookie);
  },
  remove: function(name){
    var cookieName = encodeURIComponent(name);
    if(Cookie.cookieList[name] != undefined){
        delete Cookie.cookieList[name];
    }else{
      console.warn("removeCookie() failed! The cookie '" + name + "' ('" + cookieName + "') does not exists in cookieList!")
    }

    var d = new Date();
    d.setTime(d.getTime() - (1*24*60*60*1000));
    var expires = "expires=" + d.toGMTString(); //expiry is now set to yesterday
    //console.warn(document.cookie);
    document.cookie = cookieName + "= NULL;" + expires + ";path=/";
  }

}
