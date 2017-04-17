module.exports =
    function toListController(httpService) {
        this.list = () => {
            httpService.list()
                .then((ret) => this.listAll = ret.data);
        }

        this.list();
    };