/**
 * 
 * @author Kseniya
 * @module Startwindow
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
        form.button.onActionPerformed = function(event) {
            require('CarsCatalog',function(CarsCatalog){
                var car = new CarsCatalog();
                car.show();
            });
        };

        
    }
    return module_constructor;
});
