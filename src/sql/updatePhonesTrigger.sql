CREATE OR REPLACE FUNCTION delete_phone()
RETURNS TRIGGER AS
$$
  BEGIN
    IF NEW.user_id = NULL THEN
      DELETE FROM phones
      WHERE phones.id = NEW.id;
    END IF;
    RETURN NULL;
  END;
$$ LANGUAGE 'plpgsql';


DROP TRIGGER IF EXISTS update_phone ON phones;

CREATE TRIGGER update_phones
AFTER UPDATE
ON phones
FOR EACH ROW
EXECUTE PROCEDURE delete_phone();