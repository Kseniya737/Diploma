/**
 * 
 * @author Kseniya
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var AddColore;
        self.showModal = function (anAddColore) {
            AddColore = anAddColore;
            form.showModal();
        };
        
    //    function AddColore(coloreCar){   
    //        model.requery();
    //    } 
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.btnAdd.onActionPerformed = function (event) {
            model.qColors.push({});  //Добавляем новую строку
        };
        
        form.btnDelete.onActionPerformed = function (event) {
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.qColors.splice(model.qColors.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                }
            }
        };
        
        form.btnSave.onActionPerformed = function (event) {
            model.save();
        };
        
        form.btnSearch.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.qColors.params.Color = searchText;
            model.qColors.requery();
        };
        
        form.btnSelect.onActionPerformed = function(event) {
            AddColore(form.modelGrid.selected[0]);
            model.save();
            form.close();// TODO Добавьте здесь свой код
        };
        
    }
    return module_constructor;
});
