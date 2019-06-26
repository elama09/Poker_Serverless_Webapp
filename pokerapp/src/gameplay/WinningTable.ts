import { Card } from '@/models/interfaces';

export function checkHandForWins(cards: Card[]) { 
  // From best to worst
  if (fiveOfaKind(cards)) {
    
  } else if (straightFlush(cards)) {

  } else if (fourOfaKind(cards)) {
    
  } else if (fullHouse(cards)) {
    
  } else if (flush(cards)) {
    
  } else if (straight(cards)) {
    
  } else if (threeOfaKind(cards)) {
    
  } else if (twoPair(cards)) {
    
  } else if (onePair(cards)) {
    
  }
}

function onePair(cards: Card[]) {
  const temp: Card[] = [];
  for (const card of cards) {
    if (temp.some((x) => x.value === card.value)) {
      return true;
    }
    temp.push(card);
  }
  return false;
}

function twoPair(cards: Card[]) {
  let temp: Card[] = [];
  let pairsFound = 0;
  for (const card of cards) {
    if (temp.some((x) => x.value === card.value)) {
      pairsFound++;
      temp = temp.filter((x) => x.value !== card.value);
    } else {
      temp.push(card);
    }
  }

  if (pairsFound === 2) {
    return true;
  }
  return false;
}

function threeOfaKind(cards: Card[]) {
  const temp: Card[] = [];
  let pairFound = false;
  let pairValue = null;

  for (const card of cards) {
    if (temp.some((x) => x.value === card.value)) {
      pairFound = true;
      pairValue = card.value;
      break;
    } else {
      temp.push(card);
    }
  }

  let cardValueCount = 0;
  if (pairFound) {
    for (const card of cards) {
      if (card.value === pairValue) {
        cardValueCount++;
      }
    }
  }

  if (cardValueCount === 3) {
    return true;
  }
  return false;
}

function fourOfaKind(cards: Card[]) {
  const temp: Card[] = [];
  let pairFound = false;
  let pairValue = null;

  for (const card of cards) {
    if (temp.some((x) => x.value === card.value)) {
      pairFound = true;
      pairValue = card.value;
      break;
    } else {
      temp.push(card);
    }
  }

  let cardValueCount = 0;
  if (pairFound) {
    for (const card of cards) {
      if (card.value === pairValue) {
        cardValueCount++;
      }
    }
  }

  if (cardValueCount === 4) {
    return true;
  }
  return false;
}

// Imposible without joker!
function fiveOfaKind(cards: Card[]) {
  const temp: Card[] = [];
  let pairFound = false;
  let pairValue = null;

  for (const card of cards) {
    if (temp.some((x) => x.value === card.value)) {
      pairFound = true;
      pairValue = card.value;
      break;
    } else {
      temp.push(card);
    }
  }

  let cardValueCount = 0;
  if (pairFound) {
    for (const card of cards) {
      if (card.value === pairValue) {
        cardValueCount++;
      }
    }
  }

  if (cardValueCount === 5) {
    return true;
  }
  return false;
}

function straight(cards: Card[]) {
  const cardsSorted = cards.sort((a, b) => (a.value < b.value ? -1 : 1));
  // Check for big exeption straight
  if (
    cardsSorted[0].value === 1 &&
    cardsSorted[1].value === 10 &&
    cardsSorted[2].value === 11 &&
    cardsSorted[3].value === 12 &&
    cardsSorted[4].value === 13
  ) {
    return true;
  }

  for (let i = 1; i < 5; i++) {
    if (cardsSorted[i - 1].value !== cardsSorted[i].value - 1) {
      return false;
    }
  }
  return true;
}

function flush(cards: Card[]) {
  const firstCard = cards[0];
  if (cards.every(x => x.suit === firstCard.suit)) {
    return true;
  } else {
    return false;
  }
}

function fullHouse(cards: Card[]) {
  const cardsSorted = cards.sort((a, b) => (a.value < b.value ? -1 : 1));
  if (
    cardsSorted[0].value === cardsSorted[1].value &&
    cardsSorted[3].value === cardsSorted[4].value &&
    (cardsSorted[1].value === cardsSorted[2].value ||
      cardsSorted[2].value === cardsSorted[3].value)
  ) {
    return true;
  } else {
    return false;
  }
}

function straightFlush(cards: Card[]) {
  if (flush(cards) && straight(cards)) {
    return true;
  } else {
    return false;
  }
}



