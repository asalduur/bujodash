update daily_log
set entry = $3
where user_id = $1 and time_stamp = $2
returning *;