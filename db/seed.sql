drop table if exists daily_log;
drop table if exists bujo_users;

--user table
create table bujo_users (
    user_id serial primary key,
    username varchar (200) not null,
    email varchar (200) not null,
    password varchar (200) not null
);

-- daily log table
create table daily_log (
    daily_id serial primary key,
    user_id int references bujo_users(user_id),
    time_stamp timestamp default now(),
    entry varchar(50000),
    status boolean
);

-- tasks in daily join here
create table monthly_log (
  monthly_id serial primary key,
  daily_id int references daily_log(daily_id) on delete cascade,
  log_date timestamp default current_date
);