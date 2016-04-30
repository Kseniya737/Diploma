/**
 * 
 * @author ксюша
 * @name all
 * @manual
 */
select * from CARS, CLIENTS, SERVICE, WORKERS
Where Service.CARS_ID = Cars.CARS_ID and Service.CLIENTS_ID = Clients.CLIENTS_ID and SERVICE.WORKERS_ID = WORKERS.WORKERS_ID
