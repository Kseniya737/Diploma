/**
 * 
 * @author Kseniya
 * 
 */
define('ColorsEditor', ['orm', 'forms', 'ui'], 
    function (Orm, Forms, Ui, ModuleName) {
        function module_constructor(colorID) {
            var self = this
                    , model = Orm.loadModel(ModuleName)
                    , form = Forms.loadForm(ModuleName, model);

             if (colorID) {
                model.qColorsByID.params.id = colorID;
                model.qColorsByID.execute();
            } else {
                model.qColorsByID.push({});
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