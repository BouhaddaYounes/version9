UPDATE [my_db].[dbo].[STATIONS]
SET ETATS = @etat,
    TYPE_ACTIVITE = @activite
WHERE CODE_STATION = @stationId;
