define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Kontakt'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Kontakt', null, 'contact', true);
        return true;
    }
    //#endregion
});