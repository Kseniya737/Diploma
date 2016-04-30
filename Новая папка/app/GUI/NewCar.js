/**
 * 
 * @author Kseniya
 * @module NewCar
 */
define(['orm', 'forms', 'CarsCatalog', 'ColorsCatalog', 'ui'], 
function (Orm, Forms, CarsCatalog, ColorsCatalog, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
         var AddCar;
        self.showModal = function (anAddCar) {
            AddCar = anAddCar;
            form.showModal();
        };
        
         form.btnAdd.onActionPerformed = function (event) {
            model.qCars.push({});  //Добавляем новую строку
        };
         form.btnSave.onActionPerformed = function (event) {
            model.save();
            //Сохраняем изменения
        };
        

       form.onWindowClosing = function(event) {
          AddCar();
       };
       
        function AddModel(modelCar){
            form.modelCombo.value = modelCar;
             // model.requery();
          }
          
       form.btnModel.onActionPerformed = function (event) {
           var addModel = new CarsCatalog();
           addModel.showModal(AddModel);
        };
  
       
        model.requery(function () {
            model.qCars.push({});// TODO : place your code here
        });
        
    }
    return module_constructor;
});
