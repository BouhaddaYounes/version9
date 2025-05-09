/****** Script for SelectTopNRows command from SSMS  ******/
SELECT  [product_id]
      ,[product_name]
      ,[product_description]
      ,[product_price]
      ,[product_stock_quantity]
      ,[created_at]
      ,[updated_at]
      ,[category_id]
  FROM [ProductOrderDB].[dbo].[produits]
  where category_id=@category_id