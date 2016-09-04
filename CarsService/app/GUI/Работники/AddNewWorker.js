/**
 * 
 * @author Kseniya
 * @module AddNewWorker
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor(workerID) {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        if (workerID) {
            model.qWorkersByID.params.id = workerID;
            model.qWorkersByID.execute();
        } else {
            model.qWorkersByID.push({});
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
