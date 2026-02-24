// Park City Mountain trail and lift data
// Extracted from official trail map

export const lifts = [
  { id: 'lift-1', name: 'Quicksilver Gondola', type: 'gondola', area: 'Canyons' },
  { id: 'lift-2', name: 'Red Pine Gondola', type: 'gondola', area: 'Canyons' },
  { id: 'lift-3', name: 'Crescent Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-4', name: 'Dreamcatcher', type: 'quad', area: 'Canyons' },
  { id: 'lift-5', name: 'Day Break', type: 'quad', area: 'Canyons' },
  { id: 'lift-6', name: 'Bonanza Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-7', name: 'King Con Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-8', name: 'Ninety-Nine Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-9', name: 'Saddleback Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-10', name: 'Sun Peak Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-11', name: 'Iron Mountain Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-12', name: 'Mutherlode Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-13', name: 'Payday Express', type: 'quad', area: 'Park City' },
  { id: 'lift-14', name: 'Town Lift', type: 'chairlift', area: 'Park City' },
  { id: 'lift-15', name: 'Silver Star', type: 'quad', area: 'Park City' },
  { id: 'lift-16', name: 'Silverlod Express', type: 'quad', area: 'Park City' },
  { id: 'lift-17', name: 'Pioneer', type: 'quad', area: 'Park City' },
  { id: 'lift-18', name: 'Eagle', type: 'quad', area: 'Park City' },
  { id: 'lift-19', name: 'First Time', type: 'quad', area: 'Park City' },
  { id: 'lift-20', name: 'High Meadow Express', type: 'quad', area: 'Park City' },
  { id: 'lift-21', name: 'Short Cut', type: 'double', area: 'Canyons' },
  { id: 'lift-22', name: 'Thaynes', type: 'double', area: 'Park City' },
  { id: 'lift-23', name: 'Timberline', type: 'double', area: 'Park City' },
  { id: 'lift-24', name: 'TomBSTONE Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-25', name: 'Sweet Pea', type: 'double', area: 'Park City' },
  { id: 'lift-26', name: 'Over and Out', type: 'double', area: 'Canyons' },
  { id: 'lift-27', name: 'Peak 5', type: 'quad', area: 'Canyons' },
  { id: 'lift-28', name: 'Super Condor Express', type: 'quad', area: 'Canyons' },
  { id: 'lift-29', name: 'Condor', type: 'double', area: 'Canyons' },
  { id: 'lift-30', name: 'Flat Iron', type: 'double', area: 'Canyons' },
  { id: 'lift-31', name: 'Frostwood', type: 'double', area: 'Canyons' },
  { id: 'lift-32', name: 'Mule Train', type: 'double', area: 'Canyons' },
  { id: 'lift-33', name: 'Canyons Gondola', type: 'gondola', area: 'Canyons' },
  { id: 'lift-34', name: 'Cabriolet', type: 'cabrio', area: 'Canyons' },
  { id: 'lift-35', name: 'Orange Bubble Express', type: 'bubble', area: 'Park City' },
];

