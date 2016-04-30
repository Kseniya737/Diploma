/**
 * 
 * @author Kseniya
 * @module AddNewCar
 */
define(['orm', 'forms', 'ui', 'NewCar'], function (Orm, Forms, Ui, NewCar, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
         var ShowCar;
         self.showModal = function (aShowCar) {
            ShowCar = aShowCar;
            form.showModal();
        };
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.modelGrid.onMouseClicked = function(event) {
            if (event.clickCount > 1) {
                ShowCar(form.modelGrid.selected[0]);
                form.close();
            }      
        }; 
        
         function AddCar(car){   
              model.requery();
          }
        form.btnAdd.onActionPerformed = function (event) {
           // model.qCars.push({});  //Добавляем новую строку
            var addCar = new NewCar();
            addCar.showModal(AddCar);
        };
        
         form.btnSave.onActionPerformed = function (event) {
            model.save();  //Сохраняем изменения
        };
       
        form.Search.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.qCars.params.RegNum = searchText;
            model.qCars.requery();
        };
        
        form.btnOK.onActionPerformed = function(event) {
            ShowCar(form.modelGrid.selected[0]);
            form.close();
        };
       
       form.onWindowClosing = function(event) {
       AddCar();
       };
       
        
    }
    
    return module_constructor;
});
