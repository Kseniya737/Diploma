/**
 *
 * @author ксюша
 * @name qCar
 * @public
 */ 
Select * 
From CAR t1
where (:Model is null or t1.CAR like :Model)