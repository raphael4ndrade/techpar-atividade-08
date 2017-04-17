module.exports =
    function toSaveController(httpService) {
        this.obj = {}

        this.save = () => {
            httpService.save(this.obj)
                .then((ret) => {
                    this.obj = {};
                });
        };
    };
