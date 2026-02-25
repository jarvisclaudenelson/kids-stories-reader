// Park City Mountain Resort - Complete Trail and Lift Data
// 7,300 acres, 341+ trails, 43 lifts, 17 peaks, 13 bowls
// Highest point: Jupiter Peak at 10,026 feet

export const lifts = [
  // Gondolas
  { id: 'lift-1', name: 'Quicksilver Gondola', type: 'gondola', area: 'Interconnect' },
  { id: 'lift-2', name: 'Red Pine Gondola', type: 'gondola', area: 'Canyons Village' },
  { id: 'lift-3', name: 'Sunrise Gondola', type: 'gondola', area: 'Canyons Village' },
  { id: 'lift-4', name: 'Frostwood Gondola', type: 'gondola', area: 'Canyons Village' },
  { id: 'lift-5', name: 'Cabriolet', type: 'gondola', area: 'Canyons Village' },
  
  // High-Speed Six-Packs
  { id: 'lift-6', name: 'Payday Express', type: 'six-pack', area: 'Park City Village' },
  { id: 'lift-7', name: 'Bonanza Express', type: 'six-pack', area: 'Park City Village' },
  { id: 'lift-8', name: 'McConkey\'s Express', type: 'six-pack', area: 'McConkey\'s' },
  { id: 'lift-9', name: 'Silverlode Express', type: 'six-pack', area: 'Silverlode' },
  { id: 'lift-10', name: 'Orange Bubble Express', type: 'six-pack', area: 'Orange Bubble' },
  
  // High-Speed Quads
  { id: 'lift-11', name: 'Crescent Express', type: 'quad', area: 'Crescent' },
  { id: 'lift-12', name: 'First Time Express', type: 'quad', area: 'Park City Village' },
  { id: 'lift-13', name: 'Motherlode Express', type: 'quad', area: 'Motherlode' },
  { id: 'lift-14', name: 'Iron Mountain Express', type: 'quad', area: 'Iron Mountain' },
  { id: 'lift-15', name: 'Ninety-Nine 90 Express', type: 'quad', area: 'Ninety-Nine 90' },
  { id: 'lift-16', name: 'Super Condor Express', type: 'quad', area: 'Super Condor' },
  { id: 'lift-17', name: 'Sun Peak Express', type: 'quad', area: 'Sun Peak' },
  { id: 'lift-18', name: 'Saddleback Express', type: 'quad', area: 'Saddleback' },
  { id: 'lift-19', name: 'Dreamcatcher', type: 'quad', area: 'Dreamcatcher' },
  { id: 'lift-20', name: 'Dreamscape', type: 'quad', area: 'Dreamscape' },
  { id: 'lift-21', name: 'King Con Express', type: 'quad', area: 'King Con' },
  { id: 'lift-22', name: 'High Meadow Express', type: 'quad', area: 'High Meadow' },
  { id: 'lift-23', name: 'Pioneer', type: 'quad', area: 'Pioneer' },
  { id: 'lift-24', name: 'Eagle', type: 'quad', area: 'Eagle' },
  { id: 'lift-25', name: 'Timberline', type: 'quad', area: 'Timberline' },
  { id: 'lift-26', name: 'Thaynes', type: 'quad', area: 'Thaynes' },
  { id: 'lift-27', name: 'Day Break', type: 'quad', area: 'Day Break' },
  { id: 'lift-28', name: 'Tombstone Express', type: 'quad', area: 'Tombstone' },
  { id: 'lift-29', name: 'Peak 5', type: 'quad', area: 'Peak 5' },
  { id: 'lift-30', name: '3 Kings', type: 'quad', area: '3 Kings' },
  { id: 'lift-31', name: 'Condor', type: 'quad', area: 'Condor' },
  
  // Double Chairs
  { id: 'lift-32', name: 'Jupiter Lift', type: 'double', area: 'Jupiter' },
  { id: 'lift-33', name: 'Town Lift', type: 'double', area: 'Town Lift' },
  { id: 'lift-34', name: 'Silver Star', type: 'double', area: 'Silver Star' },
  { id: 'lift-35', name: 'Short Cut', type: 'double', area: 'Short Cut' },
  { id: 'lift-36', name: 'Over and Out', type: 'double', area: 'Over and Out' },
  { id: 'lift-37', name: 'Flat Iron', type: 'double', area: 'Flat Iron' },
  { id: 'lift-38', name: 'Mule Train', type: 'double', area: 'Mule Train' },
  { id: 'lift-39', name: 'Sweet Pea', type: 'double', area: 'Sweet Pea' },
  { id: 'lift-40', name: 'Eaglet Lift', type: 'double', area: 'Eaglet' },
  { id: 'lift-41', name: 'Ripcord', type: 'double', area: 'Ripcord' },
];

