/**
 * SQL data types define the kind of value a column can hold, ensuring data integrity and optimizing storage. While specific syntax varies slightly across systems like MySQL or SQL Server, they generally fall into these main categories:

1. Numeric Data Types
Used for mathematical operations, these store integers and decimals.
·	INT / INTEGER: Standard whole numbers. Example: 2147483647.
·	SMALLINT: Smaller whole numbers (e.g., age or quantity). Range: -32,768 to 32,767.
·	BIGINT: Large whole numbers (e.g., global transaction IDs). Range: up to \(2^{63}-1\).
·	DECIMAL(p, s): Exact decimals for financial data. p is total digits, s is digits after the decimal. Example: 123.45.
·	FLOAT / REAL: Approximate decimals for scientific data where slight precision loss is okay. 


2. String (Character) Data Types
Used to store text, symbols, and alphanumeric data. 
·	CHAR(n): Fixed-length string. If shorter than n, it is padded with spaces. Example: 'US' for a state code.
·	VARCHAR(n): Variable-length string. Uses only the storage needed for the actual text. Example: 'john.doe@example.com'.
·	TEXT: For very large blocks of text like articles or long comments.
·	NVARCHAR(n): Unicode variable-length string, used for multilingual text. 



3. Date and Time Data Types
Used for tracking timestamps, events, and schedules. 
·	DATE: Stores just the date in YYYY-MM-DD format. Example: '2024-05-23'.
·	TIME: Stores just the time in HH:MI:SS format. Example: '14:30:00'.
·	DATETIME / TIMESTAMP: Stores both date and time. TIMESTAMP often tracks "last updated" changes automatically. 




4. Binary & Miscellaneous Types
Used for specialized data like files or logic. 
·	BOOLEAN: Stores logical values: TRUE or FALSE.
·	BLOB / VARBINARY: Binary Large Object; used for storing images, audio, or video files.
·	JSON: Stores structured JSON data for semi-structured fields.
·	ENUM: A list of allowed string values. Example: ENUM('Small', 'Medium', 'Large'). 










 */