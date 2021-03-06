window.onerror = function(error) {
    alert(error);
};

define(["./tabs", "./player"], function(Tabs, Player) {
    var players = [];
    var list = undefined;

    Tabs.init();
    list = document.getElementsByClassName("player-list")[0];

    var addPlayer = function() {
        if (list !== undefined) {
            var input = document.getElementById("add-player");
            var player = new Player(input.value);
            players.push(player);
            var item = document.createElement("li");
            var name = document.createTextNode(player.name);
            item.appendChild(name);
            list.appendChild(item);
            input.value = '';
            
            if (players.length >= 5) {
                input.readOnly = true;
                input.hidden = true;
            }
        }
    }

    var searchKeyPress = function(e) {
        // look for window.event in case event isn't passed in
        e = e || window.event;
        if (e.keyCode == 13)
        {
            addPlayer();
            return false;
        }
        return true;
    }
    
    document.getElementById("add-player").onkeypress = searchKeyPress
    
    return {
        addPlayer: addPlayer,
        searchKeyPress: searchKeyPress
    }
    
});

