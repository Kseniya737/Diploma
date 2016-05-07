/**
 * 
 * @author ксюша
 */

define(['orm', 'forms', 'ui', './AddService', './tmp'], function (Orm, Forms, Ui, AddService, tmp, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        
        function AddServ(serv){   
              model.requery();
          }
          
       form.btnAddServ.onActionPerformed = function (event) {
           var addServ = new AddService();
           addServ.showModal(AddServ);
        };
        
        function ViewServ(view){   
              model.requery();
          }
          
       form.btnView.onActionPerformed = function (event) {
           var viewServ = new tmp();
           viewServ.showModal(ViewServ);
        };

        // TODO : place your code here

        model.requery(function () {
            // TODO : place your code here
        });
       
       

    }
    return module_constructor;
});