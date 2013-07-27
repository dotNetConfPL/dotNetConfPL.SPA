define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Prelegenci'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Prelegenci', null, 'speakers', true);
        return true;
    }
    //#endregion
});