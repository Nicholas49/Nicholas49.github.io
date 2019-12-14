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
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#3668ff", icon: "pandora", trget: "https://www.pandora.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#e50914", icon: "netflix", trget: "https://www.netflix.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#ff0000", icon: "youtube", trget: "https://www.youtube.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#00C5F7", icon: "dailymotion", trget: "https://www.dailymotion.com/us"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#AF1E23", icon: "redlettermedia", trget: "http://redlettermedia.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#FF5500", icon: "soundcloud", trget: "https://soundcloud.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#F8BA00", icon: "comedycentral", trget: "http://www.cc.com/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#96a8c8", icon: "xkcd", trget: "https://www.xkcd.com/"},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#003078", icon: "pennyarcade", trget: "https://www.penny-arcade.com/comic"},
    //main
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#6001D2", icon: "yahoo", trget: "https://www.yahoo.com/"},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#6133B4", icon: "habitica", trget: "https://habitica.com/"},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#006A8D", icon: "mercy", trget: "https://www.mymercy.net/#/login"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#949699", icon: "wikipedia", trget: "https://en.wikipedia.org/wiki/Wikipedia"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#DE5833", icon: "duckduckgo", trget: "https://duckduckgo.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#ff9900", icon: "amazon", trget: "https://www.amazon.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#FF4500", icon: "reddit", trget: "https://www.reddit.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#20A464", icon: "googledrive", trget: "https://www.google.com/drive/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#2C546B", icon: "busey", trget: "https://www.busey.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#981E32", icon: "umsl", trget: "https://www.umsl.edu/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#A4724D", icon: "piratebay", trget: "https://thepiratebay.org/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#00D6FF", icon: "playstore", trget: "https://play.google.com/store?hl=en_US"},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#0078D4", icon: "onedrive", trget: "https://onedrive.live.com/about/en-us/"},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //creation
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#F48024", icon: "stackoverflow", trget: "https://stackoverflow.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#333333", icon: "github", trget: "https://github.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#577BB4", icon: "whentowork", trget: "https://whentowork.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#4CAF50", icon: "w3schools", trget: "https://www.w3schools.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#24386E", icon: "vitalsource", trget: "https://www.vitalsource.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#5C93CE", icon: "launchcode", trget: "https://www.launchcode.org/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "blank", trget: ""},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
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
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#593E85", icon: "twitch", trget: "https://www.twitch.tv/"},
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
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#314358", icon: "tumblr", trget: "https://www.tumblr.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#3664A2", icon: "facebook", trget: "https://www.facebook.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#556DB3", icon: "pcgamingwiki", trget: "https://www.pcgamingwiki.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#0077B5", icon: "linkedin", trget: "https://www.linkedin.com/"},
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
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#EC6E3B", icon: "fivethirtyeight", trget: "https://fivethirtyeight.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#CC0000", icon: "cnn", trget: "https://www.cnn.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#444444", icon: "washingtonpost", trget: "https://www.washingtonpost.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#006B3A", icon: "onion", trget: "https://www.theonion.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#008272", icon: "bing", trget: "https://www.bing.com/"},
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
