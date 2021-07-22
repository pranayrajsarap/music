document.body.addEventListener('keypress',function(e){
    var k=e.keyCode;
    console.log(k);
    if(k === 97)
    {
        var clap=document.getElementById('clap1');
        clap.play();
    }else if(k === 115)
    {
        var hihat=document.getElementById('hihat1');
        hihat.play();
    }else if(k === 100)
    {
        var kick=document.getElementById('kick1');
        kick.play();
    }else if(k === 102)
    {
        var openhat=document.getElementById('openhat1');
        openhat.play();
    }else if(k === 103)
    {
        var boom=document.getElementById('boom1');
        boom.play();
    }else if(k === 104)
    {
        var ride=document.getElementById('ride1');
        ride.play();
    }else if(k === 106)
    {
        var snare=document.getElementById('snare1');
        snare.play();
    }else if(k === 107)
    {
        var tom=document.getElementById('tom1');
        tom.play();
    }else if(k === 108)
    {
        var tink=document.getElementById('tink1');
        tink.play();
    }
})








