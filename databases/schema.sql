create database burgers_db;
use burgers_db;

create table bergers
(
	id int not null auto_increment,
	name varchar(255) not null,
	eaten boolean default false,
	primary key (id)
);

