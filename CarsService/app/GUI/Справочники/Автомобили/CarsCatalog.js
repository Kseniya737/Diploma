/**
 * 
 * @author Kseniya
 * @module CarsCatalog
 */
define('CarsCatalog', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        
        var AddModel;
        self.show = function (anAddModel) {
            AddModel = anAddModel;
            form.show();
        };
        
//        function AddModel(modelCar){   
//            model.requery();
//        } 

        
        form.btnSelect.onActionPerformed = function(event) {
            AddModel(form.modelGrid.selected[0]);
            model.save();
            form.close();
        };
        
        form.btnRefresh.onActionPerformed = function(){
            model.requery();
        };
        
        form.btnAdd.onActionPerformed = function () {
            require('CarsCatalogEditor', function(CarsCatalogEditor) {
                var editor = new CarsCatalogEditor();
                editor.show(function() {
                    model.requery();
                });
            },function() {
                //Failure procedure
            });
        };
        
        form.btnRemove.onActionPerformed = function() {
            if (confirm("Удалить?")) {
                if (form.modelGrid.selected[0]) {
                    model.qCar.remove(form.modelGrid.selected);
                } else {
                    model.qCar.remove(model.qCar.cursor);
                }
                var filterKey = form.filterInput.text;
                filter(filterKey);
            };
        };
        
        form.btnEdit.onActionPerformed = function () {
            if (model.qCar.cursor) {
                require('CarsCatalogEditor', function (CarsCatalogEditor) {
                    var editor = new CarsCatalogEditor(form.modelGrid.selected[0].car_id);
                    editor.show(function () {
                        model.requery(function(){
                            var filterKey = form.filterInput.text;
                            filter(filterKey);
                        });
                    });
                }, function () {
                    //Failure procedure
                });
            }
        };
        
        form.btnSave.onActionPerformed = function () {
            model.save();
        };        
        
        form.btnClose.onActionPerformed = function() { 
           if (model.modified) {
                        model.save();
                        form.close();
                    }else{
                        form.close();
                    };
        };
        
        form.filterInput.onValueChange = form.filterInput.onKeyReleased = function () {
            var filterKey = form.filterInput.text;
            filter(filterKey);
        };

        function filter(aKey) {
            if (aKey) {
                var filtered = model.qCar.filter(function (aType) {
                    return aType.car.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
                });
                form.modelGrid.data = filtered;
            } else {
                form.modelGrid.data = model.qCar;
            }        
        
          model.requery(function () {
            // TODO : place your code here
        });
    }
        
        model.requery();
    }
    return module_constructor;
});
