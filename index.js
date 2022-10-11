function distanceFromHqInBlocks(trip){
  const blocksToHq = 42;
  let distance = trip - blocksToHq;
  let tripDistance = Math.abs(distance);
  return tripDistance;
};


function distanceFromHqInFeet(blocksToFeet) {
    distanceFromHqInBlocks(blocksToFeet);
    let distanceInFeet = distanceFromHqInBlocks(blocksToFeet);
    let totalFeet = distanceInFeet * 264;
    return totalFeet;
};

function distanceTravelledInFeet(start, destination) {
    let feetDistance = (destination - start) * 264;
    let absoluteFeet = Math.abs(feetDistance);
    let distanceTravelledInFeet = absoluteFeet;
    return distanceTravelledInFeet;
};

function calculatesFarePrice(start, destination){
    let feetTotalTravel = distanceTravelledInFeet(start, destination);
    
    if (feetTotalTravel <= 400) {
        return 0;
    } else if (feetTotalTravel > 400 && feetTotalTravel <= 2000) {
        return (feetTotalTravel-400) * 0.02;
    } else if (feetTotalTravel > 2000 && feetTotalTravel <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
    
};
















//describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(264);
    });

    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(2112);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(2112);
    });
  //});