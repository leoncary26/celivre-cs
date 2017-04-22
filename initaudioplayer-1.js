jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        volumeimagewidth:24,
        barbackgroundimage:"",
        imagewidth:550,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        prevnextimage:"prevnext-24-24-1.png",
        showinfo:false,
        imageheight:181,
        skin:"BarWhiteTitle",
        loopimage:"loop-24-24-2.png",
        loopimagewidth:24,
        volumebarheight:80,
        prevnextimageheight:24,
        infoformat:"De %ARTIST% - %ALBUM%<br />%INFO%",
        showstop:false,
        preloadaudio:true,
        showvolumebar:true,
        width:555,
        showtitleinbar:true,
        showloop:true,
        volumeimage:"volume-24-24-2.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"%ID%. %TITLE%",
        prevnextimagewidth:24,
        tracklistarrowimage:"tracklistarrow-16-16-0.png",
        playpauseimageheight:24,
        showbackgroundimage:false,
        progresswidthmode:"auto",
        stopimage:"stop-24-24-1.png",
        showvolume:true,
        playpauseimage:"playpause-24-24-1.png",
        showprevnext:true,
        backgroundimage:"",
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        progresswidth:96,
        showtitle:false,
        defaultvolume:-1,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistwidth:555,
        tracklistarrowimagewidth:16,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        loop:1,
        tracklistitem:10
    });
});