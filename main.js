let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice,
        }
        dish[courseName, dishName, dishPrice]
        
        if (courseName === 'appetizers') {
            menu.courses.appetizers.push(dish);
        } else if (courseName === 'mains') {
            menu.courses.mains.push(dish);
        } else if (courseName === 'desserts') {
            menu.courses.desserts.push(dish);
        }
    },
    getRandomDishFromCourse: function (courseName) {
        let dishes = [];
        
        if (courseName === 'appetizers') {
            dishes = menu.courses.appetizers
        } else if (courseName === 'mains') {
            dishes = menu.courses.mains
        } else if (courseName === 'desserts') {
            dishes = menu.courses.desserts
        }
        
        let randomDish = Math.floor(Math.random() * dishes.length)
        
        return dishes[randomDish];
    },
    generateRandomMeal: function () {
        var appetizers = menu.getRandomDishFromCourse('appetizers')
        var mains = menu.getRandomDishFromCourse('mains')
        var desserts = menu.getRandomDishFromCourse('desserts')
        var mealCost = parseInt(appetizers.price.replace('$', '')) + parseInt(appetizers.price.replace('$', '')) + parseInt(appetizers.price.replace('$', ''))
        
        console.log(`Appetizer: ${appetizers.name} \nMain Course: ${mains.name} \nDessert: ${desserts.name} \nYour costs: $${mealCost}`)
        
        
        return
        
    },
    
};


// testing the program
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', '$6');
menu.addDishToCourse('appetizers', 'Fried Pickles', '$7');
menu.addDishToCourse('appetizers', 'Nachos', '$8');
menu.addDishToCourse('mains', 'Italian Beef Sandwich', '$10');
menu.addDishToCourse('mains', 'A Big Ole\' Salad', '$11');
menu.addDishToCourse('mains', 'Pizza!', '$12');
menu.addDishToCourse('desserts', 'Tiramisu', '$13');
menu.addDishToCourse('desserts', 'Cheesecake', '$14');
menu.addDishToCourse('desserts', 'Key Lime Pie', '$15');

menu.generateRandomMeal();