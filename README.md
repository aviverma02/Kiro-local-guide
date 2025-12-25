# 🍛 Delhi Street Food Recommender

**Kiro Week 5 Challenge: The Local Guide**

A smart street food recommendation system that helps you discover authentic Delhi street food based on your location, time, preferences, and budget. Built with custom context to understand Delhi's rich street food culture.

## 🎯 Project Overview

This project addresses the challenge of finding the right street food in Delhi's vast culinary landscape. Using Kiro AI with custom local context, it provides personalized recommendations that consider:
- Your current location in Delhi
- Time of day (breakfast, lunch, snacks, dinner)
- Food preferences (spicy, sweet, tangy, full meals)
- Budget constraints

## ✨ Features

- **Location-Based Recommendations**: Get suggestions for 5 major Delhi areas
- **Time-Aware Suggestions**: Different recommendations for different meal times
- **Budget Filtering**: Find food within your price range (₹20-₹300)
- **Preference Matching**: Filter by taste preference and meal type
- **Rich Local Context**: Powered by authentic Delhi street food knowledge
- **Responsive Design**: Works on desktop and mobile devices

## 🏗️ Project Structure

```
kiro-local-guide/
├── .kiro/
│   └── product.md          # Custom context file for Kiro
├── index.html              # Main application interface
├── README.md               # This file
└── .gitignore             # Git ignore configuration
```

## 🚀 How to Use

### Live Demo
Simply open `index.html` in your web browser:
1. Select your area in Delhi
2. Choose your meal time
3. Pick your food preference
4. Set your budget
5. Click "Find Food!" to get recommendations

### With Kiro AI
The `.kiro/product.md` file contains comprehensive context about Delhi street food. You can use Kiro to:
- Ask questions about specific areas or food items
- Get recommendations based on complex preferences
- Learn about Delhi's street food culture
- Plan a food tour itinerary

**Example Kiro Queries:**
```
"What's the best breakfast in Chandni Chowk under ₹100?"
"Recommend sweet dishes for winter evenings"
"Plan a street food tour covering 3 areas with budget ₹500"
```

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Structure and layout
- **CSS3**: Styling with gradient backgrounds and animations
- **Vanilla JavaScript**: Core logic and interactivity
- **Kiro AI**: Context-aware recommendations via product.md

### Key Features Implementation

**Smart Filtering Algorithm:**
```javascript
function getRecommendations(area, mealType, preference, budget) {
    // Filters food based on multiple criteria
    // Falls back to budget-only filtering if no exact matches
    // Returns sorted results by relevance
}
```

**Context File Structure:**
The `product.md` includes:
- Detailed area information (5 major locations)
- 40+ food items with prices and descriptions
- Seasonal recommendations
- Cultural context and local slang
- Dietary preference support
- Pro tips and safety guidelines

## 📊 Food Database Coverage

- **Areas Covered**: 5 (Chandni Chowk, CP, Karol Bagh, Sarojini Nagar, Lajpat Nagar)
- **Food Items**: 40+ authentic dishes
- **Price Range**: ₹20 - ₹300
- **Meal Types**: Breakfast, Lunch, Snacks, Dinner
- **Categories**: Spicy, Sweet, Tangy, Full Meals, Beverages

## 🎓 How Kiro Accelerated Development

Using Kiro AI significantly improved the development process:

1. **Context Research**: Kiro helped compile authentic Delhi street food information
2. **Code Generation**: Initial HTML/CSS structure generated faster
3. **Data Organization**: Structured the food database efficiently
4. **Bug Fixing**: Quick debugging of JavaScript logic
5. **Documentation**: Generated comprehensive README content

**Time Saved**: Approximately 60-70% compared to manual development

## 🌟 Future Enhancements

- [ ] Add user reviews and ratings
- [ ] Include actual restaurant/stall locations with maps
- [ ] Real-time weather-based recommendations
- [ ] Integration with food delivery APIs
- [ ] User preference learning and history
- [ ] Multi-language support (Hindi, English)
- [ ] Photo gallery of food items
- [ ] Veg/Non-veg/Jain/Vegan filtering

## 📝 Custom Context Details

The `.kiro/product.md` file contains:
- **800+ lines** of authentic Delhi street food information
- Area-specific specialties and famous stalls
- Seasonal recommendations
- Cultural context and dining etiquette
- Local slang and terminology
- Food safety tips
- Dietary preference guides

This context enables Kiro to provide highly accurate, culturally-aware recommendations.

## 🔧 Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/kiro-local-guide.git
cd kiro-local-guide
```

2. **Verify .kiro directory:**
```bash
ls -la .kiro/
# Should show product.md
```

3. **Open the application:**
```bash
# Simply open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

No build process or dependencies required!

## 🤝 Contributing

This is a learning project for the AI for Bharat Kiro Challenge. Feedback and suggestions are welcome!

## 📄 License

This project is created for educational purposes as part of the Kiro Week 5 Challenge.

## 👨‍💻 Author

Created for AI for Bharat - Kiro Week 5 Challenge: The Local Guide

---

## 📸 Screenshots

### Main Interface
[Recommendation form with Delhi-themed gradient background]

### Results Display
[Food recommendations with prices and descriptions]

### Mobile Responsive
[Mobile view of the application]

---

**Built with ❤️ using Kiro AI | December 2025**