# 🎨 Zardo UI Library

The **Zardo UI Library** is a collection of reusable styles and components designed to meet the design needs of our agency. Built with **React**, **TypeScript**, and **Vite**, our library is optimized for performance and developer experience.

## 🚀 Getting Started

To get started with the Zardo UI Library, follow these simple steps:

1. **Install the Library**:

   ```bash
   yarn add @zardo/ui-kit
   ```

2. **Import Styles**:
   Import the global styles in your main entry file:

   ```javascript
   import "@zardo/ui-kit/styles.css";
   ```

3. **Import Components**:
   Import the components you need in your project:

   ```javascript
   import { Button, Input } from "@zardo/ui-kit";
   ```

4. **Use the Components**:
   Utilize the components in your application:
   ```jsx
   const App = () => (
     <div>
       <Input placeholder="Enter your email" type="email" />
       <Button variant="solid" size="md">
         Submit
       </Button>
     </div>
   );
   ```

## 🎨 Components

Here's an overview of the components available in the Zardo UI Library:

### Basic Components

- **Button**: A versatile button component with various styles and sizes.
- **Input**: A customizable input field for capturing user data.

### Layout Components

- **Header**: A component for the top navigation or branding.
- **Footer**: A component for the bottom of your application.
- **Slogan**: A component for displaying catchy phrases or taglines.

### Transition Components

- **Section Transition**: A component for smooth transitions between sections.
- **Loading Screen**: A component to indicate loading states in your application.

## 📚 Documentation

For detailed documentation on each component, including usage examples and API references, visit our [Documentation](https://www.npmjs.com/package/@zardo/ui-kit).

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👤 Author

- [GitHub](https://github.com/ericzardo)
- [LinkedIn](https://www.linkedin.com/in/eric-zardo-a53630228/)
