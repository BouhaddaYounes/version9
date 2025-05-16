SELECT 
    CODE_LOYER,
    CODE_STATION,
    TYPE_LOYER,
    ETAT,
    NOM
FROM 
    [my_db].[dbo].[LOYER]  
WHERE 
    CODE_LOYER = @loyerId