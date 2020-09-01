document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click',
        onclick, false)

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
}, false)

