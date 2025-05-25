-- -- INSERT INTO [my_db].[dbo].[CONTRAT] (
-- --     ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION, 
-- --     DATE_FACTURATION, ASSURANCE, DATE_FIN, CHARGE_AVANCE, TYPE_PAIEMENT, 
-- --     CODE_LOYER, CHARGE_F, LOYER_F, INDEX_F, CHIFFRE_F, 
-- --     TAT_CONTROL, NNS
-- -- ) VALUES (
-- --     @id, @num, @codeOperateur, @objet, @dateVigueur, @codeStation, 
-- --     @dateFacturation, @assurance, @dateFin, @chargeAvance, @typePaiement, 
-- --     @codeLoyer, @chargeF, @loyerF, @indexF, @chiffreF, 
-- --     @tatControl, @nns
-- -- )

-- INSERT INTO [my_db].[dbo].[CONTRAT] (
--     NUM,
--     CODE_OPERATEUR,
--     OBJET,
--     DATE_VIGEUR,
--     CODE_STATION,
--     DATE_FACTURATION,
--     DATE_FIN,
--     TYPE_PAIEMENT,
--     CODE_LOYER
-- )
-- SELECT 
--     @num,
--     @codeOperateur,
--     CASE L.TYPE_LOYER
--         WHEN 1 THEN 'Restauration'
--         WHEN 2 THEN 'Boutique'
--         WHEN 3 THEN 'Lavage'
--         WHEN 4 THEN 'Distributeur'
--         WHEN 5 THEN 'Publicité'
--         WHEN 6 THEN 'Antenne'
--         ELSE 'Inconnu'
--     END,
--     @dateVigueur,
--     L.CODE_STATION,
--     @dateFacturation,
--     @dateFin,
--     @typePaiement,
--     @codeLoyer
-- FROM [my_db].[dbo].[LOYER] L
-- WHERE L.CODE_LOYER = @codeLoyer AND L.ETAT = 1
-- -- AND L.CODE_STATION = @codeStation;


INSERT INTO [my_db].[dbo].[CONTRAT] (
    NUM,
    CODE_OPERATEUR,
    OBJET,
    DATE_VIGEUR,
    CODE_STATION,
    DATE_FACTURATION,
    DATE_FIN,
    TYPE_PAIEMENT,
    CODE_LOYER
)
SELECT 
    @num,
    @codeOperateur,
    CASE L.TYPE_LOYER
        WHEN 1 THEN 'Restauration'
        WHEN 2 THEN 'Boutique'
        WHEN 3 THEN 'Lavage'
        WHEN 4 THEN 'Distributeur'
        WHEN 5 THEN 'Publicité'
        WHEN 6 THEN 'Antenne'
        ELSE 'Inconnu'
    END,
    @dateVigeur,
    L.CODE_STATION,
    @dateFacturation,
    @dateFin,
    @typePaiement,
    @codeLoyer
FROM [my_db].[dbo].[LOYER] L
WHERE L.CODE_LOYER = @codeLoyer AND L.ETAT = 1;
