/**
 * 
 * @author Kseniya
 * @module NewCar
 */
define(['orm', 'forms', 'ui'],
        function (Orm, Forms, Ui, ModuleName) {
            function module_constructor(carID) {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                if (carID) {
                    model.qCarsByID.params.id = carID;
                       model.requery(function() {
                       form.mcModel.redraw();
                       form.mcColor.redraw();
                   });
                } else {
                    model.qCarsByID.push({});
                }

                form.btnAccept.onActionPerformed = function(){
                     model.save(function() {
                        form.close(null);
                    });
                };
                form.btnCancel.onActionPerformed = function(){
                    form.close();
                };
                
                form.mcModel.onSelect = function () {
                    require('./CarsCatalog', function (CarsCatalog) {
                        var picker = new NewCar();
                        picker.showModal(function (addNew) {
                            form.mcModel.value = addNew;
                        });
                    });
                };
                
                form.mcColor.onSelect = function () {
                    require('./ColorsCatalog', function (color) {
                        var picker = new color();
                        picker.showModal(function (addNew) {
                            form.mcColor.value = addNew;
                        });
                    });
                };
            }
            return module_constructor;
        });
