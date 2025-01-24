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
