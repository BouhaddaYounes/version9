SELECT 
    [CODE_STATION],
    [DATE_FACTURATION],
    [OBJET],
    [DATE_VIGEUR],
    [DATE_FIN],
      [CODE_LOYER]
FROM 
    [my_db].[dbo].[CONTRAT]
WHERE 
    ID = @contratId
