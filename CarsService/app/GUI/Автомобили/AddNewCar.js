/**
 * 
 * @author Kseniya
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

            form.btnRefresh.onActionPerformed = function(){
                model.requery();
            };

            form.btnAdd.onActionPerformed = function () {
                require('./NewCar', function(NewCar) {
                    var editor = new NewCar();
                    editor.show(function() {
                        model.requery();
                    });
                },function() {
                    //Failure procedure
                });
            };

            form.btnSelect.onActionPerformed = function () {
                form.close(model.qCars.cursor); 
             };

            form.btnRemove.onActionPerformed = function() {
                if (form.modelGrid.selected[0]) {
                    model.qCars.remove(form.modelGrid.selected);
                    } else {
                        model.qCars.remove(model.qCars.cursor);
                    }
                var filterKey = form.filterInput.text;
                filter(filterKey);
            };

            form.btnEdit.onActionPerformed = function () {
                if (model.qCars.cursor) {
                    require('./NewCar', function (NewCar) {
                        var editor = new NewCar(form.modelGrid.selected[0].cars_id);
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

            form.btnCancel1.onActionPerformed = function() { 
                form.close();
            };

            form.filterInput.onValueChange = form.filterInput.onKeyReleased = function () {
               var filterKey = form.filterInput.text;
               filter(filterKey);
            };

            function filter(aKey) {
                if (aKey) {
                    var filtered = model.qCars.filter(function (aType) {
                        return aType.Lcar.car.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
                    });
                    form.modelGrid.data = filtered;
                } else {
                    form.modelGrid.data = model.qCars;
                }
            }

            model.requery();

        }

        return module_constructor;
    });
