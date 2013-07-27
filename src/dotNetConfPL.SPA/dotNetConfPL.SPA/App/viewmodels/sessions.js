define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Agenda'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Agenda', null, 'speakers', true);
        return true;
    }
    //#endregion
});