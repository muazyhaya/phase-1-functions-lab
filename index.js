function distanceFromHqInBlocks(street) {
    if (street >= 42) {
        return street - 42;
    }
    if (street <= 42) {
        return 42 - street;
    }
}
const blockInFeet = 264
function distanceFromHqInFeet(street) {
    if (street >= 42) {
        return (street - 42) * blockInFeet;
    }
    if (street <= 42) {
        return (42 - street) * blockInFeet;
    }
}
function distanceTravelledInFeet(start, destination) {
    if (destination > start){
        return (destination - start) * 264;
    }
    if (destination < start){
        return (start - destination) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    }
    if (distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }
    if (distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500){
        return "cannot travel that far"
    }
}