export const trails = [
  // ==========================================
  // EXPERT - DOUBLE BLACK DIAMOND (50+ trails)
  // ==========================================
  
  // Jupiter Peak Area (highest point 10,026 ft)
  { id: 't001', name: 'East Face', difficulty: 'double-black', type: 'bowl', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't002', name: 'The Chutes', difficulty: 'double-black', type: 'chutes', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't003', name: 'Puma Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't004', name: 'Scott\'s Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't005', name: 'West Scott\'s Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't006', name: 'Pioneer Ridge', difficulty: 'double-black', type: 'ridge', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't007', name: 'Pinyon Ridge', difficulty: 'double-black', type: 'ridge', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  { id: 't008', name: 'First Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Jupiter Lift', area: 'Jupiter Peak' },
  
  // McConkey's Bowl
  { id: 't009', name: 'McConkey\'s Bowl', difficulty: 'double-black', type: 'bowl', lift: 'McConkey\'s Express', area: 'McConkey\'s' },
  { id: 't010', name: 'Molly\'s', difficulty: 'double-black', type: 'trees', lift: 'McConkey\'s Express', area: 'McConkey\'s' },
  { id: 't011', name: 'Black Forest', difficulty: 'double-black', type: 'trees', lift: 'McConkey\'s Express', area: 'McConkey\'s' },
  { id: 't012', name: '100 Turns', difficulty: 'double-black', type: 'moguls', lift: 'McConkey\'s Express', area: 'McConkey\'s' },
  
  // Ninety-Nine 90 Area
  { id: 't013', name: 'Red Pine Chute', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't014', name: 'Magic Line', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't015', name: 'Charlie Brown', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't016', name: 'Whippets Chutes', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't017', name: 'Rhino', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't018', name: '6 Bells', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't019', name: 'Fright Gully', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't020', name: 'New Moon', difficulty: 'double-black', type: 'chutes', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  
  // Super Condor Area
  { id: 't021', name: 'Condor Woods', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't022', name: 'Escapade Woods', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't023', name: 'Shadow Lands', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't024', name: 'O-Zone', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't025', name: 'P-Zone', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't026', name: 'Lucky Boy', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't027', name: 'Portuguese Gap', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't028', name: 'A Chute', difficulty: 'double-black', type: 'chutes', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't029', name: 'Saddle Chutes', difficulty: 'double-black', type: 'chutes', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't030', name: 'Blueslip Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't031', name: 'Fortune Teller', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't032', name: 'Murdock\'s Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't033', name: 'Silver King', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't034', name: 'Dead Tree', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't035', name: 'Junipers', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't036', name: 'Silver Cliff', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't037', name: 'Quarter Moon', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't038', name: 'Silverado Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't039', name: 'Diablo', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't040', name: 'Deshutes', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't041', name: 'High Peak', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't042', name: 'Linelite', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't043', name: 'Constellation', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't044', name: '10th Mountain', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't045', name: 'Chimera', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't046', name: 'Black Hole', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't047', name: 'The Hoist', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't048', name: 'War Zone', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't049', name: 'Abyss', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't050', name: 'Dutch Hollow', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't051', name: 'Silver Horse', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't052', name: 'West Face', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't053', name: 'Commitment', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't054', name: 'Two Goons', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't055', name: 'Shaft', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't056', name: 'Mikey\'s', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't057', name: 'Lynx', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't058', name: 'Silver Skis', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't059', name: 'Tower', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't060', name: 'Quantum Leap', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't061', name: 'Snow Draw', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't062', name: 'Glory Hole', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't063', name: 'Bogeyman', difficulty: 'double-black', type: 'trees', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't064', name: 'Massacre', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't065', name: 'Vertigo', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't066', name: 'After Shock', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't067', name: 'Silverado', difficulty: 'double-black', type: 'bowl', lift: 'Super Condor Express', area: 'Super Condor' },
  
  // Iron Mountain Area
  { id: 't068', name: 'Cobalt Woods', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't069', name: 'Tree Time', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't070', name: 'Platinum Woods', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't071', name: 'Sticks and Stones', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't072', name: 'Erika\'s Gold', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't073', name: 'Rendezvous Ridge', difficulty: 'double-black', type: 'ridge', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't074', name: 'Fantasy Ridge', difficulty: 'double-black', type: 'ridge', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't075', name: 'Paradise Chutes', difficulty: 'double-black', type: 'chutes', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't076', name: 'Half Moon', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't077', name: 'Western Boundary', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't078', name: 'Lone Pine', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't079', name: 'Eagle', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't080', name: 'Main Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't081', name: 'Five Trees', difficulty: 'double-black', type: 'trees', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't082', name: 'Badlands', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't083', name: 'Twister', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't084', name: 'Solace', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't085', name: 'Funnel Cloud', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't086', name: 'Thrasher', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't087', name: 'Fools Gold', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't088', name: '1st Bowl', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't089', name: 'Renny\'s Ridge', difficulty: 'double-black', type: 'ridge', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't090', name: 'Specter', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't091', name: 'Willy\'s Run', difficulty: 'double-black', type: 'bowl', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  
  // Motherlode Area
  { id: 't092', name: 'Motherlode Meadows', difficulty: 'double-black', type: 'moguls', lift: 'Motherlode Express', area: 'Motherlode' },
  { id: 't093', name: 'Mikey\'s', difficulty: 'double-black', type: 'trees', lift: 'Motherlode Express', area: 'Motherlode' },
  { id: 't094', name: 'Fools Paradise', difficulty: 'double-black', type: 'bowl', lift: 'Motherlode Express', area: 'Motherlode' },
  { id: 't095', name: 'Molly\'s', difficulty: 'double-black', type: 'trees', lift: 'Motherlode Express', area: 'Motherlode' },
  
  // Tombstone Area
  { id: 't096', name: 'Tombstone', difficulty: 'double-black', type: 'bowl', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't097', name: 'The Pines', difficulty: 'double-black', type: 'trees', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't098', name: 'Yard Sale', difficulty: 'double-black', type: 'trees', lift: 'Tombstone Express', area: 'Tombstone' },
  
  // Peak 5 Area
  { id: 't099', name: 'Peak 5', difficulty: 'double-black', type: 'bowl', lift: 'Peak 5', area: 'Peak 5' },
  { id: 't100', name: 'The Fortress', difficulty: 'double-black', type: 'trees', lift: 'Peak 5', area: 'Peak 5' },
  
  // Dreamcatcher Area
  { id: 't101', name: 'Kelly Canyon', difficulty: 'double-black', type: 'trees', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  
  // Saddleback Area
  { id: 't102', name: 'The Aspens', difficulty: 'double-black', type: 'trees', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't103', name: 'Mystic Pines', difficulty: 'double-black', type: 'trees', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't104', name: 'Picabo\'s Run', difficulty: 'double-black', type: 'bowl', lift: 'Saddleback Express', area: 'Saddleback' },
  
  // Thaynes Area
  { id: 't105', name: 'Thaynes', difficulty: 'double-black', type: 'bowl', lift: 'Thaynes', area: 'Thaynes' },
  { id: 't106', name: 'Fletcher', difficulty: 'double-black', type: 'trees', lift: 'Thaynes', area: 'Thaynes' },
  
  // Pioneer Area
  { id: 't107', name: 'Lemon Twist', difficulty: 'double-black', type: 'moguls', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't108', name: 'Killed', difficulty: 'double-black', type: 'trees', lift: 'Timberline', area: 'Timberline' },
  
  // Orange Bubble Area
  { id: 't109', name: 'Halfpipe', difficulty: 'double-black', type: 'terrain-park', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't110', name: 'Pinball Alley', difficulty: 'double-black', type: 'moguls', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't111', name: 'Short Fuse', difficulty: 'double-black', type: 'moguls', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't112', name: 'Talus Garden', difficulty: 'double-black', type: 'bowl', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  
  // ==========================================
  // ADVANCED - BLACK DIAMOND (100+ trails)
  // ==========================================
  
  // Crescent Area
  { id: 't113', name: 'Crescent', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't114', name: 'Bounty', difficulty: 'black', type: 'moguls', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't115', name: 'Climax', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't116', name: 'Seldom Seen', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't117', name: 'Monitor', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't118', name: 'Temptation', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't119', name: 'Sitka', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't120', name: 'Double Nickel', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't121', name: 'The Drop', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't122', name: 'Iron Man', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't123', name: 'Encore', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't124', name: 'Tycoon', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't125', name: 'Waterfall', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't126', name: 'Gold Finger', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't127', name: 'Transitions', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't128', name: 'Upper Crowning Glory', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't129', name: 'Comstock', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't130', name: 'Liberty', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't131', name: 'Dividend', difficulty: 'black', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  
  // Payday Area
  { id: 't132', name: 'Upper Payday', difficulty: 'black', type: 'groomed', lift: 'Payday Express', area: 'Payday' },
  { id: 't133', name: 'Prospector', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't134', name: 'Lost Prospector', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't135', name: 'King\'s Crown', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't136', name: 'Retreat', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't137', name: 'Silver Streak', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't138', name: 'Upper Apex Ridge', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't139', name: 'Heavy Metal', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't140', name: 'Cloud 9', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't141', name: 'Thunder', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't142', name: 'Dynamite', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't143', name: 'Super Fury', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't144', name: 'Eureka', difficulty: 'black', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  
  // Bonanza Area
  { id: 't145', name: 'Sundog', difficulty: 'black', type: 'moguls', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't146', name: 'Arrowhead', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't147', name: 'Eclipse', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't148', name: 'Pinecone', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't149', name: 'Jupiter Access', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't150', name: 'Ligety Split', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't151', name: 'Bliss', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't152', name: 'Bugle Ridge', difficulty: 'black', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't153', name: 'Puma Bowl', difficulty: 'black', type: 'bowl', lift: 'Bonanza Express', area: 'Bonanza' },
  
  // Thaynes Area
  { id: 't154', name: 'Thaynes', difficulty: 'black', type: 'groomed', lift: 'Thaynes', area: 'Thaynes' },
  { id: 't155', name: 'Road to Thaynes Canyon', difficulty: 'black', type: 'groomed', lift: 'Thaynes', area: 'Thaynes' },
  { id: 't156', name: 'Powder Alley', difficulty: 'black', type: 'groomed', lift: 'Thaynes', area: 'Thaynes' },
  
  // Pioneer Area
  { id: 't157', name: 'Junior', difficulty: 'black', type: 'groomed', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't158', name: 'Twist', difficulty: 'black', type: 'moguls', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't159', name: 'McConkey\'s', difficulty: 'black', type: 'moguls', lift: 'Iron Mountain Express', area: 'McConkey\'s' },
  { id: 't160', name: '999', difficulty: 'black', type: 'bowl', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  
  // Silverlode Area
  { id: 't161', name: 'Carbide Cut', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't162', name: 'Parley\'s Park', difficulty: 'black', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  
  // King Con Area
  { id: 't163', name: 'King Con', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't164', name: 'King Con Ridge', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't165', name: 'Sixes', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't166', name: 'Outlaw', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't167', name: 'White Pine', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't168', name: 'Dawn', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't169', name: 'Sidewinder', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't170', name: 'Diamond Ridge', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't171', name: 'Aspen Grove', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't172', name: 'Phantasm', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't173', name: 'Ladies SL', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't174', name: 'Men\'s SL', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't175', name: 'C.B.\'s Run', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't176', name: 'Shadow Ridge', difficulty: 'black', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  
  // Orange Bubble Area
  { id: 't177', name: 'Doc\'s Run', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't178', name: 'Upper Lookout Ridge', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't179', name: 'Lookout Ridge', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't180', name: 'Canis Lupis', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't181', name: 'Keystone', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't182', name: 'Shamus', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  { id: 't183', name: 'Blaise\'s Way', difficulty: 'black', type: 'groomed', lift: 'Orange Bubble Express', area: 'Orange Bubble' },
  
  // ==========================================
  // INTERMEDIATE - BLUE (120+ trails)
  // ==========================================
  
  // Payday Area
  { id: 't184', name: 'Payday', difficulty: 'blue', type: 'groomed', lift: 'Payday Express', area: 'Payday' },
  { id: 't185', name: 'Lower Payday', difficulty: 'blue', type: 'groomed', lift: 'Payday Express', area: 'Payday' },
  { id: 't186', name: 'High Street', difficulty: 'blue', type: 'groomed', lift: 'Town Lift', area: 'Town Lift' },
  
  // Silverlode Area
  { id: 't187', name: 'Silverlode', difficulty: 'blue', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't188', name: 'Silver Star', difficulty: 'blue', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't189', name: 'Silver Star Access', difficulty: 'blue', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  
  // Crescent Area
  { id: 't190', name: 'Crescent', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't191', name: 'Lower Crowning Glory', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't192', name: 'Cascade', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't193', name: 'Showcase', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't194', name: 'Panorama', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't195', name: 'Treasure Hollow', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't196', name: 'Pick\'n Shovel', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't197', name: 'Royal', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't198', name: 'Alley', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't199', name: 'Illusion', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't200', name: 'Rhapsody', difficulty: 'blue', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  
  // Bonanza Area
  { id: 't201', name: 'Bonanza', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't202', name: 'Broadway', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't203', name: 'Georgeanna', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't204', name: 'Woodside', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't205', name: 'Blanche', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't206', name: 'Flying Salmon', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't207', name: 'Lazy Day', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't208', name: 'Mel\'s Alley', difficulty: 'blue', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  
  // King Con Area
  { id: 't209', name: 'King Con Run', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't210', name: 'Sunnyside', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't211', name: 'Gold Finger', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't212', name: 'Tranquility', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't213', name: 'Hidden Splendor', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't214', name: 'Creole', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't215', name: 'Powder Keg', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't216', name: 'Spider Monkey', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't217', name: 'Hawk Eye', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't218', name: 'High Card', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't219', name: 'Indicator', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't220', name: 'Silver Hollow', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't221', name: 'Tin Cup', difficulty: 'blue', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  
  // Saddleback Area
  { id: 't222', name: 'Saddleback', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't223', name: 'Kokopelli', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't224', name: 'Snow Dancer', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't225', name: 'Wapiti', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't226', name: 'Red Fox', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't227', name: 'The Draw', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't228', name: 'Broken Arrow', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  { id: 't229', name: 'Chance', difficulty: 'blue', type: 'groomed', lift: 'Saddleback Express', area: 'Saddleback' },
  
  // Dreamcatcher Area
  { id: 't230', name: 'Dreamcatcher', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  { id: 't231', name: 'Trance', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  { id: 't232', name: 'Reaper', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  { id: 't233', name: 'Peace', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  { id: 't234', name: 'Gotcha Cut-Off', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  { id: 't235', name: 'EZ Street', difficulty: 'blue', type: 'groomed', lift: 'Dreamcatcher', area: 'Dreamcatcher' },
  
  // Dreamscape Area
  { id: 't236', name: 'Alpenglow', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't237', name: 'Mirage', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't238', name: 'Apparition', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't239', name: 'Twilight', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't240', name: 'Assessment', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't241', name: 'Sleep Walker', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't242', name: 'Day Dream', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't243', name: 'Combustion', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't244', name: 'Sleeper', difficulty: 'blue', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  
  // Iron Mountain Area
  { id: 't245', name: 'Mercury', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't246', name: 'Copperhead', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't247', name: 'Boa', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't248', name: 'Upper Boa', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't249', name: 'Lower Boa', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't250', name: 'White Water', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't251', name: 'Heckler', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't252', name: 'Echo', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't253', name: 'Deja Vu', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't254', name: 'Harmony', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't255', name: 'Raptor Way', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  { id: 't256', name: 'Pinyon Ridge', difficulty: 'blue', type: 'groomed', lift: 'Iron Mountain Express', area: 'Iron Mountain' },
  
  // Super Condor Area
  { id: 't257', name: 'Apex Ridge', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't258', name: 'Thunder Road', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't259', name: 'Kestrel', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't260', name: 'Belmont', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't261', name: 'Renegade', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't262', name: 'Silver Queen', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't263', name: 'Elk Ridge', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't264', name: 'Pigment', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't265', name: 'Devil\'s Friend', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't266', name: 'Sampson', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  { id: 't267', name: 'Shadows', difficulty: 'blue', type: 'groomed', lift: 'Super Condor Express', area: 'Super Condor' },
  
  // Tombstone Area
  { id: 't268', name: 'Paradise', difficulty: 'blue', type: 'moguls', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't269', name: 'Red Pine Road', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't270', name: 'Chicane', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't271', name: 'Pipe Dream', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't272', name: 'Grizzly', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't273', name: 'Buckeye', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't274', name: 'McDonald\'s Meadow', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't275', name: 'Off Ramp', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't276', name: 'Newport', difficulty: 'blue', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  
  // Ninety-Nine 90 Area
  { id: 't277', name: '94 Turns', difficulty: 'blue', type: 'groomed', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't278', name: 'Aspen Grove', difficulty: 'blue', type: 'groomed', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't279', name: 'Moraine', difficulty: 'blue', type: 'groomed', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  { id: 't280', name: 'Gallery', difficulty: 'blue', type: 'groomed', lift: 'Ninety-Nine 90 Express', area: 'Ninety-Nine 90' },
  
  // Sun Peak Area
  { id: 't281', name: 'Sun Peak', difficulty: 'blue', type: 'groomed', lift: 'Sun Peak Express', area: 'Sun Peak' },
  { id: 't282', name: 'Ninety-Nine', difficulty: 'blue', type: 'groomed', lift: 'Sun Peak Express', area: 'Sun Peak' },
  { id: 't283', name: 'Sunrise', difficulty: 'blue', type: 'groomed', lift: 'Sun Peak Express', area: 'Sun Peak' },
  
  // Day Break Area
  { id: 't284', name: 'Day Break', difficulty: 'blue', type: 'groomed', lift: 'Day Break', area: 'Day Break' },
  { id: 't285', name: 'Iron Mountain', difficulty: 'blue', type: 'groomed', lift: 'Day Break', area: 'Day Break' },
  
  // Timberline Area
  { id: 't286', name: 'Thaynes Canyon', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't287', name: 'Single Jack', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't288', name: 'Double Jack', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't289', name: 'Aplande', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't290', name: 'Nail Driver', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't291', name: 'Ripsaw', difficulty: 'blue', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  
  // Pioneer Area
  { id: 't292', name: 'Pioneer', difficulty: 'blue', type: 'groomed', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't293', name: 'Pine Draw', difficulty: 'blue', type: 'groomed', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't294', name: 'Sandman', difficulty: 'blue', type: 'groomed', lift: 'Pioneer', area: 'Pioneer' },
  { id: 't295', name: 'Pioneer Ridge', difficulty: 'blue', type: 'groomed', lift: 'Pioneer', area: 'Pioneer' },
  
  // Red Pine Area
  { id: 't296', name: 'Red Pine', difficulty: 'blue', type: 'groomed', lift: 'Red Pine Gondola', area: 'Red Pine' },
  { id: 't297', name: 'White Pine', difficulty: 'blue', type: 'groomed', lift: 'Red Pine Gondola', area: 'Red Pine' },
  { id: 't298', name: 'Upper White Pine', difficulty: 'blue', type: 'groomed', lift: 'Red Pine Gondola', area: 'Red Pine' },
  
  // High Meadow Area
  { id: 't299', name: 'High Meadow', difficulty: 'blue', type: 'groomed', lift: 'High Meadow Express', area: 'High Meadow' },
  { id: 't300', name: 'Mimi\'s Way', difficulty: 'blue', type: 'groomed', lift: 'High Meadow Express', area: 'High Meadow' },
  { id: 't301', name: 'Rose Bud', difficulty: 'blue', type: 'groomed', lift: 'High Meadow Express', area: 'High Meadow' },
  
  // 3 Kings Area
  { id: 't302', name: '3 Kings', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't303', name: 'Jonesy\'s', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't304', name: 'Winter Way', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't305', name: 'Hot Spot', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't306', name: 'Boomer', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't307', name: 'Blaster', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't308', name: 'TNT', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't309', name: 'Detonator', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't310', name: 'Powder Monkey', difficulty: 'blue', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  
  // Quicksilver Area
  { id: 't311', name: 'Quicksilver', difficulty: 'blue', type: 'groomed', lift: 'Quicksilver Gondola', area: 'Quicksilver' },
  { id: 't312', name: 'Flat Iron', difficulty: 'blue', type: 'groomed', lift: 'Flat Iron', area: 'Flat Iron' },
  
  // Over and Out Area
  { id: 't313', name: 'Over and Out', difficulty: 'blue', type: 'groomed', lift: 'Over and Out', area: 'Over and Out' },
  
  // ==========================================
  // BEGINNER - GREEN (60+ trails)
  // ==========================================
  
  // First Time Area
  { id: 't314', name: 'First Time', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  { id: 't315', name: 'Upper First Time', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  { id: 't316', name: '3/4 Load', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  { id: 't317', name: 'EZ Street', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  
  // Eagle Area
  { id: 't318', name: 'Eagle', difficulty: 'green', type: 'groomed', lift: 'Eagle', area: 'Eagle' },
  { id: 't319', name: 'Little Eagle', difficulty: 'green', type: 'groomed', lift: 'Eaglet Lift', area: 'Eagle' },
  
  // Home Run Area (Main Green Run)
  { id: 't320', name: 'Home Run', difficulty: 'green', type: 'groomed', lift: 'Payday Express', area: 'Home Run' },
  { id: 't321', name: 'Lower Home Run', difficulty: 'green', type: 'groomed', lift: 'Town Lift', area: 'Home Run' },
  
  // Claimjumper Area
  { id: 't322', name: 'Claim Jumper', difficulty: 'green', type: 'groomed', lift: 'Silverlode Express', area: 'Claim Jumper' },
  
  // Snowdancer Area
  { id: 't323', name: 'Snowdancer', difficulty: 'green', type: 'groomed', lift: 'Saddleback Express', area: 'Snowdancer' },
  { id: 't324', name: 'Badger\'s Bypass', difficulty: 'green', type: 'groomed', lift: 'Saddleback Express', area: 'Snowdancer' },
  
  // Mellow Moose Area (Learning Zone)
  { id: 't325', name: 'Mellow Moose', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'Mellow Moose' },
  { id: 't326', name: 'Turtle Trail', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'Mellow Moose' },
  { id: 't327', name: 'Drift', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'Mellow Moose' },
  { id: 't328', name: 'Willow Draw', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'Mellow Moose' },
  
  // Town Lift Area
  { id: 't329', name: 'Town', difficulty: 'green', type: 'groomed', lift: 'Town Lift', area: 'Town Lift' },
  { id: 't330', name: 'Main Street', difficulty: 'green', type: 'groomed', lift: 'Town Lift', area: 'Town Lift' },
  
  // Silver Star Area
  { id: 't331', name: 'Silver Spur', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't332', name: 'Golden Spruce', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't333', name: 'Painted Horse', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  
  // King Con Area
  { id: 't334', name: 'Spur', difficulty: 'green', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't335', name: 'Chrome Alley', difficulty: 'green', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't336', name: 'Alley Cat', difficulty: 'green', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  
  // Crescent Area
  { id: 't337', name: 'Mid Mountain', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't338', name: 'Mid-Mtn Cutoff', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't339', name: 'Treasure Hollow', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  
  // Bonanza Area
  { id: 't340', name: 'South Fork', difficulty: 'green', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't341', name: 'Powder Alley', difficulty: 'green', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  
  // Short Cut Area
  { id: 't342', name: 'Short Cut', difficulty: 'green', type: 'groomed', lift: 'Short Cut', area: 'Short Cut' },
  { id: 't343', name: 'Shortliner', difficulty: 'green', type: 'groomed', lift: 'Short Cut', area: 'Short Cut' },
  
  // Sweet Pea Area
  { id: 't344', name: 'Sweet Pea', difficulty: 'green', type: 'groomed', lift: 'Sweet Pea', area: 'Sweet Pea' },
  
  // Ripcord Area
  { id: 't345', name: 'Ripcord', difficulty: 'green', type: 'groomed', lift: 'Ripcord', area: 'Ripcord' },
  
  // Additional Green Trails
  { id: 't346', name: '1-2 Load', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  { id: 't347', name: '1-4 Load', difficulty: 'green', type: 'groomed', lift: 'First Time Express', area: 'First Time' },
  { id: 't348', name: 'The Highway', difficulty: 'green', type: 'groomed', lift: 'Town Lift', area: 'Town Lift' },
  { id: 't349', name: 'Spiro', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't350', name: 'Mainline', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't351', name: 'Upper Mainline', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't352', name: 'Zeke\'s Road', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't353', name: 'Backstreet', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't354', name: 'Bugle Ridge Bypass', difficulty: 'green', type: 'groomed', lift: 'Bonanza Express', area: 'Bonanza' },
  { id: 't355', name: 'Chicane Bypass', difficulty: 'green', type: 'groomed', lift: 'Tombstone Express', area: 'Tombstone' },
  { id: 't356', name: 'Hidden Bear', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'High Meadow' },
  { id: 't357', name: 'RDR', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't358', name: 'Flat Iron', difficulty: 'green', type: 'groomed', lift: 'Flat Iron', area: 'Flat Iron' },
  { id: 't359', name: 'Oops', difficulty: 'green', type: 'groomed', lift: 'High Meadow Express', area: 'High Meadow' },
  { id: 't360', name: 'Road D.O.', difficulty: 'green', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
  { id: 't361', name: 'Elk Dance', difficulty: 'green', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't362', name: 'Muckers', difficulty: 'green', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't363', name: 'Sanctuary', difficulty: 'green', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't364', name: 'Golden Glades', difficulty: 'green', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't365', name: 'Hurricane Alley', difficulty: 'green', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't366', name: 'End Zone', difficulty: 'green', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't367', name: 'Tunnel of Fun', difficulty: 'green', type: 'groomed', lift: '3 Kings', area: '3 Kings' },
  { id: 't368', name: 'Flume', difficulty: 'green', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't369', name: 'Serenity', difficulty: 'green', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't370', name: 'Mid-Mountain Meadows', difficulty: 'green', type: 'groomed', lift: 'Dreamscape', area: 'Dreamscape' },
  { id: 't371', name: 'Upper Silver Skis', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't372', name: 'Lower Silver Skis', difficulty: 'green', type: 'groomed', lift: 'Silver Star', area: 'Silver Star' },
  { id: 't373', name: 'Quitter', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't374', name: 'Escape', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't375', name: 'Another World', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't376', name: 'Quit \'N Time', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't377', name: 'Lead Foot', difficulty: 'green', type: 'groomed', lift: 'Timberline', area: 'Timberline' },
  { id: 't378', name: 'STH', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't379', name: 'Lightning', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't380', name: 'Mine Shaft', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't381', name: 'G-Force', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't382', name: 'Widowmaker', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't383', name: 'Snow Meadow', difficulty: 'green', type: 'groomed', lift: 'Crescent Express', area: 'Crescent' },
  { id: 't384', name: 'Vista', difficulty: 'green', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't385', name: 'Ectasy', difficulty: 'green', type: 'groomed', lift: 'Silverlode Express', area: 'Silverlode' },
  { id: 't386', name: 'Courchevel', difficulty: 'green', type: 'groomed', lift: 'King Con Express', area: 'King Con' },
];

export const lodges = [
  { id: 'lodge-1', name: 'Canyons Village', area: 'Canyons' },
  { id: 'lodge-2', name: 'Park City Mountain Village', area: 'Park City' },
  { id: 'lodge-3', name: 'Silver Star Lodge', area: 'Park City' },
  { id: 'lodge-4', name: 'Legacy Lodge', area: 'Park City' },
  { id: 'lodge-5', name: 'Red Tail Grill', area: 'Canyons' },
  { id: 'lodge-6', name: 'Miner\'s Camp', area: 'Park City' },
  { id: 'lodge-7', name: 'Cloud Dine', area: 'Canyons' },
  { id: 'lodge-8', name: 'The Summit House', area: 'Park City' },
  { id: 'lodge-9', name: 'Mid-Mountain Lodge', area: 'Park City' },
  { id: 'lodge-10', name: 'Empire Canyon Lodge', area: 'Canyons' },
];

export const mountainStats = {
  name: 'Park City Mountain Resort',
  totalAcres: 7300,
  totalTrails: 341,
  totalLifts: 43,
  totalBowls: 13,
  totalPeaks: 17,
  highestPoint: {
    name: 'Jupiter Peak',
    elevation: 10026,
    unit: 'feet'
  },
  baseElevation: 6900,
  verticalRise: 3130,
  terrainBreakdown: {
    beginner: 8,
    intermediate: 41,
    advanced: 51
  },
  annualSnowfall: {
    amount: 365,
    unit: 'inches'
  },
  location: {
    city: 'Park City',
    state: 'Utah',
    country: 'USA'
  }
};

export const peaks = [
  { id: 'peak-1', name: 'Jupiter Peak', elevation: 10026, area: 'Jupiter' },
  { id: 'peak-2', name: 'Ninety-Nine 90', elevation: 9990, area: 'Ninety-Nine 90' },
  { id: 'peak-3', name: 'Super Condor Peak', elevation: 9800, area: 'Super Condor' },
  { id: 'peak-4', name: 'McConkey\'s Peak', elevation: 9500, area: 'McConkey\'s' },
  { id: 'peak-5', name: 'Iron Mountain', elevation: 9200, area: 'Iron Mountain' },
  { id: 'peak-6', name: 'Tombstone Peak', elevation: 9100, area: 'Tombstone' },
  { id: 'peak-7', name: 'Sun Peak', elevation: 8900, area: 'Sun Peak' },
  { id: 'peak-8', name: 'Saddleback Peak', elevation: 8700, area: 'Saddleback' },
  { id: 'peak-9', name: 'Dreamcatcher Peak', elevation: 8500, area: 'Dreamcatcher' },
  { id: 'peak-10', name: 'Dreamscape Peak', elevation: 8400, area: 'Dreamscape' },
  { id: 'peak-11', name: 'King Con Peak', elevation: 8200, area: 'King Con' },
  { id: 'peak-12', name: 'Silverlode Peak', elevation: 8000, area: 'Silverlode' },
  { id: 'peak-13', name: 'Payday Peak', elevation: 7800, area: 'Payday' },
  { id: 'peak-14', name: 'Crescent Peak', elevation: 7600, area: 'Crescent' },
  { id: 'peak-15', name: 'Bonanza Peak', elevation: 7400, area: 'Bonanza' },
  { id: 'peak-16', name: 'Pioneer Peak', elevation: 7200, area: 'Pioneer' },
  { id: 'peak-17', name: 'Thaynes Peak', elevation: 7000, area: 'Thaynes' },
];

export const bowls = [
  { id: 'bowl-1', name: 'McConkey\'s Bowl', peak: 'McConkey\'s', difficulty: 'expert' },
  { id: 'bowl-2', name: 'Jupiter Bowl', peak: 'Jupiter Peak', difficulty: 'expert' },
  { id: 'bowl-3', name: 'Scott\'s Bowl', peak: 'Jupiter Peak', difficulty: 'expert' },
  { id: 'bowl-4', name: 'Puma Bowl', peak: 'Jupiter Peak', difficulty: 'expert' },
  { id: 'bowl-5', name: 'First Bowl', peak: 'Jupiter Peak', difficulty: 'expert' },
  { id: 'bowl-6', name: 'Murdock\'s Bowl', peak: 'Super Condor', difficulty: 'expert' },
  { id: 'bowl-7', name: 'Silverado Bowl', peak: 'Super Condor', difficulty: 'expert' },
  { id: 'bowl-8', name: 'Blueslip Bowl', peak: 'Super Condor', difficulty: 'expert' },
  { id: 'bowl-9', name: 'Paradise Bowl', peak: 'Iron Mountain', difficulty: 'expert' },
  { id: 'bowl-10', name: '1st Bowl', peak: 'Iron Mountain', difficulty: 'expert' },
  { id: 'bowl-11', name: 'Main Bowl', peak: 'Iron Mountain', difficulty: 'expert' },
  { id: 'bowl-12', name: 'Silver King Bowl', peak: 'Super Condor', difficulty: 'expert' },
  { id: 'bowl-13', name: 'Motherlode Bowl', peak: 'Motherlode', difficulty: 'expert' },
];
