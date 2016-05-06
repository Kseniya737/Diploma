/**
 * 
 * @author ксюша
 * @module WorkersList
 */
define(['orm', 'forms', 'ui', 'AddNewWorker'],
         function (Orm, Forms, Ui, AddNewWorker, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                var ShowWorker;
                self.showModal = function (aShowWorker) {
                    ShowWorker = aShowWorker;
                    form.showModal();
                };

                var callback;
                self.showModal = function (aCallback) {
                    callback = aCallback;
                    form.showModal();
                };

                // TODO : place your code here

                model.requery(function () {
                    // TODO : place your code here
                });

                form.modelGrid.onMouseClicked = function (event) {
                    if (event.clickCount > 1) {
                        callback(form.modelGrid.selected[0]);
                        form.close();
                    }
                };

                function AddWorker(worker) {
                    model.requery();
                }

                form.NewWorker.onActionPerformed = function (event) {
                    //  model.qWorkers.push({});  //Добавляем новую строку
                    var addWorker = new AddNewWorker();
                    addWorker.showModal(AddWorker);
                };

                form.Save.onActionPerformed = function (event) {
                    model.save();  //Сохраняем изменения
                };

                form.DeleteWorker.onActionPerformed = function (event) {
                    if (confirm("Удалить?")) {
                        for (var i in form.modelGrid.selected) {
                            model.qWorkers.splice(model.qWorkers.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                        }
                    }
                };

                form.Search.onActionPerformed = function (event) {
                    var searchText = "%" + form.textField.text + "%";
                    model.qWorkers.params.Speciality = searchText;
                    model.qWorkers.requery();
                };
                
                form.btnOK.onActionPerformed = function(event) {
                    callback(form.modelGrid.selected[0]);
                    form.close();// TODO Добавьте здесь свой код
                };

            };

            return module_constructor;
        });
