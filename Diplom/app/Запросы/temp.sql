/**
 *
 * @author Kseniya
 * @name temp
 * @public
 */ 
Select * 
From SERVICE S
where S.servicetype in (select ST.servicetype_id from SERVICETYPE ST where ST.type like :Type )