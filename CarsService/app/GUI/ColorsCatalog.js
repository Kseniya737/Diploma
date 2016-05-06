/**
 * 
 * @author Kseniya
 */
define(['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var AddColore;
        self.showModal = function (anAddColore) {
            AddColore = anAddColore;
            form.showModal();
        };
        
        function AddColore(coloreCar){   
            model.requery();
        } 
        
        // TODO : place your code here
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
