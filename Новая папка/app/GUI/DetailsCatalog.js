/**
 * 
 * @author Kseniya
 * @module DetailsCatalog
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.btnSave.onActionPerformed = function(event) {
            model.save();  //Сохраняем изменения
        };
        form.btnAdd.onActionPerformed = function(event) {
         model.qDetails.push({});  //Добавляем новую строку
       };
       
       form.btnDelete.onActionPerformed = function(event) {
    if (confirm("Удалить?")) {
            for (var i in form.modelGrid.selected) {
                model.qDetails.splice(model.qDetails.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
            }
    }
    };
    }
    return module_constructor;
});
