function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  return n <= 1 ? 1 : n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  return ((n2 - n1 + 1) * (n1 + n2)) / 2;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.left + rect1.width <= rect2.left ||
    rect2.left + rect2.width <= rect1.left ||
    rect1.top + rect1.height <= rect2.top ||
    rect2.top + rect2.height <= rect1.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

// Оптимизированная функция поиска первого уникального символа
function findFirstSingleChar(str) {
  const counts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (const char of str) {
    if (counts[char] === 1) return char;
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const [min, max] = a < b ? [a, b] : [b, a];
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  return `${start}${min}, ${max}${end}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return parseInt(num.toString().split('').reverse().join(''), 10);
}

function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').reverse().map(Number);
  const sum = digits.reduce((acc, digit, idx) => {
    if (idx % 2 === 1) {
      const d = digit * 2;
      return acc + (d > 9 ? d - 9 : d);
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

// Оптимизированная проверка баланса скобок
function isBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    ']': '[',
    ')': '(',
    '}': '{',
    '>': '<', // Можно убрать, если не требуется
  };
  const openBrackets = new Set(Object.values(pairs));

  for (const char of str) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(paths) {
  const splitPaths = paths.map(path => path.split('/'));
  const minLength = Math.min(...splitPaths.map(p => p.length));
  const commonPath = [];

  for (let i = 0; i < minLength; i++) {
    const segment = splitPaths[0][i];
    if (splitPaths.every(p => p[i] === segment)) {
      commonPath.push(segment);
    } else {
      break;
    }
  }

  return commonPath.length ? `${commonPath.join('/')}/` : '';
}

function getMatrixProduct(m1, m2) {
  const rows = m1.length;
  const cols = m2[0].length;
  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) =>
      m1[i].reduce((sum, el, k) => sum + el * m2[k][j], 0)
    )
  );
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  for (const line of lines) {
    if (line.every(cell => cell === 'X')) return 'X';
    if (line.every(cell => cell === '0')) return '0';
  }
  return undefined;
}
