/**
 *
 * @author ксюша
 * @name qService
 *  
 */ 
Select t1.CARS_ID, t1.Cost, t1.Defect, t1.ENTRY_DATE, t1.COMPLETION_DATE, t.W_LNAME, t.SPECIALTY
From SERVICE t1
 Inner Join WORKERS t on t1.WORKERS_ID = t.WORKERS_ID
 Where (:Defect is NULL or t1.DEFECT like :Defect)