/**
 * 
 * @author Kseniya
 * @module AddService
 */
define(['orm', 'forms', 'ui', 'WorkersList', 'ClientsList', 'AddNewCar', 'ServicesCatalog', 'rpc'],
        function (Orm, Forms, Ui, WorkersList, ClientsList, AddNewCar, ServicesCatalog, Rpc, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {

                    form.show();

                };

                var AddServ;
                self.showModal = function (anAddServ) {
                    AddServ = anAddServ;
                    form.showModal();
                };

                form.btnSave.onActionPerformed = function (event) {
                    model.save();
                };

                model.requery(function () {
                    model.qAllService.push({});
                });

                function callback(master) {
                    console.log(master);
                    form.modelCombo12.value = master;
                    form.modelFormattedField.data = master;
                    form.modelFormattedField.field = "specialty";

                }
                form.btnSearchMaster.onActionPerformed = function (event) {
                    var worker = new WorkersList();
                    worker.showModal(callback);
                };

                function ShowClient(client) {
                    console.log(client);
                    form.ClientInfo.value = client;

                }
                form.btnClient.onActionPerformed = function (event) {
                    var addClient = new ClientsList();
                    addClient.showModal(ShowClient);// TODO Добавьте здесь свой код
                };

                function ShowCar(car) {
                    form.RegistrationNumber.value = car;
                }

                form.btnNumr.onActionPerformed = function (event) {
                    var addCar = new AddNewCar();
                    addCar.showModal(ShowCar);// TODO Добавьте здесь свой код
                };

                function ShowServices(service) {
                    console.log(service);
                    form.ServiceType.value = service;

                }
                form.btnAddService.onActionPerformed = function (event) {
                    var addService = new ServicesCatalog();
                    addService.showModal(ShowServices);// TODO Добавьте здесь свой код
                };

                form.btnReport.onActionPerformed = function (event) {
                    var reportProxy = new Rpc.Proxy('reports/TstReport');
                    reportProxy.execute(function (report) {
                        report.show();
                    });
                };

                form.modelGrid.onItemSelected = function (event) {
                    console.log(form.modelGrid.selected[0].workers_id);
                };



            }
            return module_constructor;
        });
