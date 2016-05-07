/**
 * 
 * @author ксюша
 * @module ClientsList
 */

define(['orm', 'forms', 'ui', './AddNewClient'], 
function (Orm, Forms, Ui, AddNewClient, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        
        var ShowClient;
        self.showModal = function (aShowClient) {
            ShowClient = aShowClient;
            form.showModal();
        };
        
        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });
        
       form.modelGrid.onMouseClicked = function(event) {
            if (event.clickCount > 1) {
                ShowClient(form.modelGrid.selected[0]);
                form.close();
            }      
        }; 
        
        function AddClient(client){   
              model.requery();
          }
          
       form.btnClient.onActionPerformed = function (event) {
           // model.qCars.push({});  //Добавляем новую строку
           var addClient = new AddNewClient();
           addClient.showModal(AddClient);
        };
       
        form.Save.onActionPerformed = function (event) {
            model.save();  //Сохраняем изменения
        };
        
        form.DeleteClient.onActionPerformed = function (event) {
            //model.qCar.splice(model.qCar.indexOf(form.modelGrid.selected[0],1));
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.qClients.splice(model.qClients.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                }
            }
        };
        
        form.Search.onActionPerformed = function (event) {
            var searchText = "%" + form.textField.text + "%";
            model.qClients.params.Lname = searchText;
            model.qClients.requery();
        };
        
        form.btnOK.onActionPerformed = function(event) {
            ShowClient(form.modelGrid.selected[0]);
            form.close();// TODO Добавьте здесь свой код
        };
    }
    
    return module_constructor;
});
