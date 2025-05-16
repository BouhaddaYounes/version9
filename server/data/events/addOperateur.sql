INSERT INTO [my_db].[dbo].[OPERATEUR] (
    ID,
    CODE_OPERATEUR,
    RAISON_SOCIALE,
    NIF,
    DOMICILIATION,
    ADRESSE,
    TEL,
    CODE_CLIENT,
    OP_ETAT
)
VALUES (
    @id,
    @code_operateur,
    @raison_sociale,
    @nif,
    @domiciliation,
    @adresse,
    @tel,
    @code_client,
    @op_etat
)