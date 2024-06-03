document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});

const products = [
    {
      id: 'fc-1888',
      name: "Product A",
      avg_rating: 4.5
    },
    {
      id: 'fc-2050',
      name: "Product B",
      avg_rating: 4.7
    },
    {
      id: 'fs-1987',
      name: "Product C",
      avg_rating: 3.5
    },
    {
      id: 'ac-2000',
      name: "Product D",
      avg_rating: 3.9
    },
    {
      id: 'jj-1969',
      name: "Product E",
      avg_rating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
      const productNameSelect = document.getElementById('productName');
  
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.textContent = product.name;
          productNameSelect.appendChild(option);
      });
  });
  