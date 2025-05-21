@echo off
setlocal

:: Paramètres de sauvegarde
set SourceDB=BDD
set BackupFile=C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\BackupSourceDB%.bak

:: Paramètres FTP
set FTPServer=192.32.32.3
set FTPUser=zineb
set FTPPassword=pss
set FTPRemoteDir=C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\Backup\

:: Paramètres de restauration
set DestinationDB=BDD
set RestoreFile=C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\Backup\%SourceDB%.bak

:: Sauvegarde de la base de données
sqlcmd -S VotreServeur -d %SourceDB% -Q "BACKUP DATABASE %SourceDB% TO DISK='%BackupFile%'"

:: Transfert via FTP
ftp -n -i -s:ftp_script.txt

:: Supprimer le fichier de sauvegarde local (facultatif)
del "%BackupFile%"

:: Restauration de la base de données
sqlcmd -S VotreServeurDeDestination -Q "RESTORE DATABASE %DestinationDB% FROM DISK='%RestoreFile%' WITH MOVE 'NomData' TO 'C:\Chemin\De\Restauration\%DestinationDB%.mdf', MOVE 'NomLog' TO 'C:\Chemin\De\Restauration\%DestinationDB%_log.ldf'"

:: Supprimer le fichier de restauration local (facultatif)
del "%RestoreFile%"

:: Fin du script
exit /b 0