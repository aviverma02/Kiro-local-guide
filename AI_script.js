// ========================================
// Delhi Street Food Recommender - Script
// ========================================

// Food database based on product.md context
const foodDatabase = {
    'chandni-chowk': {
        breakfast: [
            { 
                name: 'Bedmi Puri with Aloo', 
                price: 50, 
                type: 'spicy', 
                desc: 'Deep-fried bread with spiced potato curry. A traditional Old Delhi breakfast favorite that has been served for generations.' 
            },
            { 
                name: 'Famous Jalebis', 
                price: 40, 
                type: 'sweet', 
                desc: 'Crispy, syrupy spirals from the legendary Old Famous Jalebi Wala. Best enjoyed hot and fresh in the morning.' 
            },
            { 
                name: 'Paranthe (Various)', 
                price: 60, 
                type: 'spicy', 
                desc: 'Stuffed flatbreads from Paranthe Wali Gali. Try aloo, gobi, or paneer varieties with tangy pickles.' 
            }
        ],
        snacks: [
            { 
                name: 'Golgappa', 
                price: 30, 
                type: 'tangy', 
                desc: 'Crispy shells filled with tangy spiced water. The ultimate Delhi chaat experience that everyone loves.' 
            },
            { 
                name: 'Aloo Tikki Chaat', 
                price: 40, 
                type: 'tangy', 
                desc: 'Spiced potato patties topped with yogurt, chutneys, and crunchy sev. A perfect evening snack.' 
            },
            { 
                name: 'Hot Samosas', 
                price: 20, 
                type: 'spicy', 
                desc: 'Crispy triangular pastries with spiced potato filling. A classic that never disappoints.' 
            }
        ],
        lunch: [
            { 
                name: 'Chole Bhature', 
                price: 70, 
                type: 'full-meal', 
                desc: 'Spicy chickpeas with fluffy fried bread. A hearty Punjabi meal that will keep you full for hours.' 
            }
        ],
        dinner: [
            { 
                name: 'Butter Chicken Roll', 
                price: 100, 
                type: 'full-meal', 
                desc: 'Popular street wrap with creamy butter chicken filling. Perfect for a quick dinner on the go.' 
            }
        ]
    },
    'connaught-place': {
        breakfast: [
            { 
                name: 'Egg Rolls', 
                price: 50, 
                type: 'spicy', 
                desc: 'Scrambled eggs wrapped in paratha with onions and spices. A quick breakfast option.' 
            }
        ],
        snacks: [
            { 
                name: 'Steamed Momos', 
                price: 60, 
                type: 'spicy', 
                desc: 'Tender dumplings filled with vegetables, served with spicy red chutney. A CP favorite.' 
            },
            { 
                name: 'Papdi Chaat', 
                price: 50, 
                type: 'tangy', 
                desc: 'Crispy wafers topped with yogurt, chutneys, and spices. A burst of flavors in every bite.' 
            },
            { 
                name: 'Fresh Fruit Juice', 
                price: 60, 
                type: 'beverage', 
                desc: 'Seasonal fresh fruit juices, cold and refreshing. Perfect for Delhi summers.' 
            }
        ],
        lunch: [
            { 
                name: 'Veg Rolls', 
                price: 80, 
                type: 'full-meal', 
                desc: 'Rolled wraps with spiced vegetables and tangy sauces. Quick and satisfying.' 
            },
            { 
                name: 'Momos Platter', 
                price: 90, 
                type: 'full-meal', 
                desc: 'Combination of steamed and fried momos with multiple sauces. Great for sharing!' 
            }
        ],
        dinner: [
            { 
                name: 'Paneer Roll', 
                price: 100, 
                type: 'full-meal', 
                desc: 'Grilled paneer wrapped in soft paratha with mint chutney. A vegetarian delight.' 
            }
        ]
    },
    'karol-bagh': {
        breakfast: [
            { 
                name: 'Chole Bhature', 
                price: 60, 
                type: 'full-meal', 
                desc: 'The Karol Bagh specialty - perfectly spiced chole with soft, fluffy bhature.' 
            },
            { 
                name: 'Aloo Puri', 
                price: 40, 
                type: 'spicy', 
                desc: 'Fried bread with potato curry, a lighter breakfast option that is still filling.' 
            }
        ],
        snacks: [
            { 
                name: 'Crispy Samosas', 
                price: 25, 
                type: 'spicy', 
                desc: 'Hot, crispy samosas with potato filling and mint chutney. Best enjoyed fresh from the kadai.' 
            },
            { 
                name: 'Aloo Tikki', 
                price: 35, 
                type: 'tangy', 
                desc: 'Fried potato patties served with tamarind chutney. Simple yet delicious.' 
            },
            { 
                name: 'Masala Chai', 
                price: 15, 
                type: 'beverage', 
                desc: 'Hot spiced tea, perfect with snacks. The authentic Delhi chai experience.' 
            }
        ],
        lunch: [
            { 
                name: 'Rajma Chawal', 
                price: 80, 
                type: 'full-meal', 
                desc: 'Kidney beans curry with rice. Comfort food at its best.' 
            }
        ],
        dinner: [
            { 
                name: 'Chole Kulche', 
                price: 70, 
                type: 'full-meal', 
                desc: 'Spicy chickpeas with soft bread. A lighter dinner option.' 
            }
        ]
    },
    'sarojini-nagar': {
        breakfast: [
            { 
                name: 'Veg Sandwich', 
                price: 40, 
                type: 'spicy', 
                desc: 'Grilled sandwich with vegetables and spicy chutney. Quick breakfast while shopping.' 
            }
        ],
        snacks: [
            { 
                name: 'Fried Momos', 
                price: 50, 
                type: 'spicy', 
                desc: 'Crispy fried dumplings, perfect while shopping. A must-try at Sarojini.' 
            },
            { 
                name: 'Sugarcane Juice', 
                price: 30, 
                type: 'beverage', 
                desc: 'Fresh pressed sugarcane juice, refreshing and sweet. Best on a hot day.' 
            },
            { 
                name: 'Corn Chaat', 
                price: 40, 
                type: 'tangy', 
                desc: 'Boiled corn with lime, spices, and chaat masala. Light and tasty.' 
            }
        ],
        lunch: [
            { 
                name: 'Quick Thali', 
                price: 80, 
                type: 'full-meal', 
                desc: 'Simple meal with rice, dal, sabzi, and roti. Quick and filling.' 
            }
        ],
        dinner: [
            { 
                name: 'Pav Bhaji', 
                price: 70, 
                type: 'full-meal', 
                desc: 'Spiced mashed vegetables with buttered bread. A Mumbai favorite popular in Delhi.' 
            }
        ]
    },
    'lajpat-nagar': {
        breakfast: [
            { 
                name: 'Masala Dosa', 
                price: 70, 
                type: 'spicy', 
                desc: 'Crispy South Indian crepe with potato filling. Served with sambar and chutneys.' 
            },
            { 
                name: 'Idli Sambar', 
                price: 50, 
                type: 'spicy', 
                desc: 'Soft steamed rice cakes with lentil soup. Light and healthy breakfast.' 
            }
        ],
        snacks: [
            { 
                name: 'Raj Kachori', 
                price: 60, 
                type: 'tangy', 
                desc: 'Large crispy shell filled with yogurt, potatoes, and chutneys. An elaborate chaat experience.' 
            },
            { 
                name: 'Dahi Bhalla', 
                price: 50, 
                type: 'tangy', 
                desc: 'Soft lentil dumplings in creamy yogurt with spices. Cool and refreshing.' 
            },
            { 
                name: 'Filter Coffee', 
                price: 30, 
                type: 'beverage', 
                desc: 'Strong South Indian filter coffee. Perfect afternoon pick-me-up.' 
            }
        ],
        lunch: [
            { 
                name: 'South Indian Thali', 
                price: 100, 
                type: 'full-meal', 
                desc: 'Complete meal with dosa, idli, vada, sambar, and chutneys. A feast!' 
            }
        ],
        dinner: [
            { 
                name: 'Masala Dosa', 
                price: 70, 
                type: 'full-meal', 
                desc: 'The evening dosa hits different. Crispy and satisfying.' 
            }
        ]
    }
};

