/**
 * 
 * @author ксюша
 * @module WorkersList
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
                    require('./AddNewWorker', function(AddNewWorker) {
                        var editor = new AddNewWorker();
                        editor.show(function() {
                            model.requery();
                        });
                    },function() {
                        //Failure procedure
                    });
                };
        
                form.btnSelect.onActionPerformed = function () {
                    form.close(model.qWorkers.cursor); 
                 };
        
                form.btnRemove.onActionPerformed = function() {
                    if (form.modelGrid.selected[0]) {
                        model.qWorkers.remove(form.modelGrid.selected);
                        } else {
                            model.qWorkers.remove(model.qWorkers.cursor);
                        }
                    var filterKey = form.filterInput.text;
                    filter(filterKey);
                };
                     
                form.btnEdit.onActionPerformed = function () {
                    if (model.qWorkers.cursor) {
                        require('./AddNewWorker', function (AddNewWorker) {
                            var editor = new AddNewWorker(form.modelGrid.selected[0].workers_id);
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

                form.btnCancel.onActionPerformed = function() { 
                    form.close();
                };
                
                form.filterInput.onValueChange = form.filterInput.onKeyReleased = function () {
                   var filterKey = form.filterInput.text;
                   filter(filterKey);
                };

                function filter(aKey) {
                    if (aKey) {
                        var filtered = model.qWorkers.filter(function (aType) {
                            return aType.specialty.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
                        });
                        form.modelGrid.data = filtered;
                    } else {
                        form.modelGrid.data = model.qWorkers;
                    }
                }
                
                model.requery();

            };

            return module_constructor;
        });
