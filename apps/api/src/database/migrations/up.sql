CREATE TABLE clients
(
    id         SERIAL PRIMARY KEY NOT NULL,
    name       VARCHAR(255)       NOT NULL,
    email      VARCHAR(255)       NOT NULL,
    phone      VARCHAR(255)       NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

CREATE TABLE locations
(
    id         SERIAL PRIMARY KEY NOT NULL,
    latitude   NUMERIC(10, 8)     NOT NULL,
    longitude  NUMERIC(11, 8)     NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

ALTER TABLE clients
    ADD COLUMN updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE locations
    ADD COLUMN updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE clients ADD COLUMN location_id INT UNIQUE REFERENCES locations (id) ON DELETE CASCADE;
