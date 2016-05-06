/**
 * 
 * @author Kseniya
 * @module AddNewClient
 */
define(['orm', 'forms', 'ui'], 
function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var AddClient;
        self.showModal = function (anAddClient) {
            AddClient = anAddClient;
            form.showModal();
        };
        
        form.btnAdd.onActionPerformed = function(event) {
            model.qClients.push({});// TODO Добавьте здесь свой код
        };
        form.btnSave.onActionPerformed = function(event) {
            model.save();// TODO Добавьте здесь свой код
        };
        
        form.onWindowClosing = function(event) {
          AddClient();
       };
                
             
        model.requery(function () {
           model.qClients.push({}); // TODO : place your code here
        });
        
    }
    return module_constructor;
});