export const trails = [
  // Canyons Area - Beginner
  { id: 't001', name: 'Dreamcatcher', difficulty: 'green', type: 'groomed', lift: 'Dreamcatcher', area: 'Canyons' },
  { id: 't002', name: 'High Meadow', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'Canyons' },
  { id: 't003', name: 'Saddleback', difficulty: 'green', type: 'groomed', lift: 'Saddleback Express', area: 'Canyons' },
  
  // Canyons Area - Intermediate
  { id: 't004', name: 'Red Pine', difficulty: 'blue', type: 'groomed', lift: 'Red Pine Gondola', area: 'Canyons' },
  { id: 't005', name: 'Crescent', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Canyons' },
  { id: 't006', name: 'Day Break', difficulty: 'blue', type: 'groomed', lift: 'Day Break', area: 'Canyons' },
  { id: 't007', name: 'Bonanza', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Canyons' },
  { id: 't008', name: 'King Con', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'Canyons' },
  { id: 't009', name: 'Ninety-Nine', difficulty: 'blue', type: 'groomed', lift: 'Ninety-Nine Express', area: 'Canyons' },
  { id: 't010', name: 'Sun Peak', difficulty: 'blue', type: 'groomed', lift: 'Sun Peak Express', area: 'Canyons' },
  
  // Canyons Area - Advanced
  { id: 't011', name: 'Mutherlode', difficulty: 'black', type: 'groomed', lift: 'Mutherlode Express', area: 'Canyons' },
  { id: 't012', name: 'Iron Mountain', difficulty: 'black', type: 'groomed', lift: 'Iron Mountain Express', area: 'Canyons' },
  { id: 't013', name: 'Peak 5', difficulty: 'black', type: 'groomed', lift: 'Peak 5', area: 'Canyons' },
  { id: 't014', name: 'Bounty', difficulty: 'black', type: 'moguls', lift: 'Saddleback Express', area: 'Canyons' },
  { id: 't015', name: 'Slide', difficulty: 'black', type: 'moguls', lift: 'Peak 5', area: 'Canyons' },
  
  // Canyons Area - Expert
  { id: 't016', name: 'Tombstone', difficulty: 'double-black', type: 'bowl', lift: 'TomBSTONE Express', area: 'Canyons' },
  { id: 't017', name: 'The Fortress', difficulty: 'double-black', type: 'trees', lift: 'Peak 5', area: 'Canyons' },
  { id: 't018', name: 'Kelly Canyon', difficulty: 'double-black', type: 'trees', lift: 'Sun Peak Express', area: 'Canyons' },
  { id: 't019', name: '999', difficulty: 'double-black', type: 'bowl', lift: 'Ninety-Nine Express', area: 'Canyons' },
  
  // Park City Area - Beginner
  { id: 't020', name: 'First Time', difficulty: 'green', type: 'groomed', lift: 'First Time', area: 'Park City' },
  { id: 't021', name: 'Eagle', difficulty: 'green', type: 'groomed', lift: 'Eagle', area: 'Park City' },
  { id: 't022', name: 'Lower Payday', difficulty: 'green', type: 'groomed', lift: 'Town Lift', area: 'Park City' },
  
  // Park City Area - Intermediate
  { id: 't023', name: 'Payday', difficulty: 'blue', type: 'groomed', lift: 'Payday Express', area: 'Park City' },
  { id: 't024', name: 'Silver Star', difficulty: 'blue', type: 'groomed', lift: 'Silver Star', area: 'Park City' },
  { id: 't025', name: 'Silverlod', difficulty: 'blue', type: 'groomed', lift: 'Silverlod Express', area: 'Park City' },
  { id: 't026', name: 'Pioneer', difficulty: 'blue', type: 'groomed', lift: 'Pioneer', area: 'Park City' },
  { id: 't027', name: 'Thaynes', difficulty: 'blue', type: 'groomed', lift: 'Thaynes', area: 'Park City' },
  { id: 't028', name: 'High Street', difficulty: 'blue', type: 'groomed', lift: 'Town Lift', area: 'Park City' },
  
  // Park City Area - Advanced
  { id: 't029', name: 'Junior', difficulty: 'black', type: 'groomed', lift: 'Pioneer', area: 'Park City' },
  { id: 't030', name: 'Upper Payday', difficulty: 'black', type: 'groomed', lift: 'Payday Express', area: 'Park City' },
  { id: 't031', name: 'McConkey\'s', difficulty: 'black', type: 'moguls', lift: 'Iron Mountain Express', area: 'Park City' },
  { id: 't032', name: 'Twist', difficulty: 'black', type: 'moguls', lift: 'Pioneer', area: 'Park City' },
  
  // Park City Area - Expert
  { id: 't033', name: 'Lemon Twist', difficulty: 'double-black', type: 'moguls', lift: 'Pioneer', area: 'Park City' },
  { id: 't034', name: 'Killed', difficulty: 'double-black', type: 'trees', lift: 'Timberline', area: 'Park City' },
  { id: 't035', name: 'Fletcher', difficulty: 'double-black', type: 'trees', lift: 'Thaynes', area: 'Park City' },
  { id: 't036', name: 'Halfpipe', difficulty: 'double-black', type: 'terrain-park', lift: 'Orange Bubble Express', area: 'Park City' },
];

export const lodges = [
  { id: 'lodge-1', name: 'Canyons Village', area: 'Canyons' },
  { id: 'lodge-2', name: 'Park City Mountain Village', area: 'Park City' },
  { id: 'lodge-3', name: 'Silver Star Lodge', area: 'Park City' },
  { id: 'lodge-4', name: 'Legacy Lodge', area: 'Park City' },
  { id: 'lodge-5', name: 'Red Tail Grill', area: 'Canyons' },
];
