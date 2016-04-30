/**
 *
 * @author Kseniya
 * @name qColors
 * @public
 */ 
Select * 
From COLOR t1
Where (:Color is null or t1.color Like :Color)