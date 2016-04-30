/**
 * 
 * @author Kseniya
 * @name qServiceType
 * @public
 */
select * from servicetype t
where (:Type is null or t.TYPE like :Type)