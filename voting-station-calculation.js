let goodStations = [];
for (let station of stations) {
  const capacity = station[1];
  if (station[2] === 'school' || station[2] === 'community centre') {
   goodStations.push(station[0]);
  }
} 
  return goodStations;
}