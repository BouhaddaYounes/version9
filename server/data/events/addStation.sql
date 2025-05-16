INSERT INTO [my_db].[dbo].[STATIONS]
(CODE_STATION, NOM_STATION, CODE_DISTRICT, CODE_WILAYA, TYPE_ACTIVITE, NBR_LOYER, ETATS, Wilaya)
VALUES (@code_station, @nom_station, @code_district, @code_wilaya, @type_activite, @nbr_loyer, @etats, @wilaya)
