var Game = {
    SIZE: 6,
};

Game.start = function() {
    Draw.init();
    Player.listen();

    console.log("1");
}