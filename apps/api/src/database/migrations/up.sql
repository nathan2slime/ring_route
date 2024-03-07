CREATE DATABASE clients;

CREATE TABLE clients
(
    id         SERIAL PRIMARY KEY NOT NULL,
    name       VARCHAR(255)       NOT NULL,
    email      VARCHAR(255)       NOT NULL,
    phone      VARCHAR(255)       NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

CREATE TABLE addresses
(
    id         SERIAL PRIMARY KEY NOT NULL,
    street     VARCHAR(255)       NOT NULL,
    city       VARCHAR(255)       NOT NULL,
    state      VARCHAR(255)       NOT NULL,
    zip_code   VARCHAR(10)        NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

ALTER TABLE clients
    ADD COLUMN updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE addresses
    ADD COLUMN updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE clients
    ADD COLUMN address_id INT UNIQUE REFERENCES addresses (id) ON DELETE CASCADE;

