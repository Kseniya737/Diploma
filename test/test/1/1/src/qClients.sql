/**
 *
 * @author ксюша
 * @name qClients
 * 
 */ 
Select *, (t1.C_LNAME || ' ' || t1.C_NAME || ' '|| t1.C_MNAME) As fullName 
From CLIENTS t1
 Where (:Lname is NULL or t1.C_LNAME like :Lname)