USE [ProductOrderDB];




INSERT INTO [dbo].[produits]
    ([product_name], [product_price])
VALUES
    (@product_name, @product_price);