# Ecommerce Website

A modern, responsive ecommerce website built with React, Vite, and TailwindCSS.

## Features

- **Authentication**: Simple login system with localStorage persistence
- **Product Catalog**: Browse products by category (Men/Women) and subcategory (Jackets, Pants, Blouse, Caps)
- **Product Details**: View detailed product information with size, color, and quantity selection
- **Shopping Cart**: Add, update, and remove items with localStorage persistence
- **Responsive Design**: Modern, minimal design that works on all devices

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management for cart

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── ProductCard.jsx # Product display card
│   └── CategoryList.jsx # Category filtering component
├── context/            # React Context
│   └── CartContext.jsx # Cart state management
├── data/               # Static data
│   └── products.json   # Product catalog
├── pages/              # Page components
│   ├── Login.jsx       # Login page
│   ├── Dashboard.jsx   # Product catalog page
│   ├── ProductDetails.jsx # Product detail page
│   └── Cart.jsx        # Shopping cart page
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Usage

1. **Login**: Use any email and password to access the application
2. **Browse Products**: Navigate through categories and subcategories
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Select size, color, and quantity, then add to cart
5. **Manage Cart**: Update quantities or remove items from the cart
6. **Checkout**: Proceed to checkout (demo functionality)

## Features in Detail

### Authentication
- Simple form-based login
- No real authentication - accepts any email/password combination
- Session persistence using localStorage

### Product Catalog
- Products organized by gender (Men/Women)
- Subcategories: Jackets, Pants, Blouse, Caps
- Filter products by subcategory
- Responsive grid layout

### Shopping Cart
- Add products with specific size and color combinations
- Update quantities in cart
- Remove individual items
- Persistent storage using localStorage
- Real-time total calculation

### Design
- Modern, minimal aesthetic
- Soft shadows and rounded corners
- Responsive design for all screen sizes
- Clean typography and spacing

## Customization

### Adding Products
Edit `src/data/products.json` to add new products:

```json
{
  "id": 15,
  "name": "Product Name",
  "category": "Men",
  "subcategory": "Jackets",
  "price": 99.99,
  "image": "image-url",
  "description": "Product description",
  "sizes": ["S", "M", "L"],
  "colors": ["Red", "Blue"],
  "stock": 10
}
```

### Styling
The project uses TailwindCSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)









## Steps :
1- Wrote the prompt draft file


2- gave the draft to GPT to write a prompt AFTER asking the clarifying questions
<img width="1187" height="573" alt="image" src="https://github.com/user-attachments/assets/fdd17b7b-88da-4ee3-a37d-48af5d7d9614" />

<img width="1187" height="573" alt="image" src="https://github.com/user-attachments/assets/25826874-bf52-4d0f-b366-0b800bb683b9" />

<img width="1187" height="573" alt="image" src="https://github.com/user-attachments/assets/cc367c50-21cb-44d7-a8c0-0cfb35e235fc" />




3- pasted the prompt in Cursor chat 

```
You are an expert React + Tailwind developer.  
Generate a **full React project** for an ecommerce website with the following requirements:

## Core Setup
- Use **React + Vite**.
- Style with **TailwindCSS** (minimal, modern, classic theme).
- Store products & categories in a **JSON file** (no backend).
- Save cart data in **localStorage**.
- Use React Router for page navigation.

## Website Structure
1. **Login Page**  
   - Simple placeholder login form (email + password).  
   - On submit, redirect to dashboard. No real authentication needed.  

2. **Dashboard Page**  
   - Show product categories (Men, Women).  
   - Each category displays subcategories: Jackets, Pants, Blouse, Caps.  
   - Show product cards (image, name, price, button to view details).  

3. **Product Details Page**  
   - Show: product name, image, description, price.  
   - Select options: size, quantity, color.  
   - Add to cart button.  

4. **Cart Page**  
   - Show all products added to cart.  
   - Display: product name, image, size, color, quantity, price per product, subtotal.  
   - Update quantity inside cart.  
   - Show total price.  
   - Cart persists with **localStorage**.  

## Requirements
- Components should be modular and reusable.
- Use Tailwind for layout (grid, flex, spacing).
- Keep theme minimal & modern (white background, soft shadows, rounded corners).
- Include a `data/products.json` file with sample products for each subcategory.
- Cart functionality:
  - Add product from details page.
  - Update quantity.
  - Remove product.
  - Persist in localStorage.

## Output
- Generate the **full React project code** with:
  - `App.jsx` and routing setup.
  - Pages: `Login.jsx`, `Dashboard.jsx`, `ProductDetails.jsx`, `Cart.jsx`.
  - Components: `Navbar.jsx`, `ProductCard.jsx`, `CategoryList.jsx`, etc.
  - JSON data file with example products.
  - Tailwind config included.
```


## License

This project is open source and available under the MIT License.

