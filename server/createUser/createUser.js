const bcrypt = require('bcryptjs');
const sql = require('mssql');

const config = {
  user: 'app',
  password: '123',
  server: 'localhost',
  database: 'my_db',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function createUser(id, compte, plainPassword, codeDistrict, role, utilisateur, matricule) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    let pool = await sql.connect(config);

    const dbResult = await pool.request().query('SELECT DB_NAME() AS currentDb');
    console.log('Connected to DB:', dbResult.recordset[0].currentDb);

    const existingUsers = await pool.request().query('SELECT ID, COMPTE FROM [my_db].[dbo].[USER]');
    console.log('Existing users:', existingUsers.recordset);

    const userCheck = await pool.request()
      .input('compte', sql.NVarChar, compte)
      .query('SELECT * FROM [my_db].[dbo].[USER] WHERE COMPTE = @compte');

    console.log(`User check result for compte "${compte}":`, userCheck.recordset);

    if (userCheck.recordset.length > 0) {
      console.log(`❌ User with compte "${compte}" already exists.`);
      return;
    }

    await pool.request()
      .input('id', sql.Int, parseInt(id))
      .input('compte', sql.NVarChar, compte)
      .input('pass', sql.NVarChar, hashedPassword)
      .input('codeDistrict', sql.NVarChar, codeDistrict)
      .input('role', sql.NVarChar, role)
      .input('utilisateur', sql.NVarChar, utilisateur)
      .input('matricule', sql.NVarChar, matricule)
      .query(`
        INSERT INTO [my_db].[dbo].[USER] 
        (ID, COMPTE, PASS, CODE_DISTRICT, ROLE, Utilisateur, MATRICULE)
        VALUES (@id, @compte, @pass, @codeDistrict, @role, @utilisateur, @matricule)
      `);

    console.log(`✅ User "${compte}" created successfully!`);
  } catch (err) {
    console.error('❌ Error creating user:', err);
  }
}

async function seedUsers() {
  await createUser('1', 'employee1@company.com', 'Password1', 'A01', 'employee', 'Employee One', 'MTR001');
  await createUser('2', 'employee2@company.com', 'Password2', 'O02', 'employee', 'Employee Two', 'MTR002');
  await createUser('3', 'employee3@company.com', 'Password3', 'B08', 'employee', 'Employee Three', 'MTR003');
  await createUser('4', 'employee4@company.com', 'Password4', 'S05', 'employee', 'Employee Three', 'MTR003');
  await createUser('5', 'employee5@company.com', 'Password5', 'B07', 'employee', 'Employee Three', 'MTR003');
  await createUser('6', 'employee6@company.com', 'Password6', 'C03', 'employee', 'Employee Three', 'MTR003');

  sql.close();
}

seedUsers();

module.exports = { createUser, seedUsers };