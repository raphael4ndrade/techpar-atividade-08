module.exports =
    function httpService($http){
        let baseURL = "http://127.0.0.1:3000";
        this.save = (obj) => $http.post(baseURL + "/save", obj);
        this.list = () => $http.get(baseURL + "/list");
    };