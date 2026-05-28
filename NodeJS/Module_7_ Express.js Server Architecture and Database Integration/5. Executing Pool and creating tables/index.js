/**
 * Executing Pool And Creating Tables
---------------------------------------


1. Let's create a table using pool. First of all initialize a function naming initDB. make the function async as it will connect with the cloud database where it may takes some 
   time. we will also use try catch block to handle any error. we will use await before using pool.query(). and inside this function we will write query.

   now for basic knowdledge we will learn some postgresql from internet and use query from there.

    const initDB = async() => {
            try{

            CREATE TABLE

            }catch(){

            }

        } 

2. now let's create a table and call the initDB function.

    const initDB = async() => {
        try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50),
                email VARCHAR(40) NOT NULL,
                password VARCHAR(30) NOT NULL,
                is_active BOOLEAN DEFAULT true,
                age INT,

                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()

            )
            `)
            console.log("Database connected successfully!");
        } catch (error) { 
        console.log(error);
        }
    }

initDB();


and check the neon website wherether the database connected successfully or not and table is created or not


basics of postgresql:
----------------------

PostgreSQL, often called Postgres, is a free, open-source object-relational database management system (RDBMS) known for its reliability and support for advanced data types like JSON .


1. Getting Started
·	Installation: Download and install PostgreSQL for Windows, Linux, or macOS from the official PostgreSQL downloads page.
·	Interface: Most users interact with Postgres through:
o	psql: An interactive command-line terminal for executing SQL commands.
o	pgAdmin: A popular graphical user interface (GUI) for managing databases.


2. Core Data Types
PostgreSQL supports standard and advanced data types :
·	Numeric: INT, BIGINT, DECIMAL, REAL.
·	Text: VARCHAR(n) (variable-length with limit), TEXT (unlimited length).
·	Temporal: DATE, TIME, TIMESTAMP.
·	Advanced: JSONB (binary JSON for speed), UUID, and ARRAY.


3. Basic SQL Operations (CRUD)
Standard SQL commands are used to manage data: 
·	Create Table: Defines the structure of your data.
·	sql
·	CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, email TEXT UNIQUE);
·	
·	Insert Data: Adds new records to a table.
·	sql
·	INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
·	
·	Query Data: Retrieves specific information.
·	sql
·	SELECT * FROM users WHERE name = 'Alice' ORDER BY id LIMIT 10;
·	
·	Update/Delete: Modifies or removes existing records.
·	sql
·	UPDATE users SET email = 'new@example.com' WHERE name = 'Alice';
·	DELETE FROM users WHERE id = 1;

4. Key Features
·	ACID Compliance: Ensures all transactions are processed reliably, even during failures.
·	Constraints: Enforce data integrity using PRIMARY KEY, FOREIGN KEY, NOT NULL, and CHECK.
·	Concurrency: Uses Multi-Version Concurrency Control (MVCC) to allow multiple users to work simultaneously without locking the database.


5. Basic CLI Management (psql)
If you manage your database using the native terminal command-line tool psql, use these basic slash-commands to navigate: 
·	\l: List all available databases.
·	\c database_name: Connect to a specific database.
·	\dt: List all tables within the currently connected database.
·	\d table_name: Describe a specific table's columns and data types.
·	\q: Quit the psql terminal. 





PostgreSQL is widely chosen for applications ranging from small startups to massive enterprise platforms. Its architecture offers distinct benefits over other relational databases like MySQL or SQL Server.


1. Advanced Data Types
·	Native JSONB: Stores JSON data in a compressed, binary format. This allows you to index and query semi-structured data as fast as traditional relational tables.
·	Custom Types: You can define your own data types, enumerated lists, and custom functions directly inside the engine.
·	Geometric & Network Data: Built-in support for coordinates, lines, polygons, and IP address data types (inet, cidr).

2. High Concurrency and Performance
·	MVCC (Multi-Version Concurrency Control): Readers never block writers, and writers never block readers. This keeps performance fast even during heavy, simultaneous traffic.
·	Parallel Query Execution: Uses multiple CPU cores to run a single query, significantly speeding up large data scans and complex analytical reports.
·	Extensive Indexing Options: Supports advanced index types like GIN (for JSONB and text search), GiST, and partial indexes that target only specific rows.

3. Open-Source Freedom and Compliance
·	No Licensing Fees: Distributed under a liberal open-source license. You can deploy as many servers as you want for free without worrying about licensing audits.
·	Strict SQL Compliance: Adheres very closely to the official ANSI-SQL standards, making your code highly portable and predictable.
·	ACID Compliant: Ensures absolute data integrity through Write-Ahead Logging (WAL), making it completely safe against system crashes.

4. Rich Ecosystem and Extensibility
·	PostGIS: A famous extension that turns PostgreSQL into a premier geographic information system (GIS) database for mapping and location-based data.
·	Procedural Languages: Allows you to write stored procedures and triggers in languages other than SQL, such as Python (PL/Python), Perl, and Tcl.
·	Foreign Data Wrappers (FDW): Connects and queries external data sources—like MongoDB, Redis, or other SQL databases—directly from your Postgres console.




 */