/**
 * 
 * @author ксюша
 * @name запрос2
 * @manual
 */ 
Select DEFECT, CAR, WORKER_NAME, LAST_NAME 
From SERVICE, CARS, Workers
Where CARS.CARS_ID = Service.CARS_ID and Workers.WORKERS_ID = Service.WORKERS_ID