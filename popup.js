document.addEventListener('DOMContentLoaded', function () {

    var check_map = document.getElementById('mapit');
    if (check_map) {
        check_map.addEventListener('click', onclick, false);
    }


    var check_dir = document.getElementById('directions');
    if (check_dir) {
        check_dir.addEventListener('click', getdirections, false);
    }



    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                var inp = document.getElementById("address").value;
                if (inp.indexOf('\n') > 1) {

                    addresses = inp.split("\n");
                    addresses.forEach((element) => {
                        var address = element.replace(/,/g, "");
                        var newaddress = address.split(' ').join('+');
                        chrome.tabs.create({
                            url: "https://www.google.com/maps/place/".concat(newaddress)
                        });
                    });
                }
                else {

                    var address = inp.replace(/,/g, "");
                    var newaddress = address.split(' ').join('+');
                    //window.alert(newaddress)
                    chrome.tabs.create({
                        url: "https://www.google.com/maps/place/".concat(newaddress)
                    });
                }
                
            })
        
    }


    function getdirections() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                var src = document.getElementById("source").value;
                var dest = document.getElementById("destination").value;
            
                if (dest.indexOf('\n') >= 1) {

                    var srcadd = src.replace(/,/g, "");
                    var srcaddress = srcadd.split(' ').join('+');

                    destin = dest.split("\n");
                    destinationaddress = ""
                    destin.forEach((element) => {
                        var address = element.replace(/,/g, "");
                        var newaddress = address.split(' ').join('+');
                        destinationaddress += newaddress + "/";
                    });

                    chrome.tabs.create({
                        url: `https://www.google.com/maps/dir/${srcaddress}/${destinationaddress}`
                    });

                }
                else {

                    var srcadd = src.replace(/,/g, "");
                    var srcaddress = srcadd.split(' ').join('+');

                    var destadd = dest.replace(/,/g, "");
                    var destaddress = destadd.split(' ').join('+');
                    //window.alert(newaddress)
                    chrome.tabs.create({
                        url: `https://www.google.com/maps/dir/${srcaddress}/${destaddress}`
                    });

                }




            })

    }
}, false)




