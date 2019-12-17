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
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#F64D6A", icon: "instagram", trget: "https://www.instagram.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#3668ff", icon: "pandora", trget: "https://www.pandora.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#e50914", icon: "netflix", trget: "https://www.netflix.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#18D860", icon: "spotify", trget: "https://www.spotify.com/us/"},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#4FBF87", icon: "hulu", trget: "https://www.hulu.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#ff0000", icon: "youtube", trget: "https://www.youtube.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#00C5F7", icon: "dailymotion", trget: "https://www.dailymotion.com/us"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#F5C518", icon: "imdb", trget: "https://www.imdb.com/"},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#00E59B", icon: "deviantart", trget: "https://www.deviantart.com/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#AF1E23", icon: "redlettermedia", trget: "http://redlettermedia.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#FF5500", icon: "soundcloud", trget: "https://soundcloud.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#F8BA00", icon: "comedycentral", trget: "http://www.cc.com/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#96a8c8", icon: "xkcd", trget: "https://www.xkcd.com/"},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#003078", icon: "pennyarcade", trget: "https://www.penny-arcade.com/comic"},
    //main
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#006A8D", icon: "mercy", trget: "https://www.mymercy.net/#/login"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#949699", icon: "wikipedia", trget: "https://en.wikipedia.org/wiki/Wikipedia"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#DE5833", icon: "duckduckgo", trget: "https://duckduckgo.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#6133B4", icon: "habitica", trget: "https://habitica.com/"},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#0078D4", icon: "onedrive", trget: "https://onedrive.live.com/about/en-us/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#6001D2", icon: "yahoo", trget: "https://www.yahoo.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#20A464", icon: "googledrive", trget: "https://www.google.com/drive/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#00D6FF", icon: "playstore", trget: "https://play.google.com/store?hl=en_US"},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#A4724D", icon: "piratebay", trget: "https://thepiratebay.org/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#2C546B", icon: "busey", trget: "https://www.busey.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#981E32", icon: "umsl", trget: "https://www.umsl.edu/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //creation
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#F48024", icon: "stackoverflow", trget: "https://stackoverflow.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#333333", icon: "github", trget: "https://github.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#577BB4", icon: "whentowork", trget: "https://whentowork.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#90151A", icon: "wolfram", trget: "https://www.wolframalpha.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#4CAF50", icon: "w3schools", trget: "https://www.w3schools.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#24386E", icon: "vitalsource", trget: "https://www.vitalsource.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#5C93CE", icon: "launchcode", trget: "https://www.launchcode.org/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#EB3C03", icon: "office", trget: "https://www.office.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //gaming
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#FF2E00", icon: "gamespot", trget: "https://www.gamespot.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#440044", icon: "discord", trget: "https://discordapp.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#cc00aa", icon: "pcgamingwiki", trget: "https://www.pcgamingwiki.com/wiki/Home"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#D51D29", icon: "ign", trget: "https://www.ign.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#333333", icon: "steam", trget: "https://store.steampowered.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#FAA740", icon: "nexus", trget: "https://www.nexusmods.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000099", icon: "escapistmagazine", trget: "https://www.escapistmagazine.com/v2/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#593E85", icon: "twitch", trget: "https://www.twitch.tv/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#D70252", icon: "polygon", trget: "https://www.polygon.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#E8C75C", icon: "lol", trget: "https://na.leagueoflegends.com/en/"},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //social
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#4A154B", icon: "slack", trget: "https://slack.com/"},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#FF0085", icon: "flickr", trget: "https://www.flickr.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#314358", icon: "tumblr", trget: "https://www.tumblr.com"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#3664A2", icon: "facebook", trget: "https://www.facebook.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#6BD126", icon: "kik", trget: "https://www.kik.com/"},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#F1E200", icon: "snapchat", trget: "https://www.snapchat.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#1B95E0", icon: "twitter", trget: "https://twitter.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#0077B5", icon: "linkedin", trget: "https://www.linkedin.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#00B1F0", icon: "skype", trget: "https://www.skype.com/en/"},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#FA4876", icon: "foursquare", trget: "https://foursquare.com/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#FF4500", icon: "reddit", trget: "https://www.reddit.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#CB2027", icon: "pinterest", trget: "https://www.pinterest.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#2AB200", icon: "whatsapp", trget: "https://www.whatsapp.com/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //news
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#444444", icon: "bbc", trget: "https://www.bbc.com/"},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#EC6E3B", icon: "fivethirtyeight", trget: "https://fivethirtyeight.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#CC0000", icon: "cnn", trget: "https://www.cnn.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#444444", icon: "wired", trget: "https://www.wired.com/"},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#FD9A00", icon: "sporcle", trget: "https://www.sporcle.com/"},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#444444", icon: "washingtonpost", trget: "https://www.washingtonpost.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#006B3A", icon: "onion", trget: "https://www.theonion.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#666666", icon: "nytimes", trget: "https://www.nytimes.com/"},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#CC0000", icon: "espn", trget: "https://www.espn.com/"},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#008272", icon: "bing", trget: "https://www.bing.com/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#FF5722", icon: "blogger", trget: "https://www.blogger.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#034EA2", icon: "weather", trget: "https://weather.com/"},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    //undefined
    {linkname: "a", xcoord: c1, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "b", xcoord: c1, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "c", xcoord: c1, ycoord: r7, color: "#000000", icon: "blank", trget: ""},
    {linkname: "d", xcoord: c2, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "e", xcoord: c2, ycoord: r4, color: "#39538C", icon: "bestbuy", trget: "https://www.bestbuy.com/"},
    {linkname: "f", xcoord: c2, ycoord: r6, color: "#006CB7", icon: "paypal", trget: "https://www.paypal.com/"},
    {linkname: "g", xcoord: c2, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "h", xcoord: c3, ycoord: r1, color: "#000000", icon: "blank", trget: ""},
    {linkname: "i", xcoord: c3, ycoord: r3, color: "#ff3300", icon: "ebay", trget: "https://www.ebay.com/"},
    {linkname: "j", xcoord: c3, ycoord: r7, color: "#ff9900", icon: "amazon", trget: "https://www.amazon.com/"},
    {linkname: "k", xcoord: c3, ycoord: r9, color: "#000000", icon: "blank", trget: ""},
    {linkname: "l", xcoord: c4, ycoord: r2, color: "#000000", icon: "blank", trget: ""},
    {linkname: "m", xcoord: c4, ycoord: r4, color: "#800080", icon: "craigslist", trget: "http://www.craigslist.org/"},
    {linkname: "n", xcoord: c4, ycoord: r6, color: "#000000", icon: "newegg", trget: "https://www.newegg.com/"},
    {linkname: "o", xcoord: c4, ycoord: r8, color: "#000000", icon: "blank", trget: ""},
    {linkname: "p", xcoord: c5, ycoord: r3, color: "#000000", icon: "blank", trget: ""},
    {linkname: "q", xcoord: c5, ycoord: r5, color: "#000000", icon: "blank", trget: ""},
    {linkname: "r", xcoord: c5, ycoord: r7, color: "#000000", icon: "blank", trget: ""}
  ];

  return hexlinks;
}
