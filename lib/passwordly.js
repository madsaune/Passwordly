function generate_keyspace(options) {
  let keyspace = [];

  if (options.uppercase === true) {
    keyspace.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }

  if (options.lowercase === true) {
    keyspace.push('abcdefghijklmnopqrstuvwxyz');
  }

  if (options.digits === true) {
    keyspace.push('0123456789');
  }

  if (options.symbols === true) {
    keyspace.push('@!-*#%');
  }

  return keyspace.join('');
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isValid(str, options) {

  if (options.uppercase === true && str.match(/[A-Z]/) === null) {
    return false;
  }

  if (options.lowercase === true && str.match(/[a-z]/) === null) {
    return false;
  }

  if (options.digits === true && str.match(/[0-9]/) === null) {
    return false;
  }

  if (options.symbols === true && str.match(/[@!\-*#%]/) === null) {
    return false;
  }

  return true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntRange(min, max) {
  //The maximum is inclusive and the minimum is inclusive 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_string(options) {
  const keyspace = shuffle(generate_keyspace(options).split(''));
  const result = [];

  for (let i = 0; i < options.count; i++) {

    let rndStr;

    do {

      rndStr = '';

      for (let j = 0; j < options.len; j++) {
        rndStr += keyspace[getRandomInt(keyspace.length - 1)];
      }

    } while (!isValid(rndStr, options));

    let password = [rndStr];
    if (options.prefix === true) {
      const prefixData = getRandomIntRange(1111, 9999).toString();
      password.unshift(prefixData);
    }

    if (options.suffix === true) {
      const suffixData = getRandomIntRange(1111, 9999).toString();
      password.push(suffixData);
    }

    const delimiter = options.useDelimiter ? options.delimiter : '';

    result.push(password.join(delimiter));

  }

  return result;
}

function generate_word(options) {
  const result = [];

  for (let i = 0; i < options.count; i++) {
    const words = [];

    for (let j = 0; j < options.numberOfWords; j++) {
      let word = options.wordlist[getRandomInt(options.wordlist.length - 1)];
      if (options.capitalization === 'camelcase') {
        words.push(word[0].toUpperCase() + word.slice(1));
      } else if (options.capitalization === 'uppercase') {
        words.push(word.toUpperCase());
      } else {
        words.push(word);
      }
    }

    if (options.prefix === true) {
      words.unshift(getRandomIntRange(1111, 9999).toString());
    }

    if (options.suffix === true) {
      words.push(getRandomIntRange(1111, 9999).toString());
    }

    const delimiter = options.useDelimiter ? options.delimiter : '';
    result.push(words.join(delimiter));
  }

  return result;
}

function passwordly(type, options) {
  const types = ['string', 'word'];

  if (!types.includes(type.toLowerCase())) {
    throw "'type' is of unknown value";
  }

  const defaultOptions = {
    uppercase: false,
    lowercase: false,
    digits: false,
    symbols: false,
    prefix: false,
    suffix: false,
    len: 12,
    count: 1,
    numberOfWords: 3,
    useDelimiter: true,
    delimiter: '-',
    wordlist: [
      'romantic', 'eliminate', 'communication', 'automatic',
      'management', 'replace', 'shallow', 'outside',
      'discreet', 'allowance', 'training', 'appearance',
      'important', 'topple', 'exaggerate', 'suspect',
      'suspicion', 'conscience', 'castle', 'pleasant'
    ],
    capitalization: 'camelcase'
  };

  options = Object.assign({}, defaultOptions, options);

  if (type === 'string') {
    return generate_string(options);
  } else if (type === 'word') {
    return generate_word(options);
  } else {
    throw "'type' is of unknown value";
  }
}

module.exports = passwordly;