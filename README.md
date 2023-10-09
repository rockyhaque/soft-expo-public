# Soft Expo

[![Follow me on Twitter](https://img.shields.io/twitter/follow/rocky_haque10?style=social)](https://twitter.com/rocky_haque10)
[![Follow me on LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/rockyhaque/)](https://www.linkedin.com/in/rockyhaque/)


Welcome to BASIS SoftExpo 2023! It is the largest private-sector exposition in Bangladesh aimed at showcasing IT and ITES products and services. The expo is a significant event in the ICT industry, focusing on collaborative relationships at both national and international levels.

## Table of Contents

- [Event Details](#event-details)
- [Participation](#participation)
- [Features](#features)
- [Live Link](#live-link)
- [MCQ Test](#mcq-test)


## Event Details
BASIS SoftExpo is a comprehensive showcase of IT and ITES products and services, highlighting the advancements and opportunities in the ICT industry. The event will focus on fostering collaborative relationships and inviting trade delegations from various countries.

Date: 23-26 February 2023
Location: [Event Location]

## Participation
If you wish to participate in BASIS SoftExpo 2023, please follow the official [SoftExpo website](https://softexpo.com.bd) for registration and further details.



## Features

- **Register:** Provide an intuitive and user-friendly interface for user to view available conference register for them.

- **Login:** - Already signed up email, user can access their conference details

- **User Friendly UI:** User friendly UI

- **Responsive:** Responsive for mobile, tablet and large devices

- **Conference Details:** User can easily book their seat



## Live Link 
- Surge Link -> 

---

Let's Code Your Career!

## MCQ Test

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined.

<i>In the given code, there's a typo in the variable name "greetign" instead of "greeting." JavaScript will throw a ReferenceError because "greetign" is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D: 3

<i>Even though the second argument passed to the sum function is a string ("2"), JavaScript will perform type coercion and treat it as a number when trying to perform the addition operation. Therefore, the result will be 1 + 2, which equals 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>The food array is not modified in the given code. The info.favoriteFood is updated to "🍝", but this change does not affect the original food array. Therefore, when you log food, it remains unchanged with its original values.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>The function sayHi expects a parameter name, but when you call sayHi() without providing any argument, name becomes undefined. The template literal in the return statement combines "Hi there, " with the value of name, which is undefined, resulting in "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The forEach method iterates over each element in the nums array. The callback function increments the count variable by 1 for every truthy value (non-zero in this case) encountered. There are three truthy values in the nums array (1, 2, and 3), so count becomes 3 at the end of the iteration</i>

</p>
</details>
