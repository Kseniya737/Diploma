/**
 *
 * @author ксюша
 * @name qWorkers
 * @public 
 */ 
Select *, (t1.W_LNAME || ' ' || t1.W_NAME || ' ' || t1.W_MNAME) AS fullName 
From WORKERS t1
 Where (:Speciality is null or t1.SPECIALTY Like :Speciality)