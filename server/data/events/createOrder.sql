USE [ProductOrderDB]
GO

INSERT INTO [dbo].[commandes]
           (
           ,[order_date]
           ,[order_status]
           ,[total_amount]
           ,[product_idd])
     VALUES
           (
           @order_date, 
           @order_status,
           @total_amount,
           @product_idd)
GO
