/**
 * 
 * @author ксюша
 * @name ServiceList
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
        
        form.btnSave.onActionPerformed = function(event) {
            model.save(); // TODO Добавьте здесь свой код
        };

        
   
   form.Search.onActionPerformed = function (event) {
    var searchText = "%" + form.textField1.text + "%";
    model.qServiceType.params.Type = searchText;
    //model.qCars.params.RegNum = searchText;
    model.qServiceType.requery();
  };
};
   
    return module_constructor;
});




//function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
//	self.model.params.Defect = "%" + self.textField1.text + "%";
//        self.model.params.num = "%" + self.textField1.text + "%";
//        self.model.qService.requery();
//}


