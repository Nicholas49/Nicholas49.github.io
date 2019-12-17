var commands = [
    {command: 'd', url: 'https://duckduckgo.com', search: '/?q='},
    {command: 'r', url: 'https://www.reddit.com', search: '/r/'},
    {command: 'y', url: 'https://www.youtube.com', search: '/results?search_query='},
    {command: 'a', url: 'https://smile.amazon.com', search: '/s/?field-keywords='},
    {command: 'w', url: 'https://www.wikipedia.org', search: '/w/index.php?title=Special:Search&search='},
    {command: 'wa', url: 'https://www.wolframalpha.com', search: '/input/?i='},
    {command: 'imdb', url: 'https://www.imdb.com', search: '/find?s=all&q='},
    {command: 'img', url: 'https://www.google.com', search: '/search?tbm=isch&q='},
    {command: 'u', url: '', search: ''}];

var defaultSettings = {
  defaultCommand: {
    command: 'd',
    url: 'https://duckduckgo.com',
    search: '/?q='
  },
  alwaysNewTab: false,
  color: "#111"
};


  function loadpage(){

    var red, green, blue;

    var a = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var c = Math.floor(Math.random() * 255);

    var mix = Math.floor(Math.random() * 3);

    var ab = a + b;
    var abc = ab + c;

    if(abc > 510){
      c = 510 - ab;
    }
    if(abc < 128){
      c = 128 - ab;
    }

    var red = a;
    var green = b;
    var blue = c;

    if(mix = 0){
      red = c;
      green = a;
      blue = b;
    }
    if(mix = 1){
      red = b;
      green = a;
      blue = c;
    }


    hexes = document.getElementsByClassName("hexbox");
    for (i = 0; i < hexes.length; i++) {
      hexes[i].style.height = "10vmin";
    }

    generate();

  puffs = document.getElementsByClassName("stationary");
    for (i = 0; i < puffs.length; i++) {
      puffs[i].parentNode.style.backgroundColor = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";
    }
  }

  function xpand(caller) {

    var already;
    var parentbox = caller.parentNode.parentNode;

    if(parentbox.style.height === "60vmin"){
      already = true;
    }

    hexes = document.getElementsByClassName("hexbox");
    for (i = 0; i < hexes.length; i++) {
      hexes[i].style.zIndex = "0";
      hexes[i].style.height = "10vmin";
    }

    parentbox.style.zIndex = "1";

    if(!already){
      parentbox.style.height = "60vmin";
    }
  }

  function generate(){

    var caticons = [
      "media",
      "net",
      "pencil",
      "gaming",
      "social",
      "news",
      "commerce"
    ];

    var hexlinks = geticondata();

    stations = document.getElementsByClassName('stationary');
    for (i = 0; i < stations.length; i++){
      var innercontent = "";

      innercontent += "<img class='icon' src='icons/" + caticons[i] + ".svg'/>";
      for (j = 0; j < 18; j++){
        innercontent += "<a href='" + hexlinks[j].trget + "'><div class='ahexbox'><div><div onmouseover=\"setr(this, this.title)\" onmouseout=\"unsetr(this)\"></div></div></div></a>";
      }
      stations[i].innerHTML = innercontent;
    }

    innerhexes = document.getElementsByClassName('ahexbox');
    for (i = 0; i < innerhexes.length; i++){
      innerhexes[i].style.top = hexlinks[i]["ycoord"] + "vmin";
      innerhexes[i].style.left = hexlinks[i]["xcoord"] + "vmin";
      innerhexes[i].firstChild.firstChild.title = hexlinks[i]["color"];
      innerhexes[i].firstChild.firstChild.innerHTML = "<img class='icon' src='icons/" + hexlinks[i].icon + ".svg'/>";
      innerhexes[i].parentNode.href = hexlinks[i]["trget"];
    }
  }


  function verifyKey(e) {
      var keycode;
      if (window.event) {
          keycode = window.event.keyCode;
      } else if (e) {
          keycode = e.which;
      }
      if (keycode === 13) {
          interpret();
          clearInput();
      }
      checkInputLength();
  }


  function checkInputLength() {
      var input = document.getElementById('searchline');
      if (input.value.length > 15) {
          input.size = input.value.length + 1;
      } else {
          input.size = 15;
      }
  }

  function interpret() {
      var inputBox = document.getElementById('searchline');
      inputBox.select();
      var input = inputBox.value.trim();
      if (input === '') {
          return;
      }
      var inputArr = input.split(',');
      var newtab = (inputArr[inputArr.length - 1] === 'n');
      var command;
      var query;
      command = getFullCommand(inputArr[0]);
      if (command !== null) {
        switch (inputArr.length) {
          case 1:
            redirect(command.url, newtab);
            return false;
            break;
          case 2:
            query = queryFix(command, inputArr[1]);
            if (inputArr[1] === 'n') {
              redirect(command.url, newtab);
              return false;
            } else {
              redirect(command.url + command.search + query, newtab);
            return false;
            }
            break;
          default:
            query = queryFix(command, inputArr[1]);
            redirect(command.url + command.search + query, newtab);
            return false;
        }
      } else {

          if (inputArr.length === 1 && newtab){
            var win = window.open(document.URL);
            win.focus();
            return false;
          }

          command = defaultSettings.defaultCommand;
          query = queryFix(command, inputArr[0]);
          redirect(command.url + command.search + query, newtab);
          return false;
      }
  }

  function clearInput() {
      var input = document.getElementById('searchline');
      input.value = '';
      input.select();
  }

  function getFullCommand(c) {
      for (var i = 0; i < commands.length; i++) {
          if (c === commands[i].command) {
              return commands[i];
          }
      }
      return null;
  }

  function redirect(url, newtab) {
      url = (!url.startsWith('http'))
          ? 'https://' + url
          : url;
      if (newtab) {
          var win = window.open(url);
          win.focus();
          return false;
      } else {
          window.location.href = url;
          return false;
      }
  }

  function getFullnk(s) {
      for (var i = 0; i < linkyz.length; i++) {
          if (s === linkyz[i].nm) {
              return linkyz[i];
          }
      }
      return null;
  }

  function queryFix(command, query) {
      query = (command.command === 'w' || command.command === 'wa')
              ? query.trim().replace(/ /g, '+')
              : query.trim();
      return query;
  }

  function setr(link, culr) {
      link.style.backgroundColor = culr;
      link.style.transition = "background-color 0s";
  }

  function unsetr(link){
    link.style.backgroundColor = "#000000";
    link.style.transition = "background-color 2s";
  }

  function openmenu(){
    var menu = document.getElementById("menu");
    if(menu.style.left === "0%"){
      menu.style.left = "-40%";
    }
    else{
      menu.style.left = "0%";
    }
  }

  function changecolor(c){
    puffs = document.getElementsByClassName("stationary");
    for(i = 0; i < puffs.length; i++){
      puffs[i].parentNode.style.backgroundColor = c;
    }
  }
