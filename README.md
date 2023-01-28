<div align="center">
<br>
  <p>
 <a href="https://www.npmjs.com/package/ratev"><img src="https://img.shields.io/npm/v/ratev.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/ratev"><img src="https://img.shields.io/npm/dt/ratev.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
  </p>
</div>

# **rate value**

**ratev is a simple rate value module to rate array of object and return value based on percent 0.1 or higher than 100**

- [Installation](#installation)
- [Example](#example)
- [Methods](#methods)
  - [push](#push)
  - [edit](#edit)
  - [delete](#delete)
- [Properties](#properties)
  - [value](#value)
  - [data](#data)

# **Installation**

```sh-session
npm install ratev
yarn add ratev
```

### CommonJS

```js
const Ratev = require("ratev");
const MyfirstRate = new Ratev();
```

### ES6

```js
import Ratev from "ratev";
const MyfirstRate = new Ratev();
```

## **Example**

```js
const Ratev = require("ratev");
//new Ratev support array of object or ...args of object
const MyfirstRate = new Ratev([
  { rate: 90, value: "BRONZE" }, //90% chance to return BRONZE
  { rate: 70, value: "SILVER" }, //70% chance to return SILVER
  { rate: 50, value: "GOLD" }, //50% chance to return GOLD
  {
    rate: 20,
    value: "PLATINUM", //20% chance to return PLATINUM
  },
  {
    rate: 15,
    value: "DIAMOND", //15% chance to return DIAMOND
  },
  {
    rate: 10,
    value: "MASTER", //10% chance to return MASTER
  },
  {
    rate: 0.1,
    value: "GRANDMASTER", //0.1% chance to return GRANDMASTER
  },
]);
setInterval(function () {
  console.log(MyfirstRate.value); //return random value based on rate
}, 1000);
```

<br>
<br>

## **Methods**

### **`push`**

<br>

#### push new value if ther duplicate value it will be replace with new rate

```js
MyfirstRate.push(...<Objects>);
//or
MyfirstRate.push([...<Objects>]);
```

### **EX**

<br>

#### **push(...\<Objects>);**

```js
MyfirstRate.push({ rate: 0.1, value: "CHALLENGER" });
//return array of object with new value
```

#### **push([...\<Objects>]);**

```js
MyfirstRate.push([
  { rate: 0.1, value: "CHALLENGER" },
  { rate: 0.1, value: "GRANDMASTER" },
]);
//return array of object with new value
```

### **`edit`**

<br>

#### edit multiple rate by push new rate with same value

### `same as push but it just edit rate`

```js
MyfirstRate.push(...<Objects>);
//or
MyfirstRate.push([...<Objects>]);
```

### **`delete`**

<br>

#### delete object from array of object by value you can delete multiple value by passing multiple value

```js
MyfirstRate.delete(...<valus>);
```

### **EX**

<br>

```js
MyfirstRate.delete("BRONZE", "SILVER", "GOLD");
//return array of object without BRONZE,SILVER,GOLD
```

## **Properties**

### **`value`**

<br>

#### return random value based on rate

```js
MyfirstRate.value;
```

### **`data`**

<br>

#### return array of object

```js
MyfirstRate.data;
```

## Links

- [Twiter](https://twitter.com/onlyarth)
- [Github](https://github.com/4i8)

## License

- [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
