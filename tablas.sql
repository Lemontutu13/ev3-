CREATE TABLE cartas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  psa VARCHAR(10),               
  cantidad INT NOT NULL,
  valor NUMERIC(10,2) NOT NULL,
  imagen TEXT                     
);



INSERT INTO cartas (nombre, tipo, psa, cantidad, valor, imagen) VALUES
('Pikachu EX', 'Eléctrico', 9.5, 10, 471.15, 'https://storage.googleapis.com/images.pricecharting.com/nu6mlfz4knn7uwl7/240.jpg'),
('Charizard VMAX', 'Fuego', 10, 5, 547.50, 'https://storage.googleapis.com/images.pricecharting.com/pgxwl3soi7bk53ws/240.jpg'),
('Bulbasaur', 'Planta', 9.5, 20, 44.00, 'https://storage.googleapis.com/images.pricecharting.com/osavlct66o6qlp63/240.jpg'),
('Squirtle', 'Agua', 10, 18, 295.00 , 'https://storage.googleapis.com/images.pricecharting.com/ftinihtvwdptn54d/240.jpg'),
('Eevee', 'Normal', 10, 8, 577.89, 'https://storage.googleapis.com/images.pricecharting.com/6eppxzktaeqolinz/240.jpg'),
('Mewtwo GX', 'Psíquico', 8, 3, 532.63 , 'https://storage.googleapis.com/images.pricecharting.com/8695af4eb3416698d535ee1eae3d2f44aabd64e7b713382ae1c29c012e6e5210/240.jpg'),
('Charizard ex', 'Fuego', 8, 4, 298.00 , 'https://storage.googleapis.com/images.pricecharting.com/4bv6vswzmfnmv34n/240.jpg'),
('Rayquaza VMAX', 'Dragon', 10, 2, 797.05 , 'https://storage.googleapis.com/images.pricecharting.com/4b81f53c1a4b5332adba6899ab472a3c3880f7c3ec9be800a1ca71edc980c5b9/240.jpg'),
('Gengar V', 'Fantasma', 8, 4, 156.27 , 'https://storage.googleapis.com/images.pricecharting.com/bz35k24srfg6jbvn/240.jpg'),
('Snorlax', 'Normal', 9.5, 6, 41.00 , 'https://storage.googleapis.com/images.pricecharting.com/85439a8b088d7a3ff5cbf56a8ce8974cd029be0abd4580d16f41f48d338cfcc0/240.jpg');
