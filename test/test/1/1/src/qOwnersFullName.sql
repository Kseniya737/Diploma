/**
 *
 * @author ксюша
 * @name qOwnersFullName
 * @manual 
 */ 
Select (t1.C_LNAME || ' ' || t1.C_NAME || ' '|| t1.C_MNAME) As fullName, t1.Clients_id
From CLIENTS t1