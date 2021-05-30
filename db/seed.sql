drop table if exists entry_status;
drop table if exists daily_log;
drop table if exists log_status;
drop table if exists bujo_users;

--user table
create table bujo_users (
    user_id serial primary key,
    username varchar (200) not null,
    password varchar (200) not null
);

-- log status table
create table log_status (
    status_id serial primary key,
    task_status text
);

-- daily log table
create table daily_log (
    daily_id serial primary key,
    user_id int references bujo_users(user_id),
    time_stamp timestamp default now(),
    entry varchar(50000)
);

-- table bridging entries and status tables
create table entry_status (
    entry_status_id serial primary key,
    daily_id int references daily_log(daily_id),
    status_id int references log_status(status_id)
);

-- creating dummy user
insert into bujo_users
(username, password)
values
('Chuu', 'jiw0099');

-- creating 2 new values for log status
insert into log_status 
(task_status)
values
('incomplete'),
('complete');

-- creating 2 new daily logs, timestamp automatically created with timestamp default now()
insert into daily_log
(entry)
values
('Devmtn: personal project presentation'),
('Update resume with new projects');

-- adding values from daily log and log status to junction table
insert into entry_status 
(daily_id, status_id) 
values 
(1,1);
select * from entry_status;
--do i need to specify which user i'm add entries for?