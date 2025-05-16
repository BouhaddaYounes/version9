SELECT 
    [ID],
    [CODE_OPERATEUR],
    [RAISON_SOCIALE],
    [DOMICILIATION],
    [ADRESSE]
FROM 
    [my_db].[dbo].[OPERATEUR]
WHERE 
    [ID] = @operateurId