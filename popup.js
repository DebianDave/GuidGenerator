document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', 
    onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                console.log("made it here");
                chrome.tabs.sendMessage(tabs[0].id, generateUuid())
            })
        //alert(generateUuid());
    }

    // Public Domain/MIT
    //Increases randomness of UUID by using timestamp
    function generateUuid () { 
        var d = new Date().getTime();
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;
            if(d > 0){
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}, false)