insert into daily_log
(user_id, time_stamp, entry, status)
values
($1, $2, $3, false)
returning *;
