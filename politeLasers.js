const getLaserSetting = (unlock) => {
  if(unlock === 'please') return unlock = 'OFF';
  return unlock = 'ON';
}