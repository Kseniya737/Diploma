/**
 * 
 * @author Kseniya
 * @module AddNewClient
 */
define(['orm', 'forms', 'ui'], 
    function (Orm, Forms, Ui, ModuleName) {
        function module_constructor(clientID) {
            var self = this
                    , model = Orm.loadModel(ModuleName)
                    , form = Forms.loadForm(ModuleName, model);
            
            self.show = function () {
                form.show();
            };
            
            if (clientID) {
                model.qClientByID.params.id = clientID;
                model.qClientByID.execute();
            } else {
                model.qClientByID.push({});
            }

            form.btnAccept.onActionPerformed = function(){
                 model.save(function() {
                    form.close(null);
                });
            };
            form.btnCancel.onActionPerformed = function(){
                form.close();
            };

        }
        return module_constructor;
});
