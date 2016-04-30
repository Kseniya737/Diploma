/**
 * 
 * @author ксюша
 * @name ServiceList
 */
var self = this;
function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	self.Defect = "%%";
        self.qService.requery();
}//GEN-LAST:event_formWindowOpened

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	self.Defect = "%" + textField1.text + "%";
        self.qService.requery();
}//GEN-LAST:event_SearchActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed
