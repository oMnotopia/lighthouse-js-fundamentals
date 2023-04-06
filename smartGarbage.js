const smartGarbage = function(trash, bins) {
  switch(trash) {
    case 'waste':
      bins.waste++;
      break
    case 'recycling':
      bins.recycling++;
      break;
    case 'compost':
      bins.compost++;
      break;
  }

  return bins
}
const bins = { waste: 4, recycling: 2, compost: 5 }
console.log(bins)
smartGarbage('recycling', bins);
console.log(bins)