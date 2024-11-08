# The significance of union and intersection types in Typescript.

## Union types

It allows to use more than one type for a single variable or function.

**For example:**

```sh
let data: string | number | boolean;
```

#### Significance of Union type:

- Union type gives us the flexibility to write the code into versatile way. It helps us to choose more than one type in a single variable or param.
- We can use union type for type guard as well. That helps us to code easily for different types of data.

## Intersaction types

It allows us to combine two or more types into one type.

**For example:**

```sh
type Personal = {
name: string;
age: number;
}

type Contact = {
address: string;
email: string;
}

type Person = Personal & Contact;
```

It helps us to make a combination of two or more types in one.

#### Significance of Intersection type

- It helps us to combine more than two types into one type without changing the original type.
- It is useful to make a combination from various type into one.
