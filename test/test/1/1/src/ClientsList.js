/**
 * 
 * @author ксюша
 * @name ClientsList
 */
var self = this;
function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_SaveActionPerformed

function DeleteClientActionPerformed(evt) {//GEN-FIRST:event_DeleteClientActionPerformed
	 if(confirm("удалить?")){    
    self.qClients.deleteRow();
}//GEN-LAST:event_DeleteClientActionPerformed
}
function AddClientActionPerformed(evt) {//GEN-FIRST:event_AddClientActionPerformed
	self.qClients.insert();
}//GEN-LAST:event_AddClientActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
        self.Lname = "%%";
        self.qClients.requery();	
}//GEN-LAST:event_formWindowOpened

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	// TODO Добавьте свой код:
        self.Lname = "%" + textField.text + "%";
        self.qClients.requery();
}//GEN-LAST:event_SearchActionPerformed
