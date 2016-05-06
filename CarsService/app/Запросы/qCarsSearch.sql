/**
 *
 * @author ксюша
 * @name qCarsSearch
 * @public
 */ 
Select * 
From CARS t1
, CAR t
, CLIENTS t2
, COLOR t3
Where (:Name is null or t1.Car Like :Name)