// ========================================
// Event Listeners
// ========================================

// Budget slider handler
const budgetSlider = document.getElementById('budget');
const budgetValue = document.getElementById('budgetValue');

budgetSlider.addEventListener('input', function() {
    budgetValue.textContent = this.value;
});

// Form submission handler
document.getElementById('foodForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const area = document.getElementById('area').value;
    const mealType = document.getElementById('mealType').value;
    const preference = document.getElementById('preference').value;
    const budget = parseInt(document.getElementById('budget').value);
    
    // Show results section
    const resultsDiv = document.getElementById('results');
    const foodList = document.getElementById('foodList');
    resultsDiv.style.display = 'block';
    foodList.innerHTML = '<div class="loading">Finding the perfect food for you</div>';
    
    // Simulate processing time for better UX
    setTimeout(() => {
        const recommendations = getRecommendations(area, mealType, preference, budget);
        displayResults(recommendations);
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1000);
});

// ========================================
// Core Functions
// ========================================

/**
 * Get food recommendations based on user preferences
 * @param {string} area - Selected area
 * @param {string} mealType - breakfast, lunch, snacks, or dinner
 * @param {string} preference - spicy, sweet, tangy, full-meal, or beverage
 * @param {number} budget - Maximum price willing to pay
 * @returns {Array} Array of matching food items
 */
