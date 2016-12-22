'use strict';

app.factory('UtilService', function($q) {

  var imageCompressScale = 1;
  var imageMaxSize = 400;
  var forbiddenWordsList = [
    "幹你娘","幹你媽","干你妈","王八蛋","他媽的","他妈的","操他媽","操他妈","去你媽","去你妈","婊子","妓女",
    "狗日","雜種","幹你","干你","幹您","干您","贛你","贛您","贛林","林北","恁爸","恁娘","賤人","贱人","日你",
    "賤種","贱种","老母","屁眼","混蛋","渾蛋","混蛋","混帳","混账","操你","雞巴","鸡巴","王八","懶趴",
    "祖媽","白目","白癡","援交","婊","妓","洨","肏","屄","政府","共产党","法轮功","法轮","一党","中共",
    "近平","泽民","锦涛","邓小平","李鹏","上海帮","共匪","北京帮",
    "ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez",
    "asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz",
    "basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe",
    "c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead",
    "cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick",
    "dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix",
    "dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagit",
    "fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks",
    "Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin",
    "g00k","gay","gayboy","gaygirl","gays","gayz","God-damned","h00r","h0ar","h0re","hells","hoar",
    "hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs",
    "knobz","kunt","kunts","kuntz","Lesbian","Lezzian","Lipshits","Lipshitz","masochist","masokist",
    "massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker",
    "Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker",
    "Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker",
    "Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis",
    "orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki",
    "pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis",
    "penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak",
    "Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","queer","queers",
    "queerz","qweers","qweerz","qweir","recktum","rectum","retard","sadist","scank","schlong",
    "screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits",
    "shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee",
    "skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd",
    "va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re",
    "whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole",
    "b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits",
    "cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism",
    "kawk","l3itch","l3i+ch","lesbian","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.",
    "mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t",
    "shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle",
    "titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik",
    "andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron",
    "cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka",
    "ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher",
    "ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gay","gook","guiena",
    "h0r","h4x0r","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike",
    "klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon",
    "masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio",
    "nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda",
    "poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*",
    "rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute",
    "shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*",
    "testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"]
  return {
    urlToBase64: function(url) {
      var q = $q.defer();
      var canvas, context, imageData;
      var img = new Image();
      img.onload = function() {
        canvas = document.createElement('canvas');
        if (img.width > imageMaxSize) {
          imageCompressScale = img.width/imageMaxSize;
        }
        canvas.width = img.width/imageCompressScale;
        canvas.height = img.height/imageCompressScale;
        context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, img.width/imageCompressScale, img.height/imageCompressScale);
        try {
          imageData = canvas.toDataURL('image/png');
          q.resolve(imageData);
        }
        catch(e) {
          q.reject(e.message);
        }
      };
      try {
        img.src = url;
      } catch(e) {
        q.reject(e.message);
      }
      return q.promise;
    },
    cleanSentence: function (sentence) {
      var length = forbiddenWordsList.length
      function replaceWord(string, target){
          var t = "", i;
          for(i=0; i < target.length; i++){
              t += '*';
          }
          return string.replace(new RegExp(target, 'g'), t);
      }
      for (var i = 0; i < length; i++) {
          if (sentence.indexOf(forbiddenWordsList[i]) > -1) {
              sentence = replaceWord(sentence, forbiddenWordsList[i])
          }
      }
      return sentence
    }
  };
});