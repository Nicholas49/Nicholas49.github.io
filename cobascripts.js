function insertwidget(id, pic_url="https://nicholas49.github.io/goosey.JPG", color="#981e32", title="title", item1="item1", item2="item2", item3="", item4="", item5="", item6="", item7=""){
        document.getElementById(id).innerHTML = "<div style='display: inline-block;'><div style='float:left;width:750px;'><img alt='abh-header.jpg' style='width: 100%;' src='" + pic_url + "' /></div><div style='position: relative;color: #ffffff;float:left;  width:250px;height: 437px;background-color: " + color +"'><div style='position: absolute; top: 31%; left: -20%; font-size: 700%; opacity: 0.3; transform: rotate(90deg);'>" + title + "</div><div style='position: absolute; bottom: 20px; left: 20px;'>" + item1 + "<br />" + item2 + "<br />" + item3 + "<br />" + item4 + "<br /><br />" + item5 + "<br />" + item6 + "<br />" + item7 + "</div></div></div>";
        
        
    }
