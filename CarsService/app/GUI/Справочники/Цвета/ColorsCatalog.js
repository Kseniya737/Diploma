/**
 * @module ColorsCatalog
 * @author Kseniya
 */
define('ColorsCatalog', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        self.show = function () {
            form.show();
        };
        
        var AddColor;
            self.show = function (anAddColor) {
                AddColor = anAddColor;
                form.show();
            };
        
        form.btnRefresh.onActionPerformed = function(){
            model.requery();
        };
        
        form.btnAdd.onActionPerformed = function () {
            require('ColorsEditor', function(ColorsEditor) {
                var editor = new ColorsEditor();
                editor.show(function() {
                    model.requery();
                });
            },function() {
                //Failure procedure
            });
        };
        
        form.btnSelect.onActionPerformed = function(event) {
            AddColor(form.modelGrid.selected[0]);
            model.save();
            form.close();// TODO Добавьте здесь свой код
        };
        
        form.btnRemove.onActionPerformed = function() {
            if (confirm("Удалить?")) {
                if (form.modelGrid.selected[0]) {
                    model.qColors.remove(form.modelGrid.selected);
                } else {
                    model.qColors.remove(model.qColors.cursor);
                }
                var filterKey = form.filterInput.text;
                filter(filterKey);
            };
        };


        form.btnEdit.onActionPerformed = function () {
            if (model.qColors.cursor) {
                require('ColorsEditor', function (ColorsEditor) {
                    var editor = new ColorsEditor(form.modelGrid.selected[0].color_id);
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
                var filtered = model.qColors.filter(function (aType) {
                    return aType.color.toLowerCase().indexOf(aKey.toLowerCase()) !== -1;
                });
                form.modelGrid.data = filtered;
            } else {
                form.modelGrid.data = model.qColors;
            }
        }
        
        model.requery();
    }
    return module_constructor;
});
