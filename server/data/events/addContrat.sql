INSERT INTO [my_db].[dbo].[CONTRAT] (
    ID, NUM, CODE_OPERATEUR, OBJET, DATE_VIGEUR, CODE_STATION, 
    DATE_FACTURATION, ASSURANCE, DATE_FIN, CHARGE_AVANCE, TYPE_PAIEMENT, 
    CODE_LOYER, CHARGE_F, LOYER_F, INDEX_F, CHIFFRE_F, 
    TAT_CONTROL, NNS
) VALUES (
    @id, @num, @codeOperateur, @objet, @dateVigueur, @codeStation, 
    @dateFacturation, @assurance, @dateFin, @chargeAvance, @typePaiement, 
    @codeLoyer, @chargeF, @loyerF, @indexF, @chiffreF, 
    @tatControl, @nns
)
