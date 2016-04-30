/**
 * 
 * @author ксюша
 * @name _2
 */

function CarsInformationActionPerformed(evt) {//GEN-FIRST:event_CarsInformationActionPerformed
	// TODO Добавьте свой код:
        var carListWindow = new CarsList();
        carListWindow.showModal();
}//GEN-LAST:event_CarsInformationActionPerformed

function ClientsInformationActionPerformed(evt) {//GEN-FIRST:event_ClientsInformationActionPerformed
	var clientsListWindow = new ClientsList();
        clientsListWindow.showModal();
}//GEN-LAST:event_ClientsInformationActionPerformed

function WorkersInformationActionPerformed(evt) {//GEN-FIRST:event_WorkersInformationActionPerformed
        var workersListWindow = new WorkersList();
        workersListWindow.showModal();
}//GEN-LAST:event_WorkersInformationActionPerformed

function ServiceInformationActionPerformed(evt) {//GEN-FIRST:event_ServiceInformationActionPerformed
	var servWindow = new Serv();
        servWindow.showModal();

}//GEN-LAST:event_ServiceInformationActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	var ServiceListWindow = new ServiceList();
        ServiceListWindow.showModal();
}//GEN-LAST:event_buttonActionPerformed
