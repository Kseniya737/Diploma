/**
 *
 * @author ксюша
 * @name qOwnersFullName
 * @manual 
 * @public
 */ 
Select (t1.C_LNAME || ' ' || t1.C_NAME || ' '|| t1.C_MNAME) As fullName, t1.Clients_id
From CLIENTS t1