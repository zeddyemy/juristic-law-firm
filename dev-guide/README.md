# Developer Guides For Consistency across the Code Base.

The following guidelines have been put in place to ensure consistency and good collaboration across this project.

Please Ensure you follow this conventions religiously.

## 1. General Coding Conventions

### 1.1. Code Structure and Organization

- Folder Structure:

    - `src`: All source code.
    - `src/components/`: Reusable React components.
    - `src/components/layout/`: Reusable React components for page Layout.
    - `src/components/ui`: Reusable React UI components.
    - `src/pages/ `: Page-level components.
    - `src/assets/`: Images, fonts, and other static assets.
    - `src/assets/styles/`: Global styles and theming.
    - `src/utils/ `: Utility functions and helpers.
    - `src/hooks/ `: Custom React hooks.
    - `src/services/  `: API calls and services.

- File Naming:
    - Use **PascalCase** for React component filenames (e.g., `UserCard.jsx`).
    - Use **camelCase** for utility functions and hooks (e.g., `useFetch.js`).

### 1.2. Code Formatting

- Indentation: Use 4 spaces for indentation.
- Semicolons: Always use semicolons at the end of statements.
- Quotes: Use double quotes (") for strings.
- Line Length: Keep lines under 80 characters where possible.
- Trailing Commas: Use trailing commas in multi-line objects and arrays.

### 1.3. Git Practices

- Commit Messages:
    - Use clear, descriptive messages.
    - Follow the Conventional Commits format:
        - feat: add user authentication
        - fix: resolve login bug
        - docs: update README
- Branch Naming:
    - As previously mentioned, use prefixes like feature/, bugfix/, hotfix/ followed by a descriptive name.

---

## 2. General Coding Conventions

### 2.1. BEM (Block, Element, Modifier)

Using BEM helps in writing modular and reusable CSS.

- Block: Represents a standalone component (e.g., card).
- Element: Represents a part of a block (e.g., card\_\_title).
- Modifier: Represents a different state or version of a block or element (e.g., card--highlighted).

**Examples:**

```CSS
/* Block */
.card {}

/* Element */
.card__title {}

/* Modifier */
.card--highlighted {}

```

### 2.2. Utility Classes with Bootstrap

When using Bootstrap utility classes, combine them with your custom classes as needed.

Example:

```jsx
<div className="card mb-4 shadow-sm">
    <h2 className="card__title text-primary">Title</h2>
</div>
```

---

## 3. React Conventions

### 3.1. Component Structure

- **Functional Components:** Prefer functional components over class-based components.
- **Hooks:** Use React Hooks for state and side effects.
- **Single Responsibility Principle:** Each component should have a single responsibility.

**Example:**

```jsx
// Correct
const UserCard = ({ user }) => {
    return (
        <div className="card">
            <h2 className="card__title">{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

// Incorrect - Doing too much
class UserCard extends React.Component {
    // ...
}
```

### 3.2. Props and State

- Destructuring Props: Destructure props at the beginning of the component.
- PropTypes: Define PropTypes for component props to ensure type safety.

**Example:**

```jsx
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
    const { name, email } = user;
    return (
        <div className="card">
            <h2 className="card__title">{name}</h2>
            <p>{email}</p>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};
```

### 3.3. Reusable Components
- Create Reusable Components: Identify and create reusable components for commonly used UI elements (e.g., buttons, cards, modals).

**Example: Creating a Reusable Button Component**
```jsx
// components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '' }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
```

**Usage**
```jsx
import Button from './components/Button';

const App = () => (
  <Button className="btn-primary" onClick={handleClick}>
    Click Me
  </Button>
);
```

## 4. Bootstrap Conventions

### 4.1. Grid System
- Use Container, Row, and Col: Leverage Bootstrap’s grid system for responsive layouts.

- The Project will utilize React-Bootstrap Library. So Its react component should be used in most cases.

**Example:**
```jsx
<Container className="custom-class">
  <Row className="p-2">
    <Col className="col-md-6">Column 1</Col>
    <Col className="col-md-6">Column 2</Col>
  </Row>
</Container>
```

### 4.2. Customizing Bootstrap
- Override with Caution: If you need to customize Bootstrap styles, do so by adding your own classes or using Sass variables.
- Avoid Inline Styles: Prefer using classes over inline styles to maintain consistency and leverage Bootstrap’s utility classes.

**Example**
```jsx
// Using custom class to override Bootstrap styles
<button className="btn btn-primary custom-btn">Click Me</button>

/* In your CSS */
.custom-btn {
  background-color: #4caf50;
  border: none;
}
```

## 5. Additional Best Practices

### 5.1. Version Control
- **Commit Frequently:** Make small, frequent commits with meaningful messages.
- **Pull Latest Changes:** Always pull the latest changes from the main branch before starting new work.
- **Resolve Conflicts Promptly:** Address merge conflicts as soon as they arise to avoid blocking progress.

### 5.2. Code Reviews
- **Regular Reviews:** Schedule regular code reviews to provide feedback and ensure adherence to guidelines.


### 5.3. Documentation
- **Inline Comments:** Use comments judiciously to explain complex logic or important decisions.
- **Component Documentation:** As mentioned, document reusable components for easy reference.

