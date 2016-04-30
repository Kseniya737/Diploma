/**
 * 
 * @author Kseniya
 * @module tmp
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        model.temp.params.Type = "%%";
        self.show = function () {
            form.show();
        };
        
        var ViewServ;
        self.showModal = function (aViewServ) {
            ViewServ = aViewServ;
            form.showModal();
        };
        
        form.btnSearch.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.temp.params.Type = searchText;
            model.temp.requery();
        };
        
        model.requery(function () {
           
        });
        
    }
    return module_constructor;
});
