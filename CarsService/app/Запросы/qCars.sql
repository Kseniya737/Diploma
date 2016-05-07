/**
 *
 * @author Kseniya
 * @name qCars
 * @public
 */ 
Select * 
From CARS t1
Where (:RegNum is null or t1.rnum Like :RegNum)