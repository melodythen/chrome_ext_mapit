document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click',
        onclick, false)

    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                var inp = document.getElementById("address").value;
                var address = inp.replace(/,/g, "");
                var newaddress = address.split(' ').join('+');
                //window.alert(newaddress)
                chrome.tabs.create({
                    url: "https://www.google.com/maps/place/".concat(newaddress)
                });
                
            })
        
    }
}, false)

