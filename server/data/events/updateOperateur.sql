UPDATE [my_db].[dbo].[OPERATEUR]
SET TEL = @tel,
    BANQUE = @banque
WHERE CODE_OPERATEUR = @operateurId