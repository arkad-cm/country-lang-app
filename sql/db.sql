DROP TABLE IF EXISTS languages;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS continents;

CREATE TABLE continents
(
    "id"   SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "CODE" CHAR(2)            NOT NULL UNIQUE,
    "NAME" VARCHAR(50)        NOT NULL
);

CREATE TABLE countries
(
    "id"        SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "Code"      CHAR(2)            NOT NULL UNIQUE,
    "Name"      VARCHAR(50)        NOT NULL,
    "Native"    VARCHAR(50)        NOT NULL,
    "Phone"     VARCHAR(20)        NOT NULL,
    "Continent" VARCHAR(20)        NOT NULL,
    "Capital"   VARCHAR(20)        NOT NULL,
    "Currency"  VARCHAR(50)        NOT NULL,
    "Languages" VARCHAR(50)        NOT NULL
);

CREATE TABLE languages
(
    "id"     SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "Code"   CHAR(2)            NOT NULL UNIQUE,
    "Name"   VARCHAR(50)        NOT NULL,
    "Native" VARCHAR(50)        NOT NULL,
    "Rtf"    VARCHAR(20)
)

