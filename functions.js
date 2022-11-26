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

//    document.body.style.backgroundColor = randomColor(1);

    document.getElementById("menu").style.transform = "translateX(-100%)";

    generate();

    hexes = document.getElementsByClassName("hexbox");
    for (i = 0; i < hexes.length; i++) {
      hexes[i].style.width = "13vmin";
    }

    var hexcolor = randomColor(5);

  puffs = document.getElementsByClassName("stationary");
    for (i = 0; i < puffs.length; i++) {
      puffs[i].parentNode.style.backgroundColor = hexcolor;
    }

    setInterval(showTime, 10000);
    showTime();
  }

  function xpand(caller) {

    var already;
    if (caller.className == 'ikon'){
      var hexbox = caller.previousSibling;
    }
    else{
      var hexbox = caller.parentNode.parentNode;
    }

    if(hexbox.style.width === "70vmin"){
      already = true;
    }

    hexes = document.getElementsByClassName("hexbox");
    for (i = 0; i < hexes.length; i++) {
      hexes[i].parentNode.style.zIndex = "0";
      hexes[i].style.width = "13vmin";
    }

    hexbox.parentNode.style.zIndex = "1";

    if(!already){
      hexbox.style.width = "70vmin";
    }
  }

  function generate(){

    var caticons = ["media", "net", "pencil", "gaming", "social", "news", "commerce"];

    var hexlinks = geticondata();

    stations = document.getElementsByClassName('container');
    for (i = 0; i < stations.length; i++){
      var innercontent = "";

      innercontent += "<div class='hexbox'><div><div onclick='xpand(this)'><div class='stationary'>";
      for (j = 0; j < 18; j++){
        innercontent += "<a href='" + hexlinks[j].trget + "'><div class='ahexbox'><div><div onmouseover=\"setr(this, this.id)\" onmouseout=\"unsetr(this)\"></div></div></div></a>";
      }
      innercontent += "</div></div></div></div><img class='ikon' src='icons/" + caticons[i] + ".svg' onclick='xpand(this)' />";
      stations[i].innerHTML = innercontent;
    }

    innerhexes = document.getElementsByClassName('ahexbox');
    for (i = 0; i < innerhexes.length; i++){
      innerhexes[i].style.transform = "translate(" + hexlinks[i]["xcoord"] + "vmin, " + hexlinks[i]["ycoord"] + "vmin) rotate(120deg)";
      innerhexes[i].parentNode.href = hexlinks[i].trget;
      backhex = innerhexes[i].firstChild.firstChild;
      backhex.title = hexlinks[i].icon;
      backhex.id = hexlinks[i].color;
      backhex.innerHTML = "<img class='icon' src='icons/" + hexlinks[i].icon + ".svg'/>";
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
      if (input === ''){
        return;
      }
      if (input === 'i') {
        openmenu();
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
    if(menu.style.transform === "translateX(-100%)"){
      menu.style.transform = "translateX(0%)";
    }
    else{
      menu.style.transform = "translateX(-100%)";
    }
  }

  function randomColor(x){

    var r = Math.floor(Math.random() * 51 * x);
    var g = Math.floor(Math.random() * 51 * x);
    var b = Math.floor(Math.random() * 51 * x);

    var rgb = r + g + b;

    if(rgb > 102 * x){
      g = (102 * x) - r - b;
    }
    if(rgb < 24 * x){
      b = (24 * x) - r - g;
    }

    return "rgb(" + r.toString() + ", " + g.toString() + ", " + b.toString() + ")";
  }

  function changecolor(c){
    puffs = document.getElementsByClassName("stationary");
    for(i = 0; i < puffs.length; i++){
      puffs[i].parentNode.style.backgroundColor = c;
    }
  }

  function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let day = String(time.getDate());
    var am_pm = "AM";
    let monthLookup = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthLookup[time.getMonth()];

    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }

    var daySuffix = "th";

    if (day.length == 1 || day.slice(-2,-1) != '1'){
      switch(day.slice(-1)) {
        case '1':
          daySuffix = 'st';
          break;
        case '2':
          daySuffix = 'nd';
          break;
        case '3':
          daySuffix = 'rd';
          break;
      }
    }

    let currentTime = hour + ":" + min + " " + am_pm + "<br>" + month + " " + day + daySuffix;
    document.getElementById("clock").innerHTML = currentTime;
  }
