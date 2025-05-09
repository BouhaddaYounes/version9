USE [ProductOrderDB]
GO

INSERT INTO [dbo].[categories]
           ([catalogue_name]
           ,[catalogue_descr])
     VALUES
           (@catalogue_name
           ,@catalogue_descr)
GO

