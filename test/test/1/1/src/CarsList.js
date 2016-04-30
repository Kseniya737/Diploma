/**
 * 
 * @author ксюша
 * @name CarsList
 */
var self = this;
function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_SaveActionPerformed

function AddCarActionPerformed(evt) {//GEN-FIRST:event_AddCarActionPerformed
	// TODO Добавьте свой код:
        self.qCarsSearch.insert()
}//GEN-LAST:event_AddCarActionPerformed

function DeleteCarActionPerformed(evt) {//GEN-FIRST:event_DeleteCarActionPerformed
	// TODO Добавьте свой код:
    if(confirm("удалить?")){    
    self.qCarsSearch.deleteRow();
    }
}//GEN-LAST:event_DeleteCarActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.numCar = "%%"
        self.qCarsSearch.requery();
}//GEN-LAST:event_formWindowOpened

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	// TODO Добавьте свой код:
        self.numCar = "%" + textField.text + "%";
        self.qCarsSearch.requery();
}//GEN-LAST:event_SearchActionPerformed
