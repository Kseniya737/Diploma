/**
 * 
 * @author Kseniya
 * @module CarsCatalog
 */
define('CarsCatalog', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        
        var AddModel;
        self.show = function (anAddModel) {
            AddModel = anAddModel;
            form.show();
        };
        
//        function AddModel(modelCar){   
//            model.requery();
//        } 
      
        form.btnSave.onActionPerformed = function (event) {
            model.save();  //Сохраняем изменения
        };

        form.btnAdd.onActionPerformed = function () {
            require('CarsCatalogEditor', function(CarsCatalogEditor) {
                var editor = new CarsCatalogEditor();
                editor.show(function() {
                    model.requery();
                });
            },function() {
                //Failure procedure
            });
        };
        
        form.BtnDelete.onActionPerformed = function (event) {
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.qCar.splice(model.qCar.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                }
            }
        };
        
        form.btnSearch.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.qCar.params.Model = searchText;
            model.qCar.requery();
        };
        
        form.btnSelect.onActionPerformed = function(event) {
            AddModel(form.modelGrid.selected[0]);
            model.save();
            form.close();
        };
        
          model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
