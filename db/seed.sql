drop table if exists icon_entry_junction;
drop table if exists daily_log;
drop table if exists log_icon;
drop table if exists bujo_users;

--user table
create table bujo_users (
    user_id serial primary key,
    username varchar (200) not null,
    hash varchar (200) not null,
    dp text
);

-- log type table
create table log_icon (
    icon_id serial primary key,
    type_icon text
);

-- future log table
create table daily_log (
    daily_id serial primary key,
    user_id int references bujo_users(user_id),
    time_stamp timestamp default now(),
    entry varchar(50000)
);

-- icon & entry log junction

create table icon_entry_junction (
    icon_entry_id serial primary key,
    daily_id int references daily_log(daily_id),
    icon_id int references log_icon(icon_id)
);
