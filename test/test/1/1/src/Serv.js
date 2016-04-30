/**
 * 
 * @author ксюша
 * @name Serv
 */
var self = this;
function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_saveActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
	// TODO Добавьте свой код:
        self.qAllService.insert()
}//GEN-LAST:event_addActionPerformed

function DeleteActionPerformed(evt) {//GEN-FIRST:event_DeleteActionPerformed
	// TODO Добавьте свой код:
    if(confirm("удалить?")){    
    self.qAllService.deleteRow();
    }
}//GEN-LAST:event_DeleteActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	self.qAllService.requery();
}//GEN-LAST:event_formWindowOpened
