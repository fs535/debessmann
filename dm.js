window.dm = (function(){
    var _http,
        _endPoint,
        _authKey;

    return {
        init: function(endPoint, authKey){
            if (!endPoint || !authKey){
                console.error("Endpoint or authkey is not provided during init!");
                return;
            }
            _endPoint = endPoint;
            _authKey = authKey;
            console.warn("dm activated for " + endPoint + " with key " + authKey);
        },
        send : function(data){
            if (!_endPoint || !_authKey){
                console.error("dm is not properly initialized! Endpoint or authKey is missing! invoke init() first!");
                return;
            }
            _http = new XMLHttpRequest();
            _http.open("POST", _endPoint, true);
            _http.setRequestHeader("dm_auth_key", _authKey);

            _http.send(JSON.stringify(data));
        }
    };
}());