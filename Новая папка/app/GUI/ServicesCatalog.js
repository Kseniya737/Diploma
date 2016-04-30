/**
 * 
 * @author Kseniya
 * @module ServicesCatalog
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var ShowServices;
        self.showModal = function (aShowServices) {
            ShowServices = aShowServices;
            form.showModal();
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
     //  form.modelGrid.onMouseClicked = function(event) {
     //       if (event.clickCount > 1) {
     //           ShowServices(form.modelGrid.selected[0]);
     //           form.close();
     //       }      
     //   };
        
        form.btnSave.onActionPerformed = function (event) {
            model.save();  //Сохраняем изменения
        };
        form.btnAdd.onActionPerformed = function (event) {
            model.qServiceType.push({});  //Добавляем новую строку
        };
        form.btnDelete.onActionPerformed = function (event) {
            //model.qCar.splice(model.qCar.indexOf(form.modelGrid.selected[0],1));
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.qServiceType.splice(model.qServiceType.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                }
            }
        };
        form.btnSearch.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.qServiceType.params.Type = searchText;
            model.qServiceType.requery();
        };
        
        form.btnOK.onActionPerformed = function(event) {
             ShowServices(form.modelGrid.selected[0]);
             form.close();// TODO Добавьте здесь свой код
        };

        
    }
    return module_constructor;
});
