		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i)? true:false;
			},
			iOS : function(){
				return navigator.userAgent.match(/iPhone|iPad|iPod/i)? true:false;
			},	
			Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i) ? true : false;
            }
        };
		var isPlatform = {
			Android: function() {
				return navigator.appVersion.match(/Android/i) ? true : false;
			},
			iOS: function() {
                    return navigator.appVersion.match(/iPhone|iPod/i) ? true : false;
             },
             Windows: function() {
                    return navigator.appVersion.match(/Windows NT/i) ? true : false;
             }
		};

        function loadCSS() {
            var css = document.createElement("link");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("type", "text/css");
            if (isMobile.iOS() && isPlatform.iOS()) {
                css.setAttribute("href", "css/iphone.css");
            }
            else if (isMobile.Android() && isPlatform.Android()) {
                css.setAttribute("href", "css/android.css");
            }
            if (css.hasAttribute("href")) {
                document.getElementsByTagName("head")[0].appendChild(css)
            }
        }

        loadCSS();
