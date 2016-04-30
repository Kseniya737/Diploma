/**
 *
 * @author ксюша
 * @name qClients
 * @public
 */ 
Select *, (t1.C_LNAME || ' ' || t1.C_NAME || ' ' || t1.C_MNAME) AS fullName 
From CLIENTS t1
 Where (:Lname is null or t1.C_LNAME Like :Lname)