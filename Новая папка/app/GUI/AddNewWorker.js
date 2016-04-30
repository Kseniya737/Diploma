/**
 * 
 * @author Kseniya
 * @module AddNewWorker
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var AddWorker;
        self.showModal = function (anAddWorker) {
            AddWorker = anAddWorker;
            form.showModal();
        };
        
         form.btnAdd.onActionPerformed = function(event) {
            model.qWorkers.push({});// TODO Добавьте здесь свой код
        };
        form.btnSave.onActionPerformed = function(event) {
            model.save();// TODO Добавьте здесь свой код
        };
        
        form.onWindowClosing = function(event) {
          AddWorker();
       };
        
        // TODO : place your code here
        
        model.requery(function () {
             model.qWorkers.push({});// TODO : place your code here
        });
        
    }
    return module_constructor;
});
