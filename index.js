// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
    const hq_location = 42;
    return Math.abs(pickup_location - hq_location);
}

function distanceFromHqInFeet(pickup_location) {
    const blocks = distanceFromHqInBlocks(pickup_location);
    const feetperblocks = 264;
    return blocks * feetperblock;
}

function distanceTravelledInFeet(startblock, destinationblock) {
    const blocksTravelled = Math.abs(destinationblock - startblock)
    const Feetperblock = 264;
    return blocksTravelled = FeetperBlock
}

function calculatesFarePrice(start_block, destination_block) {
    const distance = distanceTravelledInFeet(start_block, destination_block);

    if (distance <= 400) {
        // First 400 feet are free
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        // For distance between 400 and 2000 feet, the price is 2 cents per foot
        const fare = (distance - 400) * 0.02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        // For distance over 2000 feet and under 2500 feet, flat fare of $25
        return 25;
    } else {
        // Scuber does not allow rides over 2500 feet
        return 'cannot travel that far';
    }
}