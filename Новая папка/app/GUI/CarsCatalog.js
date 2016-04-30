/**
 * 
 * @author Kseniya
 * @module CarsCatalog
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        
        var AddModel;
        self.showModal = function (anAddModel) {
            AddModel = anAddModel;
            form.showModal();
        };
        
      //  function AddModel(modelCar){   
      //      model.requery();
      //  } 
      
        form.btnSave.onActionPerformed = function (event) {
            model.save();  //Сохраняем изменения
        };
        form.BtnAdd.onActionPerformed = function (event) {
            model.qCar.push({});  //Добавляем новую строку
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
            form.close();// TODO Добавьте здесь свой код
        };
        
          model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
