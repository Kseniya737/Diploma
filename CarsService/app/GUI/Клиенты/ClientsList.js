/**
 * 
 * @author ксюша
 * @module ClientsList
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
                require('./AddNewClient', function(AddNewClient) {
                    var editor = new AddNewClient();
                    editor.show(function() {
                       model.requery();
                    });
                },function() {
                    //Failure procedure
                });
            };

            form.btnSelect.onActionPerformed = function () {
                form.close(model.qClients.cursor); 
             };

            form.btnRemove.onActionPerformed = function() {
                if (form.modelGrid.selected[0]) {
                    model.qClients.remove(form.modelGrid.selected);
                    } else {
                        model.qClients.remove(model.qClients.cursor);
                    }
                var filterKey = form.filterInput.text;
                filter(filterKey);
            };

            form.btnEdit.onActionPerformed = function () {
                if (model.qClients.cursor) {
                    require('./AddNewClient', function (AddNewClient) {
                        var editor = new AddNewClient(form.modelGrid.selected[0].clients_id);
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
                    var filtered = model.qClients.filter(function (aType) {
                        return aType.c_lname.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
                    });
                    form.modelGrid.data = filtered;
                } else {
                    form.modelGrid.data = model.qClients;
                }
            }

            model.requery();

        }

        return module_constructor;
    });
