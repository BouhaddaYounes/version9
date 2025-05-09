/****** Script for SelectTopNRows command from SSMS  ******/
SELECT  [UserID]
     
  FROM [ProductOrderDB].[dbo].[Users]
  where [UserEmail] = @UserEmail
