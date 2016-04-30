/**
 * 
 * @author ксюша
 * @name _
 */


function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_SaveActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function DeleteClientActionPerformed(evt) {//GEN-FIRST:event_DeleteClientActionPerformed
	if (confirm("Delete owner?")) {
 ownersQuery.deleteRow();
 model.save();
 }
}//GEN-LAST:event_DeleteClientActionPerformed
