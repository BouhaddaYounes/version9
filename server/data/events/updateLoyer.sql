UPDATE [my_db].[dbo].[LOYER]
SET
  ETAT = @etat,
  TYPE_LOYER = @typeLoyer
WHERE CODE_LOYER = @loyerId;
