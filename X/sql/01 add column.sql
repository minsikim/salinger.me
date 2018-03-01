USE salingerms;
-- ALTER TABLE [table name] ADD [column name] [datatype], ... ;
ALTER TABLE articles ADD 
-- title VARCHAR(50); -- ,
-- short_description TEXT;
-- description TEXT;
tags VARCHAR(255);

select * from articles;