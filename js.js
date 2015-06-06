$(function(){

  var yt1 = $('.yt1').find(".yt-player");
  var yt2 = $('.yt2').find(".yt-player");

  var id1 = "aDorTBEhEtk";
  var id2 = "ihv4f7VMeJw";


  yt1.tubeplayer({
      width: "100%", // the width of the player
      height: "100%", // the height of the player
      allowFullScreen: "true", // true by default, allow user to go full screen
      autoPlay: false, // true by default, allow user to go full screen
      initialVideo: id1, // the video that is loaded into the player
      preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
      iframed: true,
      onPlay: function(id){ /*console.log("play");*/}, // after the play method is called
      onPause: function(){ /*console.log("paused");*/}, // after the pause method is called
      onPlayerPaused: function(){ /*console.log("paused" + yt.data("ytembed"))*/}, // after the pause method is called
      onPlayerPlaying: function(){ /*console.log("playing");*/}, // after the pause method is called
      onPlayerEnded: function(){ /*console.log("video end");*/}, // after the pause method is called
      onStop: function(){ /*console.log("stopped");*/}, // after the player is stopped
      onSeek: function(time){}, // after the video has been seeked to a defined point
      onMute: function(){}, // after the player is muted
      onUnMute: function(){} // after the player is unmuted
    });

  yt2.tubeplayer({
        width: "100%", // the width of the player
        height: "100%", // the height of the player
        allowFullScreen: "true", // true by default, allow user to go full screen
        autoPlay: false, // true by default, allow user to go full screen
        initialVideo: id2, // the video that is loaded into the player
        preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
        iframed: true,
        onPlay: function(id){ /*console.log("play");*/}, // after the play method is called
        onPause: function(){ /*console.log("paused");*/}, // after the pause method is called
        onPlayerPaused: function(){ /*console.log("paused" + yt.data("ytembed"))*/}, // after the pause method is called
        onPlayerPlaying: function(){ /*console.log("playing");*/}, // after the pause method is called
        onPlayerEnded: function(){ /*console.log("video end");*/}, // after the pause method is called
        onStop: function(){ /*console.log("stopped");*/}, // after the player is stopped
        onSeek: function(time){}, // after the video has been seeked to a defined point
        onMute: function(){}, // after the player is muted
        onUnMute: function(){} // after the player is unmuted
      });


  
  $(".play").on("click", function  (e) {
    e.preventDefault();

    yt1.tubeplayer("play").show();
    yt2.tubeplayer("play").show();

    return false;
  });

$(".pause").on("click", function  (e) {

    e.preventDefault();
    yt1.tubeplayer("pause");
    yt2.tubeplayer("pause");
    return false;

  });


});