function getRecommendations(area, mealType, preference, budget) {
    let allFood = [];
    
    // Get food from selected area or all areas
    if (area === 'any') {
        // Search all areas
        Object.values(foodDatabase).forEach(areaFood => {
            if (areaFood[mealType]) {
                allFood = [...allFood, ...areaFood[mealType]];
            }
        });
    } else {
        // Search specific area
        const areaData = foodDatabase[area];
        if (areaData && areaData[mealType]) {
            allFood = areaData[mealType];
        }
    }
    
    // Filter by preference and budget
    let filtered = allFood.filter(item => {
        const matchesPreference = matchesUserPreference(item, preference);
        const withinBudget = item.price <= budget;
        return matchesPreference && withinBudget;
    });
    
    // If no exact matches, show items within budget only
    if (filtered.length === 0) {
        filtered = allFood.filter(item => item.price <= budget);
    }
    
    // Sort by relevance (exact match first, then by price)
    filtered.sort((a, b) => {
        const aExactMatch = a.type === preference;
        const bExactMatch = b.type === preference;
        
        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;
        
        return a.price - b.price;
    });
    
    return filtered;
}

/**
 * Check if food item matches user preference
 * @param {Object} item - Food item
 * @param {string} preference - User's preference
 * @returns {boolean} True if matches
 */
function matchesUserPreference(item, preference) {
    // Full meal is a specific type
    if (preference === 'full-meal') {
        return item.type === 'full-meal';
    }
    
    // For other preferences, allow spicy items as fallback
    if (item.type === preference) {
        return true;
    }
    
    // Spicy items can satisfy most savory cravings
    if (preference !== 'sweet' && preference !== 'beverage' && item.type === 'spicy') {
        return true;
    }
    
    return false;
}

/**
 * Display food recommendations in the UI
 * @param {Array} recommendations - Array of food items to display
 */
function displayResults(recommendations) {
    const foodList = document.getElementById('foodList');
    
    if (recommendations.length === 0) {
        foodList.innerHTML = `
            <div class="no-results">
                😕 No matches found for your preferences.<br>
                Try adjusting your budget or choosing a different area!
            </div>
        `;
        return;
    }
    
    foodList.innerHTML = recommendations.map(item => `
        <div class="food-item">
            <h3><span class="emoji">🍽️</span>${item.name}</h3>
            <div class="food-details">
                <span class="detail-badge">💰 ₹${item.price}</span>
                <span class="detail-badge">🏷️ ${formatType(item.type)}</span>
            </div>
            <p class="description">${item.desc}</p>
        </div>
    `).join('');
}

/**
 * Format food type for display
 * @param {string} type - Food type
 * @returns {string} Formatted type
 */
function formatType(type) {
    return type
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ========================================
// Utility Functions
// ========================================

/**
 * Get current time-based meal type
 * @returns {string} Suggested meal type based on current time
 */
function getCurrentMealType() {
    const hour = new Date().getHours();
    
    if (hour >= 7 && hour < 11) return 'breakfast';
    if (hour >= 11 && hour < 15) return 'lunch';
    if (hour >= 15 && hour < 19) return 'snacks';
    if (hour >= 19 && hour < 23) return 'dinner';
    
    return 'snacks'; // Default
}

/**
 * Auto-suggest meal type based on current time (optional feature)
 */
function autoSuggestMealType() {
    const suggestedMealType = getCurrentMealType();
    const mealTypeSelect = document.getElementById('mealType');
    
    // You can uncomment this to auto-select the meal type
    // mealTypeSelect.value = suggestedMealType;
}

// ========================================
// Initialize
// ========================================

// Call initialization functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Delhi Street Food Recommender initialized!');
    console.log('Food database loaded with', Object.keys(foodDatabase).length, 'areas');
    
    // Optional: Auto-suggest meal type
    // autoSuggestMealType();
});

// ========================================
// Export for testing (if needed)
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        foodDatabase,
        getRecommendations,
        matchesUserPreference,
        formatType
    };
}