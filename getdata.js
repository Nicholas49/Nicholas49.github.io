function geticondata(){

  var hspace = 11;

  var c1 = -2 * hspace;
  var c2 = -1 * hspace;
  var c3 = 0;
  var c4 = hspace;
  var c5 = 2 * hspace;

  var vspace = 6.4;

  var r1 = -4 * vspace;
  var r2 = -3 * vspace;
  var r3 = -2 * vspace;
  var r4 = -1 * vspace;
  var r5 = 0;
  var r6 = vspace;
  var r7 = 2 * vspace;
  var r8 = 3 * vspace;
  var r9 = 4 * vspace;

  var hexlinks = [
    //media
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#3366aa", icon: "pandora", trget: "https://www.pandora.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#880000", icon: "netflix", trget: "https://www.netflix.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#990000", icon: "youtube", trget: "https://www.youtube.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#5588ff", icon: "dailymotion", trget: "https://www.dailymotion.com/us"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#000044", icon: "redlettermedia", trget: "http://redlettermedia.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#ffaa00", icon: "soundcloud", trget: "https://soundcloud.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#ff9999", icon: "comedycentral", trget: "http://www.cc.com/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#888888", icon: "xkcd", trget: "https://www.xkcd.com/"},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#440000", icon: "pennyarcade", trget: "https://www.penny-arcade.com/comic"},
    //main
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#880077", icon: "habitica", trget: "https://habitica.com/"},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#229944", icon: "mercy", trget: "https://www.mymercy.net/#/login"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#999999", icon: "wikipedia", trget: "https://en.wikipedia.org/wiki/Wikipedia"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#ffbb77", icon: "duckduckgo", trget: "https://duckduckgo.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#dddd00", icon: "amazon", trget: "https://www.amazon.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#ff8800", icon: "reddit", trget: "https://www.reddit.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#11dd11", icon: "googledrive", trget: "https://www.google.com/drive/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#2222ee", icon: "busey", trget: "https://www.busey.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#880000", icon: "umsl", trget: "https://www.umsl.edu/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#222222", icon: "piratebay", trget: "https://thepiratebay.org/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#999999", icon: "playstore", trget: "https://play.google.com/store?hl=en_US"},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#111199", icon: "onedrive", trget: "https://onedrive.live.com/about/en-us/"},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //creation
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#33ee33", icon: "w3schools", trget: "https://www.w3schools.com/"},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#1111cc", icon: "whentowork", trget: "https://whentowork.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#eeaa00", icon: "vitalsource", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#8888ff", icon: "launchcode", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //gaming
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#440044", icon: "discord", trget: "https://discordapp.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#bbbb22", icon: "newegg", trget: "https://www.newegg.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#333333", icon: "steam", trget: "https://store.steampowered.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#ffff44", icon: "nexus", trget: "https://www.nexusmods.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#cc00aa", icon: "pcgamingwiki", trget: "https://www.pcgamingwiki.com/wiki/Home"},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000099", icon: "escapistmagazine", trget: "https://www.escapistmagazine.com/v2/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //social
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#ff8888", icon: "tumblr", trget: "https://www.tumblr.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#00dddd", icon: "facebook", trget: "https://www.facebook.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //news
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#ff8800", icon: "fivethirtyeight", trget: "https://fivethirtyeight.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#ff0000", icon: "cnn", trget: "https://www.cnn.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#555555", icon: "washingtonpost", trget: "https://www.washingtonpost.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#00aa00", icon: "onion", trget: "https://www.theonion.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#44ffaa", icon: "bing", trget: "https://www.bing.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //undefined
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#000000", icon: "blank", trget: ""},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""}
  ];

  return hexlinks;
}
