const LIs = document.getElementsByClassName('item');
//console.log("Tablica elementow z klasa item: ", LIs);

const allCategories = document.querySelectorAll('.item');
const amount_of_LI2 = allCategories.length;
console.log('Number of categories: ', amount_of_LI2);

for (const category of allCategories) {
  console.log('Category:', category.querySelector('h2').textContent);
  const c1 = category.querySelector('ul'); // Odnoścnik do znacznika <ul> w HTML
  const c2 = c1.querySelectorAll('li'); // Odnośnik do znacznika <li> w HTML
  console.log('Elemnets: ', c2.length);
}
