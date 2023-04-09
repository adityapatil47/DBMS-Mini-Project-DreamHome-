use temp;
CREATE TABLE staff (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  staff_number VARCHAR(255) NOT NULL,
  sex VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  branch_number VARCHAR(255) NOT NULL,
  branch_address VARCHAR(255) NOT NULL,
  telephone VARCHAR(255) NOT NULL,
  supervisor_name VARCHAR(255) NOT NULL,
  manager_start_date DATE NOT NULL,
  manager_bonus DECIMAL(10,2) NOT NULL
);
select * from staff;
SELECT * FROM staff WHERE staff_number = 21;

CREATE TABLE Property (
    id INT PRIMARY KEY AUTO_INCREMENT,
    property_number VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    rooms INT NOT NULL,
    rent INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    comment varchar(255) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_number VARCHAR(255),
    owner_address VARCHAR(255) NOT NULL,
    owner_tel VARCHAR(255) NOT NULL,
    business_type VARCHAR(255),
    contact_name VARCHAR(255),
    staff_managed VARCHAR(255) NOT NULL,
    branch_registered VARCHAR(255) NOT NULL
);
select * from property;

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255),
    client_number VARCHAR(255),
    property_type VARCHAR(255),
    max_rent INTEGER,
    branch_number VARCHAR(255),
    branch_address TEXT,
    registered_by VARCHAR(255),
    registration_date DATE
);
select * from clients;

CREATE TABLE leases (
  id SERIAL PRIMARY KEY,
  client_number INTEGER NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  property_number INTEGER NOT NULL,
  property_address TEXT NOT NULL,
  rent_start DATE NOT NULL,
  rent_finish DATE NOT NULL,
  duration VARCHAR(50) NOT NULL,
  monthly_rent DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  deposit_paid VARCHAR(1) NOT NULL,
  deposit_amount DECIMAL(10,2) NOT NULL
);
select * from leases; 