/**
 * 
 * @author Kseniya
 * 
 */
define('CarsCatalogEditor', ['orm', 'forms', 'ui'], 
    function (Orm, Forms, Ui, ModuleName) {
        function module_constructor(carID) {
            var self = this
                    , model = Orm.loadModel(ModuleName)
                    , form = Forms.loadForm(ModuleName, model);
                    
            self.show = function () {
                form.show();
            };  

            if (carID) {
                model.qCarCatalogByID.params.id = carID;
                model.qCarCatalogByID.execute();
            } else {
                model.qCarCatalogByID.push({});
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
