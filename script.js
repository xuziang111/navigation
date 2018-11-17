!function(){  
document.getElementById("bgAudio").volume = 0.5;

 var a = [  
    ['1','2','3','4','5','6','7','8','9','0'],
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['z','x','c','v','b','n','m'],
    ];    
    var hash = {
    '1':'github.com',
    '2':'baidu.com',
    '3':'acfun.tv',
    '4':'https://4chan.org',
    '5':'gitter.im',
    '6':'https://alpha.wallhaven.cc',
    '7':'https://www.jd.com',
    '8':'v.youku.com',
    '9':'twitter.com',
    '0':'https://saucenao.com',
    'q':'qq.com',
    'w':'weibo.com',
    'e':'exhentai.org',
    'r':'reddit.com',
    't':'taobao.com',
    'y':'youtube.com',
    'u':'uc.cn',
    'i':'iqiyi.com',
    'o':'opera.com',
    'p':'pixiv.net',
    'a':'amazon.co.jp',
    's':'stackoverflow.com',
    'd':'douban.com',
    'f':'facebook.com',
    'g':'google.com',
    'h':'hao123.com',
    'j':'jianshu.com',
    'k':'https://konachan.net',
    'l':'lolimy.club',
    'z':'zhihu.com',
    'x':'xunlei.com',
    'c':'chiphell.com',
    'v':'v2ex.com',
    'b':'bilibili.com',
    'n':'https://nyaa.si',
    'm':'meituan.com',      
    };

    var hashInLocalStorage = JSON.parse(localStorage.getItem('wangzhin'||'null'));
    if(hashInLocalStorage){
	    hash = hashInLocalStorage;
	};

    var index,index2;
    for(index = 0;index<a.length;index++){
      var divn = document.createElement('div');
      var row = a[index];
      kb.appendChild(divn);
      for(index2=0;index2<row.length;index2++){
        var kbdn = document.createElement('kbd');
        divn.appendChild(kbdn);
        var spann = document.createElement('span');
        spann.textContent = row[index2];
        kbdn.appendChild(spann);
	      //var ht = /\w*#?/.exec(/.*\./i.exec(hash[row[index2]]));   
	      kbdn.id = row[index2];
	      var imgn = document.createElement('img');
	      if (hash[row[index2]]){
		if(/https/i.test(hash[row[index2]])){
	          imgn.src = hash[row[index2]] + '/favicon.ico';	 
		}else{
	          imgn.src ='http://' + hash[row[index2]] + '/favicon.ico';
		};
	      }else{
	        imgn.src = './tuer.png';
	      }
	        kbdn.appendChild(imgn);
	        imgn.onerror = function(xxx) {
	        xxx.target.src = './tuer.png';
	      };
	
	      imgn.onclick = function(keyb) {
	        var z = this.parentNode.id;
		      if(/https/i.test(hash[z])){
          window.open(hash[z],'_blank')
         }else{
	        window.open('http://' + hash[z],'_blank');
	 }
	       keyb.stopPropagation();
	      };
	      kbdn.onclick = function(keyb) {
	      var y = keyb['target']['id'];
	      if(/https/i.test(hash[y])){
          window.open(hash[y],'_blank')
         }else{
          var y = keyb['target']['id'];
          window.open('http://' + hash[y],'_blank');
         }
        }; 
        var buttonn = document.createElement('button');
        buttonn.textContent = '编辑';
        kbdn.appendChild(buttonn);
        buttonn.id = row[index2];
        buttonn.onclick = function(btn){
	        var bt2 = btn['target'];		
          var key=  btn['target']['id'];
          var x = prompt("更改网址 格式 例：qq.com\n能打开网址但无法抓取ico可尝试用'https://' + 网址\n键盘上按对应的键即可打开网站",hash[key]);
	        if (x !== null) {	
            hash[key] = x; 
            localStorage.setItem('wangzhix',JSON.stringify(hash));
	        	bt2.previousSibling.src='http://' + x + '/favicon.ico';
	        };
	        btn.stopPropagation();
        };
      };
    };
   document.onkeypress = function (keyb){
     if(hash[keyb.key]){
       if(/https/i.test(hash[keyb.key])){
         window.open(hash[keyb.key],'_blank')
       }else{
         window.open('http://' + hash[keyb.key],'_blank'); 
       }
     }
    };
    }()
