# Passwordly

Passwordly is a simple password generator. It can generate random or word-based strings with a variety of options.

## Installation

`npm i passwordly --save`

## How to use

```javascript
const passwordly = require('passwordly');

passwordly('string', {
    uppercase: true,
    lowercase: true,
    digits: true
});

// Sample output: [ 'oIjENySr6eDN' ]

passwordly('string', {
    uppercase: true,
    lowercase: true,
    digits: true,
    suffix: true
});

// Sample output: [ 'YBpGsg36CVJT-3859' ]

passwordly('string', {
    uppercase: true,
    lowercase: true,
    digits: true,
    count: 3
});

// Sample output: [ 'NOBroeayPM9T', 'F3Az0Bab3sxm', '4opbY84VjlBS' ]

passwordly('string', {
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
    count: 1,
    len: 32
});

// Sample output: [ '%lyydPQpVEj6@OV!aTg@we4yIhz#yPVj' ]

passwordly('word', {
    wordlist: [
      'romantic', 'eliminate', 'communication', 'automatic',
      'management', 'replace', 'shallow', 'outside',
      'discreet', 'allowance', 'training', 'appearance',
      'important', 'topple', 'exaggerate', 'suspect',
      'suspicion', 'conscience', 'castle', 'pleasant'
    ]
});

// Sample output: [ 'Suspect-Castle-Romantic' ]

passwordly('word', {
    wordlist: [
      'romantic', 'eliminate', 'communication', 'automatic',
      'management', 'replace', 'shallow', 'outside',
      'discreet', 'allowance', 'training', 'appearance',
      'important', 'topple', 'exaggerate', 'suspect',
      'suspicion', 'conscience', 'castle', 'pleasant'
    ],
    count: 5,
    numberOfWords: 2,
    suffix: true
});

// Sample output: [
//   'Romantic-Management-2544',
//   'Outside-Important-9117',
//   'Exaggerate-Management-2972',
//   'Communication-Suspect-4402',
//   'Training-Exaggerate-6006'
// ]
```

## Options

| Property | Type | Values |
|---|:---:|---|
| uppercase | boolean | default: false |
| lowercase | boolean | default: false |
| digits | boolean | default: false |
| symbols | boolean | default: false |
| prefix | boolean | default: false |
| suffix | boolean | default: false |
| len | int | default: 12 |
| count | int | default: 1 |
| numberOfWords | int | default: 3 |
| useDelimiter | boolean | default: true |
| delimiter | string | default: '-' |
| wordlist | array | [] |
| capitalization | string | camelcase (default), uppercase, lowercase |
