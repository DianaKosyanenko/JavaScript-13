// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// // Вывод:
// // Name: John Smith

// Вывод:
// Name: Jane Doe
// Department: Sales

// class Employee {
//     constructor(name){
//         this.name = name;
//     }
//     displayInfo(){
//         console.log(`Name: ${this.name}`);
//     }
// }

// class Manager extends Employee {
//     constructor(name, department){
//         super(name);
//         this.department = department;
//     }
//     displayInfo(){
//         console.log(` Name: ${this.name} Department: ${this.department}`);
//     }
// }


// const employee = new Employee("John Smith");
// employee.displayInfo();
// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo();



// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
    // constructor(name, price) {
        // this.name = name;
        // this.price = price;
        // }
        // }
        
// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price
//     }
            
// }

// class Order {
//     constructor(orderNumber){
//         this.orderNumber = orderNumber;
//         this.product = [];

//     }
//     addProduct(product){
//         const products = this.product.push(product);
//         console.log(products);
//     }
    
//     getTotalPrice(){
//         this.totalPrice = 0;
//         for (let value in this.product) {
//             this.totalPrice += this.product[value].price;
            
//         }
//         return this.totalPrice;
        
        
//     }     
// }

// const order = new Order(12345);

// const product1 = new Product("Phone", 500);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600