/**
 * 
 * @author ксюша
 * @name CarsList
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
        form.Save.onActionPerformed = function(event) {
            model.save();  //Сохраняем изменения
        };
        form.AddCar.onActionPerformed = function(event) {
         model.qCarsSearch.push({});  //Добавляем новую строку
       };
       form.DeleteCar.onActionPerformed = function(event) {
    
    if (confirm("Удалить?")) {
            for (var i in form.modelGrid.selected) {
                model.qCarsSearch.splice(model.qCarsSearch.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
            }
        }
    };
   
   form.Search.onActionPerformed = function (event) {
    var searchText = "%" + form.textField.text + "%";
    model.qCarsSearch.params.name = searchText;
    model.qCarsSearch.requery();
   };
};
   
    return module_constructor;
});


